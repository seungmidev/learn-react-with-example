import React, { useRef, useState } from 'react';

const Item = ({item, onDel}) => {
    const {id, text} = item

    return (
        <li>
            번호:{id} / 할일:{text}
            <button onClick={() => onDel(id)}>삭제</button>
        </li>
    );
};

const List = ({data, onDel}) => {
    return (
        <ul>
            {
                data.map(item => <Item key={data.id} item={item} onDel={onDel} />)
            }
        </ul>
    );
};

const Form = ({onAdd}) => {
    const [text, setText] = useState('')
    const textFef = useRef() // 추가버튼 클릭시 인풋 인력칸으로 포커스 이동을 위해(참조)

    const onText = (e) => {
        const {value} = e.target
        setText(value)
    }

    const onAdd1 = () => {
        onAdd(text)
        setText('')
        textFef.current.focus()
    }

    return (
        <div>
            <input type="text" value={text} ref={textFef} onChange={onText} />
            <button onClick={onAdd1}>추가</button>
        </div>
    );
};

const Test1 = () => {
    const no = useRef(4)
    const [data, setData] = useState([
        {id:1, text:'청소하기'},
        {id:2, text:'운동하기'},
        {id:3, text:'산책하기'}
    ])

    // 데이터 추가
    const onAdd = (text) => {
        setData([
            ...data,
            {id: no.current++, text}
        ])
    }

    // 데이터 삭제
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    return (
        <div>
            <h1>TodoList</h1>
            <Form onAdd={onAdd} />
            <List data={data} onDel={onDel} />
        </div>
    );
};

export default Test1;