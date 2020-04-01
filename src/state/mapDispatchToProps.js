import { bindActionCreators } from 'redux';
import { initialUser, addItem, clearItem } from "./actions.js";

export default function mapDispatchToProps(component) { 
    switch(component) {
        case "Title": {
            return function () {
                return {};
            }
        };
        case "List": {
            return function(dispatch) {
                return {
                    clearItem: bindActionCreators(clearItem, dispatch)
                }
            }
        };
        case "Form": {
            return function(dispatch) {
                return {
                    initialUser: bindActionCreators(initialUser, dispatch),
                    addItem: bindActionCreators(addItem, dispatch)
                }
            }
        }
    }
}