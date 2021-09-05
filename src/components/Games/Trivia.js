import React, { useEffect, useRef, useState } from 'react'
import Classes from './Trivia.module.css'
import Correct from './sounds/correct.mp3'
import Play from './sounds/play.mp3'
import Wrong from './sounds/wrong.mp3'
import useSound from 'use-sound'
import './Triviaa.css'

const Trivia = ({data,setStop,setQuestionNumber,questionNumber}) => {
    const [CurrentQuestion,setCurrentQuestion] = useState(null)
    const [SelectedAnswer,setSelectedAnswer] = useState(null)

    const [correctAns , setCorrectAns] = useState(false)

    const [letsPlay]=useSound(Play)
    const [CorrectAns]=useSound(Correct)
    const [WrongAns]=useSound(Wrong)

    useEffect(()=>{
        letsPlay()
    },[letsPlay])

    useEffect(()=>{
        setCurrentQuestion(data[questionNumber-1])
    },[data , questionNumber])

    const handleClick=(a)=>{
        setSelectedAnswer(a)
            if(a.correct){
                CorrectAns()
                setCorrectAns(true)
                setTimeout(()=>{
                    setQuestionNumber(questionNumber+1)
                    setCorrectAns(false)
                },1500)
                setSelectedAnswer(null)
            }else{
                setCorrectAns('answer wrong')
                WrongAns()
                setStop(true)
            }
        
    }
    return ( 
        <div className={Classes.trivia}>
            <div className={Classes.question}>{CurrentQuestion?.question}</div>
            <div className={Classes.answers}>
                {CurrentQuestion?.answers.map((a)=>(
                    <div key={Math.random()*1000} className={correctAns?'answer correct' :'answer'} onClick={()=>handleClick(a)}>{a.text}</div>
                ))}
            </div>
        </div>
    )
}

export default Trivia
