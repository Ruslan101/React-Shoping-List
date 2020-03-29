import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
//import { Main as Form, Title } from './App.js';
import { store, initialUser, addItem, clearItem } from './state.js';

const element = document.getElementById("root");

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = { shoppinglist: [], userName: "" };
        this.unsubscribe = store.subscribe(() => this.updateStore());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    updateStore = () => { 
        this.setState(store.getState());
    }
    render() {
        return (
        <div>
            <Title name={this.state.userName}></Title>
            <Form></Form>
            <List>{this.state.shoppinglist}</List>
        </div>);
    }
}

class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (this.props.name == "") ? (<h1>Shoping list</h1>) : (<h1>{this.props.name}'s shoping list</h1>);
    }
}
class Form extends React.Component {
    constructor(props) {
        super(props);
    }
    submit = (e) => {
        e.preventDefault();

        if(e.target.elements[0].value != "")
            store.dispatch(initialUser(e.target.elements[0].value));
        if(e.target.elements[1].value != "")
            store.dispatch(addItem(e.target.elements[1].value));

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
class List extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick = (e) => {
        let nodeItem = e.target.parentNode.textContent[0];
        store.dispatch(clearItem(nodeItem - 1));
        
        //e.currentTarget.parentNode.parentNode.removeChild(e.currentTarget.parentNode);
    } 
    render() {
        var items = [];

        for(let i=0; this.props.children.length > i; i++)
            items[i] = this.props.children[i].item;

        return <div>
            {
                React.Children.map(items, (thisArg, index) => 
                    <p>{index+1}. {thisArg} 
                        <button onClick={this.handleClick}>Remove</button>
                    </p>
                )
            }
        </div>;
    }
}
ReactDOM.render(<Main></Main>, element);