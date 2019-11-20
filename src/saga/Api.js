import axios from 'axios'
function* getWord() {
    const url = "https://server2301.herokuapp.com/word";
    const data = yield axios.get(url).then(res => res.data.words)
    return data
}
function* fetchtoggle(_id , isMemorized) {
    const url = "https://server2301.herokuapp.com/word/" +_id
    const data = yield axios.put(url,{isMemorized }).then(res =>res.data.w)
    return data
}

export const Api = {
    getWord,
    fetchtoggle
}