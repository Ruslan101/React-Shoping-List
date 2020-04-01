import React from 'react';

export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    handleClick = (e) => {
        let nodeItem = e.target.parentNode.textContent[0];
        this.props.clearItem(nodeItem - 1);
    }
    render() {
        return (
            <div> {
                React.Children.map(this.props.shoppinglist, (thisArg, index) => 
                    <p>{index+1}. {thisArg} 
                        <button onClick={this.handleClick}>Remove</button>
                    </p>
                )
            }
            </div>
        );
    }
}