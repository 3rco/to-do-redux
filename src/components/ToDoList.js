import React from 'react';
import { connect } from 'react-redux';
import { toggleItem} from '../actions';

const ToDoList= (props) => {
 return (
        <div>
        {props.liste.map(item => (
          <div key={item.id} onClick={()=> props.toggleItem(item.id)}>
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

export default connect(mapStateToProps, {toggleItem})(ToDoList);
