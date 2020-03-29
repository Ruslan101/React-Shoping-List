import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';

const element = document.getElementById("root");
const CHANGE_NAME = "CHANGE_NAME";
const store = createStore(reducer, { name: undefined });

function reducer(state, action) {
    switch(action.type) {
        case CHANGE_NAME: return { name: action.name };

        default: return state;
    }
}
function changeName(name) { // Action creator
    return { type: CHANGE_NAME, name: name };
}

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.dispatch = this.props.dispatch;
        console.info(this.props);
    }
    submit = (e) => {
        e.preventDefault();

        if(e.target.elements[0].value != "")
            this.props.changeName(e.target.elements[0].value);
    
        e.target.elements[0].value = "";
    }
    render() {
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
                <form onSubmit={this.submit}>
                    <input type="text" placeholder="Name"></input>
                    <input type="submit" value="Send"></input>
                </form>
            </div>
        );
    }
}

const setStateToProps = (state) => {
    return { name: state.name };
};
const setDispatchToProps = (dispatch) => {
    return {
        changeName: bindActionCreators(changeName, dispatch)
    }
}

const WrapMainComponent = connect(setStateToProps, setDispatchToProps)(Main);

ReactDOM.render(
<Provider store={store}>
    <WrapMainComponent />
</Provider>, element);