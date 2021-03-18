import { ADD, TOGGLE, DELETE } from "../actions";

const INITIAL_STATE = {
    liste: [
        { id: 1, baslik: "Alışveriş Yap", tamamlandi: false },
        { id: 2, baslik: "Fature Öde", tamamlandi: false },
    ]
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                liste: [
                    ...state.liste,
                    {
                        id: state.liste.length + 1,
                        baslik: action.payload,
                        tamamlandi: false
                    }
                ]
            };
        case TOGGLE:
            return {
                ...state,
                liste: state.liste.map(item => item.id === action.payload ? { ...item, tamamlandi: !item.tamamlandi, } : item)
            };
        case DELETE:
            return {
                ...state,
                liste: state.liste.filter(item => item.tamamlandi===false)
            };    
        default:
            return state;
    }
}