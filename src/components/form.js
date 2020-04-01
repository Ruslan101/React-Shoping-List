import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
    }
    submit = (e) => {
        e.preventDefault();

        if(e.target.elements[0].value != "")
            this.props.initialUser(e.target.elements[0].value);
        if(e.target.elements[1].value != "")
            this.props.addItem(e.target.elements[1].value);

        e.target.elements[0].value = "";
        e.target.elements[1].value = "";
    }
    render() {
        return <form onSubmit={this.submit}>
            <input type="text" placeholder="Name" name="name"></input><br />
            <input type="text" placeholder="Add in list..." name="list"></input>
            <input type="submit" value="Submit"></input>
        </form>
    }
}