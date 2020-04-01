import React from 'react';

export default class Title extends React.Component {
    render() {
        return (this.props.userName == "") ? (<h1>Shoping list</h1>) : (<h1>{this.props.userName}'s shoping list</h1>);
    }
}