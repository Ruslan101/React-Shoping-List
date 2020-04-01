export default function mapStateToProps(component) {
    switch(component) {
        case "Title": {
            return function (state) {
                return { 
                    userName: state.userName 
                };
            }
        };
        case "List": {
            return function (state) {
                return {
                    shoppinglist: state.shoppinglist
                }
            }
        }
    }
}