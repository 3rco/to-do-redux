export const ADD = "ADD";
export const DELETE = "DELETE";
export const TOGGLE = "TOGGLE";

export const addToList = text => dispatch =>{
    dispatch({ type: ADD, payload: text });
};

export const toggleItem = id => {
    return { type: TOGGLE, payload:id};
};

export const deleteItems = () => {
    return { type: DELETE};
}