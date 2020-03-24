import React from 'react';
import ReactDOM, { render, unmountComponentAtNode, findDOMNode, createPortal } from 'react-dom';
//import * as ReactDOM  from 'react-dom';
import './index.css';
import ReactDOMServer from 'react-dom/server';
import * as serviceWorker from './serviceWorker';
import { Formik } from 'formik';
import { FixedSizeList as List } from 'react-window';
import PropTypes from 'prop-types';
import ReactTestUtils from 'react-dom/test-utils';

// @flow

var element = document.getElementById("root");
var app_root = document.getElementById("app-root");

function tick() {
    const element = (
        <React.StrictMode>
            <h1>Hello, world!</h1>
        </React.StrictMode>
      
    );
    //ReactDOM.render(element, document.getElementById("root"));
  }
  
  //setInterval(tick, 1000);

  ///////////////////////////////////////////

var user = "Bob";
var nameUser = () => "Bob";

//const sayHi = <h1>Hello, {nameUser()}</h1>;

//ReactDOM.render(sayHi, document.getElementById("root"));

///////////////////////////////////////////

var a = <p>Some React element</p>;
var b = React.cloneElement(a);

//ReactDOM.render(b, document.getElementById("root"));

///////////////////////////////////////////////////

/*function SayHi(props) {
    return <h1>Привет, {props.name}</h1>;
}*/

//ReactDOM.render(<SayHi name="Mark" />, document.getElementById("root"));

/////////////////////////////////////////////////////

class SayHi extends React.Component {
    render() {
        return <h1>Привет, {this.props.name}</h1>;
    }
}

//ReactDOM.render(<SayHi name="Thomas" />, document.getElementById("root"));


class UsersList_1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = { count: 0 };
        //this.incrementCount = this.incrementCount.bind(this);
    }
    incrementCount = () => {
        this.setState(state => ({ count: state.count + 1 }));
    }

    render() {
        return <div>
            <p>Count = {this.state.count}</p>
            <button onClick={this.incrementCount}>Add</button>
        </div>
    }
}
//ReactDOM.render(<UsersList />, document.getElementById("root"));

class Welcome extends React.Component {
    render() {
        throw new Error();
        return <div>
            <p>{this.props.children}</p>
            {createPortal(<p>{this.props.children}</p>, document.getElementById("app-root"))}
        </div>;
    }
}

//render(<Welcome>Привет, мир!</Welcome>, document.getElementById("root"));

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { error: false };
    }
    static getDerivedStateFromError(error) {
        // Произошла ошибка!!!

        return {error: true};
    }
    componentDidCatch(error, info) {
        console.info(info.componentStack);
        console.error(error);
    }
    render() {
        if(this.state.error) { // Произошла ошибка
            return <h1>Что-то пошло не так.</h1>; // Отображение запасного UI
        }
        // Ошибки нет
            return <Welcome>{this.props.children}</Welcome>; // Отображение того что нужно
    }
}

//render(<App>Hello world</App>, document.getElementById("root"));

class Clicker extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick = () => {
        this.forceUpdate();
    }
    render() {
        return <>
            <Tittle></Tittle>
            <button onClick={this.handleClick}>Click me</button>
        </>;
    }
}
class Tittle extends React.Component {
    constructor(props) {
        super(props);

        this.button = { click: false };
    }
    getSnapshotBeforeUpdate() {
        this.button.click = (this.button.click) ? false : true;
    }
    render() {
        if(this.button.click)
            return <h1>Button enabled</h1>;
        else
            return <h1>Button disabled</h1>;
    }
}

//render(<Clicker />, document.getElementById("root"));

class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.info("Conponent is mounted");
    }
    render() {
        return <h1>{this.props.children}</h1>
    }
    componentWillUnmount() {
        console.info("conponent is unmount");
    }
}

//render(<Register>Hello world</Register>, document.getElementById("root"));

//unmountComponentAtNode(document.getElementById("root"));

//render(<Register>Hello world</Register>, document.getElementById("root"));





/////////////////////////////////////////////////////////////////////////////////////

var users = ["Mike", "Bill", "Scott"];

function UsersList(props) {
    const userlist = props.children.map((users, index) => <p key={index}>{users}</p>);

    return <div>{userlist}</div>;
}

//render(<UsersList>{users}</UsersList>, element);

/*function NumberList(props) {
    const numbers = props.children;
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  
  const numbers = [1, 2, 3, 4, 5];

render(<NumberList>{numbers}</NumberList>, element);
*/

function Chill(props) {
    return <span>{React.Children.map(props.children, (thisArg) => <p>Hello {thisArg}</p>)}</span>;
}

//render(<Chill>{users}</Chill>, element); // Hello Mike, Hello Bill, Hello Scott

//ReactDOM.render(<App />, document.getElementById('root'));

//// FORMIK ////
function FormikForm() {
    return (
        <div>
            <h1>Anywhere in your app!</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email)
                        errors.email = 'Required';
                    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
                        errors.email = 'Invalid email address';
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </form>
                )}
            </Formik>
        </div>);
}

//render(<FormikForm />, element);

class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { click: false };
    }
    handleClick = () => {
        this.setState(state => ({ click: !state.click }));
    }
    render() {
        return <>
            <Child click={this.state.click}></Child>
            <button onClick={this.handleClick}>Button</button>
        </>;
    }
}
class Child extends React.Component {
    render() {
        if(this.props.click)
            return <p>On</p>
        else
            return <p>Off</p>;
    }
}

//render(<Parent />, element);

const Row = ({ index, style }) => ( <div style={style}>Row {index}</div>);
   
const ExampleRowList = () => (
    <List
        height={150}
        itemCount={1000}
        itemSize={35}
        width={300}
    >
        {Row}
    </List>
);

//render(<ExampleRowList />, element);

const Column = ({ index, style }) => ( <div style={style}>Column {index}</div>);
   
const ExampleColumnList = () => (
    <List
        height={75}
        itemCount={1000}
        itemSize={100}
        layout="horizontal"
        width={300}
    >
        {Column}
    </List>
);

//render(<ExampleColumnList />, app_root);

function Example() {
    return (
        <React.StrictMode>
            <h1>Hello, world!</h1>
        </React.StrictMode>
    );
}
//render(<Example />, element);

class PropTypesExample extends React.Component {
    render() {
        return <h1>Привет, {this.props.name}</h1>;
    }
}
  
PropTypesExample.propTypes = {
    name: PropTypes.string
};

//render(<PropTypesExample name={5} />, element);

class RefExample extends React.Component {
    constructor(props) {
        super(props);

        this.ref = React.createRef();
    }
    handleClick = () => {
        var color = Math.floor(Math.random() * 16777215).toString(16);
        this.ref.current.style.color = `#${color}`;
    }
    render() {
        return( 
            <>
                <h1 ref={this.ref}>Hello world</h1>
                <button onClick={this.handleClick}>Click me</button>
            </>);
    }
}
render(<RefExample />, element);

console.log(React)







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

