export const ADD = "ADD";
export const DELETE = "DELETE";
export const TOGGLE = "TOGGLE";

export const addToList = text => {
    return { type: ADD, payload: text };
};

export const toggleItem = id => {
    return { type: TOGGLE, payload:id};
};

export const deleteItems = () => {
    return { type: DELETE};
}