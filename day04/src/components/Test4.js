import React, { useRef, useState } from 'react';

const Test4 = () => {
    const no = useRef(1) // 고유값
    const idRef = useRef() // 포커스 처리
    const [data, setData] = useState([]) // 데이터를 담을 공간
    const [form, setForm] = useState({
        userid:'',
        userpw:''
    })
    const {userid, userpw} = form // 비구조할당

    const onText = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const onAdd = () => {
        setData([
            ...data,
            {
                id: no.current++,
                userid,
                userpw
                // userid: userid, userpw: userpw => 키와 값의 이름이 같으면 한번만 적어줘도 됨
            }
        ])

        setForm({
            userid: '',
            userpw: ''
        })

        idRef.current.focus()
    }

    return (
        <div>
            <input type="text" name="userid" onChange={onText} ref={idRef} value={userid} />
            <input type="text" name="userpw" onChange={onText} value={userpw} />
            <button onClick={onAdd}>추가</button>

            {
                data.map(item => <p key={item.id}>
                    {item.id} / {item.userid} / {item.userpw}
                </p>)
            }
        </div>
    );
};

export default Test4;