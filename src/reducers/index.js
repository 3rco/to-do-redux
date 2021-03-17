import { ADD } from "../actions";

const INITIAL_STATE = {
    liste: [
        { id: 1, baslik: "Alışveriş Yap", tamamlandi: false },
        { id: 2, baslik: "Fature Öde", tamamlandi: true },
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
        default:
            return state;
    }
}