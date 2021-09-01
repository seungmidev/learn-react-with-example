import { combineReducers } from 'redux' // 여러 리듀서 파일 하나로 합치기
import color from './modules/color'
import counter from './modules/counter'
import changecolor from './modules/changecolor'
import todos from './modules/todos'

export default combineReducers ({
    color, 
    counter,
    changecolor,
    todos
})