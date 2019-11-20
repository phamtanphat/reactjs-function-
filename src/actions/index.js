import * as actionType from './actionTypes'

export const onToggleWord = (newId,isMemorized) => {
    return{
        type : actionType.TOGGLE_WORD,
        _id : newId,
        isMemorized
    }
}
export const onRemoveWord = (id) => {
    return{
        type : actionType.REMOVE_WORD,
        id : id
    }
}
export const onToggleForm = () => {
    return{
        type : actionType.TOGGLE_FORM
    }
}
export const onAddWord = (word) => {
    return{
        type : actionType.ADD_WORD,
        word : word
    }
}
export const onFiltermode = (filtermode) => {
    return{
        type : actionType.SET_FILTER_MODE,
        filtermode : filtermode
    }
}
export const onSetWords = (words) => {
    return{
        type : actionType.SET_WORD,
        words : words
    }
}
export const fetchdata = () => {
    return {
        type : actionType.FETCH_DATA
    }
}

export const fetchtoggle= (_id , isMemorized) => {
    return{
        type : actionType.FETCH_TOGGLE,
        _id,
        isMemorized
    }
}

