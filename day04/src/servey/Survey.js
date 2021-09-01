import React, { useState } from 'react';
import '../utils/css/reset.css'
import './style.css'
import SurveyStep1 from './SurveyStep1';
import SurveyStep2 from './SurveyStep2';
import SurveyStep3 from './SurveyStep3';
import SurveyStep4 from './SurveyStep4';

const Survey = () => {
    const [step, setStep] = useState(1) // 다음 버튼

    const [form, setForm] = useState({
        username: '',
        age: '',
        addr: '',
        tel: '',
        occupation: '',
        email: '',
        sex: '',
        intersts: ''
    })

    const {username, age, addr, tel, occupation, email, sex, intersts} = form

    const onText = (e) => {
        const {value, name} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const onNext = () => {
        setStep(step + 1)
    }

    const onPrev = () => {
        setStep(step - 1)
    }

    return (
        <div className="wrap">
            {
                step === 1 && <SurveyStep1 {...form} onText={onText} onNext={onNext} />
            }
            {
                step === 2 && <SurveyStep2 occupation={occupation} email={email} sex={sex} intersts={intersts} onText={onText} onNext={onNext} onPrev={onPrev} />
            }
            {
                step === 3 && <SurveyStep3 form={form} onNext={onNext} onPrev={onPrev} /> // form={form} 객체를 통째로 전달
            }
            {
                step === 4 && <SurveyStep4 
                // username={username}
                {...form} // 객체 안의 키값을 전달
                />
            }
        </div>
    );
};

export default Survey;