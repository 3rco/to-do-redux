import React from 'react';
import { connect } from 'react-redux';
import InputForm from './components/InputForm';
import ToDoList from './components/ToDoList';

const App = (props) => {
  console.log(props);
  return (
    <div>
      <h1>TO-DO List</h1>
      <div>
        <InputForm/>
      </div>
      <ToDoList/>
      <button>Delete the checked ones</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    liste: state.liste
  }
}

export default connect(mapStateToProps)(App);
