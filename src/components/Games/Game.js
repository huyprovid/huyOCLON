import { useEffect, useState } from 'react';
import Trivia from './Trivia';
import Classes from './Game.module.css'
import './Gamess.css'
import Wrongs from './sounds/wrong.mp3'
import useSound from 'use-sound';

function Game() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)

  const [earned, setEarned] = useState('$ 0')

  const [time, setTime] = useState(30)



  const data = [
    {
      id: 1,
      question: "How many diffrent heading sizes are there in HTML?",
      answers: [
        {
          text: "5",
          correct: false,
        },
        {
          text: "6",
          correct: true,
        },
        {
          text: "7",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which of following is NOT a Node.js framework",
      answers: [
        {
          text: "Sails",
          correct: true,
        },
        {
          text: "Neat",
          correct: false,
        },
        {
          text: "Hapi",
          correct: false,
        },
        {
          text: "Express",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "In Java strings are immutable so when concatenating multiple strings together what class should you use?",
      answers: [
        {
          text: "String",
          correct: false,
        },
        {
          text: "StringBuffer",
          correct: false,
        },
        {
          text: "MutableString",
          correct: false,
        },
        {
          text: "StringBuilder",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Which of the following commands starts a Node.js REPL session?",
      answers: [
        {
          text: "node",
          correct: true,
        },
        {
          text: "node repl",
          correct: false,
        },
        {
          text: "node dev",
          correct: false,
        },
        {
          text: "node console",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who is the most handsome man on this planet?",
      answers: [
        {
          text: "not Sinh",
          correct: false,
        },
        {
          text: "a bottle",
          correct: false,
        },
        {
          text: "Ngo Diec Pham",
          correct: false,
        },
        {
          text: "Sinh",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "What does the following code log? console.log(a) var a =10 console.log(10)",
      answers: [
        {
          text: "Error",
          correct: false,
        },
        {
          text: "null 10",
          correct: false,
        },
        {
          text: "undefined 10",
          correct: true,
        },
        {
          text: "10 10",
          correct: false,
        },
      ],
    },

    {
      id: 7,
      question: "What is the Worst case time complexity of Quicksort",
      answers: [
        {
          text: "n",
          correct: false,
        },
        {
          text: "n^2",
          correct: true,
        },
        {
          text: "n*log(n)",
          correct: false,
        },
        {
          text: "n^3",
          correct: false,
        },
      ],
    },

    {
      id: 8,
      question: "Which CSS selector is the most specific ?",
      answers: [
        {
          text: "a#id ,red:first-child",
          correct: true,
        },
        {
          text: "#id > .red:not(li)",
          correct: false,
        },
        {
          text: "a.green.bold.wide",
          correct: false,
        },
        {
          text: "#id.small.red",
          correct: false,
        },
      ],
    },

    {
      id: 9,
      question: "Which of the following is NOT true about a script loaded with `defer` attribute ?",
      answers: [
        {
          text: "Execute scripts in order",
          correct: false,
        },
        {
          text: "Download async while DOM is being parsed",
          correct: false,
        },
        {
          text: "Execute after DOMContntLoaded",
          correct: true,
        },
        {
          text: "Can only be used on external scripts",
          correct: false,
        },
      ],
    },

    {
      id: 10,
      question: "What does this Javascript code log ? const arr=[1,2,3,4,5] arr.length = 2 console.log(arr[3]) ",
      answers: [
        {
          text: "4",
          correct: false,
        },
        {
          text: "undefined",
          correct: true,
        },
        {
          text: "null",
          correct: false,
        },
        {
          text: "2",
          correct: false,
        },
      ],
    },

    {
      id: 11,
      question: "Which of the following is the oldest frontend framework",
      answers: [
        {
          text: "Angular",
          correct: false,
        },
        {
          text: "React",
          correct: false,
        },
        {
          text: "Ember",
          correct: false,
        },
        {
          text: "Backbone",
          correct: true,
        },
      ],
    },

    {
      id: 12,
      question: "What is the out put of let i=i for(i=0;i<3;i++){ const log =()=>{ console.log(i) } setTimeout(log,100) }",
      answers: [
        {
          text: "undefined undefined undefined",
          correct: false,
        },
        {
          text: "2 2 2",
          correct: false,
        },
        {
          text: "0 1 2",
          correct: false,
        },
        {
          text: "3 3 3",
          correct: true,
        },
      ],
    },

    {
      id: 13,
      question: "What is the out put of the following JS Code ? 1 + 4 * 2 + 7 - '6' + '4' * 5 +'3'-'12'",
      answers: [
        {
          text: "18",
          correct: false,
        },
        {
          text:"291",
          correct: true,
        },
        {
          text: "66",
          correct: false,
        },
        {
          text: "301",
          correct: false,
        },
      ],
    },

    {
      id: 14,
      question: "Which of the following is not actual media type",
      answers: [
        {
          text: "tty",
          correct: false,
        },
        {
          text: "aural",
          correct: false,
        },
        {
          text: "braile",
          correct: false,
        },
        {
          text: "mobile",
          correct: true,
        },
      ],
    },

    {
      id: 15,
      question: "What are labeled statements used for in Javascript",
      answers: [
        {
          text: "To label loop for break and continue",
          correct: true,
        },
        {
          text: "For advanced logging",
          correct: false,
        },
        {
          text: "To label anonymous functions",
          correct: false,
        },
        {
          text: "To create a labeled code region",
          correct: false,
        },
      ],
    },
    
  ];
  const moneyPyramid = [
    { id: 1, amount: '$ 100' },
    { id: 2, amount: '$ 200' },
    { id: 3, amount: '$ 300' },
    { id: 4, amount: '$ 400' },
    { id: 5, amount: '$ 500' },
    { id: 6, amount: '$ 1000' },
    { id: 7, amount: '$ 2000' },
    { id: 8, amount: '$ 5000' },
    { id: 9, amount: '$ 6000' },
    { id: 10, amount: '$ 8000' },
    { id: 11, amount: '$ 10000' },
    { id: 12, amount: '$ 12000' },
    { id: 13, amount: '$ 20000' },
    { id: 14, amount: '$ 200000' },
    { id: 15, amount: '$ 1000000' },
  ].reverse()

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount)
  }, [moneyPyramid, questionNumber])

  useEffect(() => {
    const mytime = setInterval(() => {
      setTime((t) => t - 1)
      if (time === 0) {
        setStop(true)
      }
    }, 1000)
    return () => clearInterval(mytime)
  }, [setStop, time])

  useEffect(() => {
    setTime(30)
  }, [questionNumber])

  return (
    <div className={Classes.app} >
      <div className={Classes.main}>
        {stop ? <h1>You win : {earned} </h1> : (
          <>
            <div className={Classes.top}>
              <div className={Classes.timer}>{time}s</div>
            </div>

            <div className={Classes.botom}>
              <Trivia data={data} setStop={setStop} setQuestionNumber={setQuestionNumber} questionNumber={questionNumber} />
            </div>
          </>
        )}

      </div>

      <div className={Classes.pyramid}>

        <ul className={Classes.moneyList}>
          {moneyPyramid.map(m => (
            <li className={questionNumber === m.id ? 'moneyListItem active' : 'moneyListItem'} key={m.id}>
              <span className={Classes.moneyListItemNumber}>{m.id}</span>
              <span className={Classes.moneyListItemAmount}>{m.amount}</span>
            </li>
          ))}
        </ul>

      </div>

    </div>

  );
}

export default Game;

