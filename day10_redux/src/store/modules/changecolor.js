import { bindActionCreators } from "redux"

// 액션 생성 함수
const CHANGE_COLOR = 'changecolor/CHANGE_COLOR'

// 액션 생성 함수 내보내기
export const changeColor = (color) => ({type: CHANGE_COLOR, color})

// 리듀서(순수함수)
const initialState = {
    color: 'red'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_COLOR:
            return {
                color: action.color
            }
        default:
            return state
    }
}
export default reducer
