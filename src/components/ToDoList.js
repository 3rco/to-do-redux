import React from 'react';
import { connect } from 'react-redux';

const ToDoList= (props) => {
  console.log('PROPS LİSTE', props.liste)
 return (
        <div>
        {props.liste.map(item => (
          <div key={item.id}>
            {item.baslik}
          </div>
        ))}
      </div>
    )
}

const mapStateToProps = state => {
  return {
    liste: state.liste
  }
}

export default connect(mapStateToProps)(ToDoList);
