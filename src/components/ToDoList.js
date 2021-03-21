import React from 'react';
import { connect } from 'react-redux';
import { toggleItem} from '../actions';
import "../styles.css";

const ToDoList= (props) => {
 return (
        <div className="liste">
        {props.liste.map(item => (
          <div className={item.tamamlandi ? "yapildi" : ""} key={item.id} onClick={()=> props.toggleItem(item.id)}>
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
