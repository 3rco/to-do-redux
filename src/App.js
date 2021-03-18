import React from 'react';
import { connect } from 'react-redux';
import InputForm from './components/InputForm';
import ToDoList from './components/ToDoList';
import { deleteItems } from './actions';

const App = (props) => {  
  return (
    <div>
      <h1>TO-DO List</h1>
      <div>
        <InputForm/>
      </div>
      <ToDoList/>
      <button onClick={()=> props.deleteItems()}>Delete the checked ones</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    liste: state.liste
  }
}

export default connect(mapStateToProps, {deleteItems})(App);
