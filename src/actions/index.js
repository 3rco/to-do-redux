export const ADD = "ADD";
export const DELETE = "DELETE";
export const TOGGLE = "TOGGLE";

export const addToList = text => {
    return { type: ADD, payload: text };
};