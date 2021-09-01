import React, { useState } from 'react';
import '../utils/css/reset.css'
import './Melon.css'
import data from '../utils/api/music'
import MelonForm from './MelonForm';
import MelonList from './MelonList';
import Modal from './Modal';

const Melon = () => {
    const [musics, setMusics] = useState(data)

    // 1개의 데이터 값
    const [find, setFind] = useState({}) //useState(musics[0])

    // 팝업
    const [isActive, setIsActive] = useState(false)

    // 유튜브 - key

    const getDate = () => {
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth() + 1
        const date = now.getDate()
        const msg = `${year}.${month}.${date}`
        return msg
    }

    const onOpen = (id) => {
        setIsActive(true)
        //setFind(musics[id - 1])
        setFind(musics.find(music => music.id === id)) // find() => 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환
    }

    const onClose = () => {
        setIsActive(false)
    }

    const onSearch = (text) => {
        //setMusics(data.filter(music => music.title.indexOf(text) !== -1))
        setMusics(data.filter(music => {
            const re = new RegExp(text, 'ig') // ig는 대소문자 구분X(기본옵션)
            return music.title.match(re)
        }))
    }

    const onLike = (id) => {
        //setMusics(musics.map(music => music.id === id ? {...music, like:music.like + 1, done:true}:music))

        // 과제 : 토글기능 하트 한번 누르면 증가 또 한번 누르면 감소
        setMusics(musics.map(music => music.id === id ? {...music, like:music.like + 1, done:!music.done}:music))
    }

    return (
        <div className="Melon">
            <h2>Melone {getDate()} 인기차트</h2>
            <MelonForm onSearch={onSearch} />
            <MelonList musics={musics} onLike={onLike} onOpen={onOpen} />
            {isActive && <Modal find={find} onClose={onClose} />}
        </div>
    );
};

export default Melon;