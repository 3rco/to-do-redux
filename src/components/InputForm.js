import React,{ useState } from 'react';
import { connect } from 'react-redux';
import {addToList} from '../actions';

const InputForm = props => {
    const [text, setText]=useState('');
    
    return (
        <div>
            <input 
                placeholder="add to the list" 
                value={text} 
                onChange={ e => setText(e.target.value)} />
            <button onClick={() => {setText(''); props.addToList(text)}}>Ekle</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      liste: state.liste
    }
  }
  
  export default connect(mapStateToProps, {addToList})(InputForm);
  