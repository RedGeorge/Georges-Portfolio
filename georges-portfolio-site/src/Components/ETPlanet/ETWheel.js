import React, { Component } from 'react';

import Card from './ETCard';


export class Wheel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            radius: 250,
            cards: [],
            theta: 0.0,
            snapInProgress: false,
            cardsLoaded: 0,
            loaded: false,
            snapPoint: {
                x: null,
                y: null
            }
        }

        this.tempTheta = 0.0;
        this.animId = null;
    }

    componentDidMount() {
        let centreOfWheel = {
            x: parseFloat(this.wheel.style.width) / 2.0,
            y: parseFloat(this.wheel.style.height) / 2.0,   
        }

        let newCards = [];

        for (let i = 0; i < 8; i++) {
            newCards.push(
            <Card theta={(Math.PI / 4.0) * i} radius={this.state.radius} centre= {centreOfWheel} key={`card${i}`} pic={`${i}-200x200.jpg`} amLoaded={this.cardLoaded}/>
            );
        }

        this.setState({ cards: newCards });
    }

    handleScroll = e => {
        if (!this.state.loaded && this.snapInProgress) {
            return;
        } else {
        clearTimeout(this.animId);

        let scrollSpeed = (e.deltaY / 360) * 20;

        this.tempTheta += scrollSpeed;

        this.wheel.style.transitionDuration = '0.0s';
        this.wheel.style.transitionDelay = '0.0s';
        this.wheel.style.transform = `translate(-50%, -50%) rotate(${this.tempTheta}deg)`;

        //rotate the cards in the opposite direction of the wheel to maintain image equilibrium
        for (let i = 0; i < this.wheel.children.length; i++) {
            this.wheel.children[i].style.transitionDuration = '0.0s';
            this.wheel.children[i].style.transitionDelay = '0.0s';
            this.wheel.children[i].style.transform = `translate(-50%, -50%) rotate(${-1.0 * this.tempTheta}deg)`
        }

        this.animId = setTimeout(() => {
            this.setState({ theta: this.tempTheta, snapInProgress: true }, () => {
                this.snapBack();
            });
        }, 150);
        }
    }

    snapBack = () => {
        let centreOfWheel = {
            x: this.wheel.getBoundingClientRect().x + (this.wheel.getBoundingClientRect().width / 2),
            y: this.wheel.getBoundingClientRect().y + (this.wheel.getBoundingClientRect().height / 2),
        }
        let snapPointTheta = Math.atan2(Math.abs(this.state.snapPoint.y - centreOfWheel.y), Math.abs(this.state.snapPoint.x - centreOfWheel.x));
        snapPointTheta *= 180 / Math.PI;

        //calculate shortest distance
        let shortestDistance = 
            Math.pow((this.wheel.children[3].getBoundingClientRect().x + (this.wheel.children[3].getBoundingClientRect().width / 2)) - this.state.snapPoint.x, 2)
            + Math.pow((this.wheel.children[3].getBoundingClientRect().y + (this.wheel.children[3].getBoundingClientRect().height / 2)) - this.state.snapPoint.y, 2);
        shortestDistance = Math.sqrt(shortestDistance);

        let closestCard = null;

        for (let i = 0; i < this.wheel.children.length; i++) {
            let dx = Math.pow((this.wheel.children[i].getBoundingClientRect().x + (this.wheel.children[i].getBoundingClientRect().width / 2)) - this.state.snapPoint.x, 2)
            let dy = Math.pow((this.wheel.children[i].getBoundingClientRect().y + (this.wheel.children[i].getBoundingClientRect().height / 2)) - this.state.snapPoint.y, 2);
            let currentShortestDistance = Math.sqrt(dx + dy);

            if (currentShortestDistance <= shortestDistance) {
                shortestDistance = currentShortestDistance;
                closestCard = this.wheel.children[i];
            }
        }
        
        // calculate theta between closest card and snap point
        let closestCardsX = closestCard.getBoundingClientRect().x + (closestCard.getBoundingClientRect().width / 2);
        let closestCardsY = closestCard.getBoundingClientRect().y + (closestCard.getBoundingClientRect().height / 2);
        let closestCardsTheta = Math.atan2(Math.abs(closestCardsY.y - centreOfWheel.y), Math.abs(closestCardsX.x - centreOfWheel.x));
        closestCardsTheta *= 180 / Math ;

        let thetaBetween = Math.abs(closestCardsTheta - snapPointTheta);

        // decide whether to make a positive or negative degree shifts
        if (closestCardsX > centreOfWheel.x && closestCardsY <= centreOfWheel.y) {//Quadrant I
            thetaBetween = closestCardsTheta > snapPointTheta ? thetaBetween : -1.0 * thetaBetween;
        } else if (closestCardsX <= centreOfWheel.x && closestCardsY <= centreOfWheel.y) {// Quadrant II
            thetaBetween = closestCardsTheta > snapPointTheta ? -1.0 * thetaBetween : thetaBetween;
        } else if (closestCardsX <= centreOfWheel.x && closestCardsY > centreOfWheel.y) {// Quadrant III
            thetaBetween = closestCardsTheta > snapPointTheta ? thetaBetween : -1.0 * thetaBetween;
        } else if (closestCardsX > centreOfWheel.x && closestCardsY >= centreOfWheel.y) {// Quadrant IV
            thetaBetween = closestCardsTheta > snapPointTheta ? -1.0 * thetaBetween : thetaBetween;
        }

        // snap wheel to snapping point
        this.wheel.style.transitionDuration = '1.0s';
        this.wheel.style.transitionDelay = '0.1s';
        this.wheel.style.transform = `translate(-50%, -50%) rotate(${this.state.theta + thetaBetween}deg)`;

        //rotate the cards in the opposite direction of the wheel to maintain image equilibrium
        for (let i = 0; i < this.wheel.children.length; i++) {
            this.wheel.children[i].style.transitionDuration = '1.0s';
            this.wheel.children[i].style.transitionDelay = '0.1s';
            this.wheel.children[i].style.transform = `translate(-50%, -50%) rotate(${-1.0 * (this.state.theta + thetaBetween)}deg)`
        }

        this.animId = setTimeout(() => {
            this.setState(prevState => {
                return {
                    theta: prevState.theta + thetaBetween, 
                    snapInProgress: false 
                }
            });
        }, 200);
    }

    cardLoaded = () => {
        this.setState(prevState => {
            return{
            cardsLoaded: prevState.cardsLoaded + 1
            }
        }, () => {
            if (this.state.cardsLoaded === 8) {
                this.setState({
                    loaded: true,
                    snapPoint: {
                        x: this.wheel.children[2].getBoundingClientRect().x + (this.wheel.children[2].getBoundingClientRect().width / 2),
                        y: this.wheel.children[2].getBoundingClientRect().y + (this.wheel.children[2].getBoundingClientRect().height / 2),
                    }
                })
            }
        });
    }

    render() {
        return (
            <div onWheel={this.handleScroll} ref={refId => this.wheel = refId} style={styles.wheel}>
                {this.state.cards}
            </div>
        )
    }
}

const styles = {
    wheel : {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', 
        height: '200px', 
        width: '200px', 
        backgroundColor: 'red',
        borderRadius: '50%'
    }
}

export default Wheel;