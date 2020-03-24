import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { Main as Form, Title } from './App.js';

const initialState = {
    userName: "Default Name",
    userId: "2351"
}

function actionCreator (action) {
    return { type: action.type,
        payload: action.payload
	};
}

function mapStateToProps(state) {
    return { name: state.name };
}

function reducer(state, action) {
    if(action.type == "change")
        return { userName: action.name };
    else
        return state;
}

class Main extends React.Component {
    render() {
        return(
        <form>
            <Title>Name</Title>
            <Form />
        </form>);
    }
}


const store = createStore(reducer, initialState);

const WrapMainComponent = connect(mapStateToProps)(Main);

ReactDOM.render(<Provider store={ store }><WrapMainComponent /></Provider>, document.getElementById("root"));






















