import React from 'react';



class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        this.props.amLoaded();
    }

    getMyCoordinates = (theta, radius) => {
    return{
        x: Math.cos(theta) * radius,
        y: Math.sin(theta) * radius,
    }
}

    render() {
        let newCoordinates= this.getMyCoordinates(this.props.theta, this.props.radius);
        return (
            <img alt="A random thing" src={this.props.pic} 
            style={{
                ...styles.card, 
                left: `${this.props.centre.x + newCoordinates.x}px`, 
                top: `${this.props.centre.y - newCoordinates.y}px`
            }}/>
        )
    }
}

const styles = {
    card : {
        margin: '0',
        padding: '0',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', 
        height: '200px', 
        width: '200px', 
        backgroundColor: 'blue',
        borderRadius: '50%'
    }
}
export default React.memo(Card);