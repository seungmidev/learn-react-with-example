// 액션 생성
const PINK = 'color/PINK' // 모듈이름을 앞에 붙혀줌으로써 액션명 중복방지
const SKYBLUE = 'color/SKYBLUE'
const YELLOW = 'color/YELLOW'

// 액션 생성 함수 내보내기
export const pink = () => ({type: PINK})
export const skyblue = () => ({type: SKYBLUE})
export const yellow = () => ({type: YELLOW})

// reducer(순수함수) 만들기
const initialState = {color:'orange'}

const reducer = (state = initialState, action) => { // redux는 state옆에 초기값 반드시 넣기
    switch(action.type) {
        case PINK:
            return {
                color: 'pink'
            }
        case SKYBLUE:
            return {
                color: 'skyblue'
            }
        case YELLOW:
            return {
                color: 'yellow'
            }
        default:
            return state
    }
}

export default reducer