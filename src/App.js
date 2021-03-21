import React from 'react';
import { connect } from 'react-redux';
import InputForm from './components/InputForm';
import ToDoList from './components/ToDoList';
import { deleteItems } from './actions';
import "./styles.css";

const App = (props) => {  
  return (
    <div className="App">
      <h1>TO-DO List</h1>
      <div className="ekleme_formu">
        <InputForm/>
      </div>
      
      <ToDoList/>
      
      <button className="temizle" onClick={()=> props.deleteItems()}>Delete the checked ones</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    liste: state.liste
  }
}

export default connect(mapStateToProps, {deleteItems})(App);
