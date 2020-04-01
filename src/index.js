import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './state/store.js';
import { Title_w, List_w, Form_w } from "./components/Components_w.js";

const element = document.getElementById("root");

class Main extends React.Component {
    render() {
        return (
            <div>
                <Title_w store={store} />
                <Form_w store={store} />
                <List_w store={store} />
            </div>
        );
    }
}

ReactDOM.render(<Main />, element);