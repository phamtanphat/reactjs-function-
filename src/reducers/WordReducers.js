import * as actionType from '../actions/actionTypes'


function WordReducers(words = [], action) {
    switch (action.type) {
        case actionType.SET_WORD:
            return action.words
        case actionType.TOGGLE_WORD:
            const newWords = words.map(w => {
                if (w._id !== action._id) return w
                return { ...w, isMemorized: action.isMemorized }
            })
            return newWords
        case actionType.REMOVE_WORD:
            const newWords1 = words.filter(w => w._id!== action._id)
            return newWords1
        case actionType.ADD_WORD :
            const newWords2 = words.concat(action.word)
            return newWords2
        default: return words
    }

}

export default WordReducers;
