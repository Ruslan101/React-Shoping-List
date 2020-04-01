import { connect } from 'react-redux';
import mapStateToProps from '../state/mapStateToProps.js';
import mapDispatchToProps from '../state/mapDispatchToProps.js';
import Title from './title.js';
import List from './list.js';
import Form from './form.js'; 

export const Title_w = connect(mapStateToProps("Title"), mapDispatchToProps("Title"))(Title);
export const List_w = connect(mapStateToProps("List"), mapDispatchToProps("List"))(List);
export const Form_w = connect(mapStateToProps("Form"), mapDispatchToProps("Form"))(Form);