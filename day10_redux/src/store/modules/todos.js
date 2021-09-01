// 액션 생성 함수
const INSERT = 'todos/INSERT'
const REMOVE = 'todos/REMOVE'
const CHANGE_INPUT = 'todos/CHANGE_INPUT'

// 액션 함수 내보내기
export const insert = (text) => ({type: INSERT, list:{id: no++, text}})
export const remove = (id) => ({type: REMOVE, id})
export const changeInput = (text) => ({type: CHANGE_INPUT, text})

// 리듀서
let no = 3
const initialState = {
    text: '테스트',
    todos: [
        {id: 1, text: '홍길동'},
        {id: 2, text: '유재석'}
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INSERT:
            return {
                ...state,
                todos: [...state.todos, action.list]
            }
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case CHANGE_INPUT:
            return {
                ...state,
                text: action.text
            }
        default:
            return state
    }
}
export default reducer