import React, { useRef, useState } from 'react';
import '../utils/css/reset.css'
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import './style.css'

const Customer = () => {
    const no = useRef(5)

    const userData = [
        {id: 1, name: '김도기', addr: '무지개 택시기사'},
        {id: 2, name: '장성철', addr: '무지개 택시대표'},
        {id: 3, name: '고은', addr: '해커'},
        {id: 4, name: '강하다', addr: '열혈검사'}
    ]

    const [users, setUsers] = useState(userData)
    const [isEdit, setIsEdit] = useState(false)
    const [current, setCurrent] = useState({}) // 하나의 데이터를 받을 공간

    // 데이터 추가
    const onAdd = (user) => {
        user.id = no.current++
        setUsers([...users, user])
    }

    const onRemove = (id) => {
        // id와 user.id가 같은건 제거된 걸러진 값을 반환
        setUsers(users.filter(user => user.id !== id))
    }

    const onModify = (user) => {
        setIsEdit(true)
        setCurrent(user)
    }

    const onUpdate = (id, updata) => {
        setIsEdit(false)
        setUsers(users.map(user => user.id === id ? updata:user))
    }

    return (
        <div className="Customer">
            {isEdit ? <EditUser current={current} setIsEdit={setIsEdit} onUpdate={onUpdate} />:<AddUser onAdd={onAdd} />}
            <ListUser users={users} onRemove={onRemove} onModify={onModify} />
        </div>
    );
};

export default Customer;