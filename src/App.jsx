import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("₹ 0");

  const data = [
    {
      id: 1,
      question: "Which team did Zinedine Zidane play for?",
      answers: [
        {
          text: "France",
          correct: true,
        },
        {
          text: "Algeria",
          correct: false,
        },
        {
          text: "Spain",
          correct: false,
        },
        {
          text: "Germany",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who is the top scorer of world football?",
      answers: [
        {
          text: "Cristiano Ronaldo",
          correct: true,
        },
        {
          text: "Lionel Messi",
          correct: false,
        },
        {
          text: "Pele",
          correct: false,
        },
        {
          text: "Eusebio",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which is the only team to perform a UCL(since 1991) 3-peat?",
      answers: [
        {
          text: "FC Barcelona",
          correct: false,
        },
        {
          text: "AC Milan",
          correct: false,
        },
        {
          text: "Bayern Munich",
          correct: false,
        },
        {
          text: "Real Madrid",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who is the top goalscorer of UEFA Champions League?",
      answers: [
        {
          text: "Lionel Messi",
          correct: false,
        },
        {
          text: "Cristiano Ronaldo",
          correct: true,
        },
        {
          text: "Robert Lewandoski",
          correct: false,
        },
        {
          text: "Karim Benzema",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which is the first English club to win a treble?",
      answers: [
        {
          text: "Liverpool",
          correct: false,
        },
        {
          text: "Manchester City",
          correct: false,
        },
        {
          text: "Manchester United",
          correct: true,
        },
        {
          text: "Arsenal",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which team was awarded The Club of the Century in 2001?",
      answers: [
        {
          text: "FC Barcelona",
          correct: false,
        },
        {
          text: "Manchester United",
          correct: false,
        },
        {
          text: "Real Madrid",
          correct: true,
        },
        {
          text: "AC Milan",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Who is the only manager to win treble with two different clubs?",
      answers: [
        {
          text: "Zinedine Zidane",
          correct: false,
        },
        {
          text: "Carlo Ancelotti",
          correct: false,
        },
        {
          text: "Jurgen Klopp",
          correct: false,
        },
        {
          text: "Pep Guardiola",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Which league does not belong to the top 5 leagues?",
      answers: [
        {
          text: "La Liga",
          correct: false,
        },
        {
          text: "Premier League",
          correct: false,
        },
        {
          text: "Bundesliga",
          correct: false,
        },
        {
          text: "Eredivisie",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "Which team has won the African Cup of Nations a record 7 times?",
      answers: [
        {
          text: "Cameroon",
          correct: false,
        },
        {
          text: "Egypt",
          correct: true,
        },
        {
          text: "Senegal",
          correct: false,
        },
        {
          text: "Ghana",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who won the Man of the Match award in the 2014 World Cup final?",
      answers: [
        {
          text: "Mario Goetze",
          correct: true,
        },
        {
          text: "Sergio Aguero",
          correct: false,
        },
        {
          text: "Lionel Messi",
          correct: false,
        },
        {
          text: "Bastian Schweinsteiger",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Against which country did Wayne Rooney break the England goalscoring record?",
      answers: [
        {
          text: "San Marino",
          correct: false,
        },
        {
          text: "Switzerland",
          correct: true,
        },
        {
          text: "Lithuania",
          correct: false,
        },
        {
          text: "Slovenia",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Manchester United beat which team in the 2017 Europa League final?",
      answers: [
        {
          text: "Villarreal",
          correct: false,
        },
        {
          text: "Chelsea",
          correct: false,
        },
        {
          text: "Ajax",
          correct: true,
        },
        {
          text: "Borussia Dortmund",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Signal Iduna Park is located in which country?",
      answers: [
        {
          text: "England",
          correct: false,
        },
        {
          text: "Germany",
          correct: true,
        },
        {
          text: "France",
          correct: false,
        },
        {
          text: "Wales",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which team did Porto beat in the 2004 Champions League final?",
      answers: [
        {
          text: "Bayen Munich",
          correct: false,
        },
        {
          text: "Monaco",
          correct: false,
        },
        {
          text: "Deportivo La Coruña",
          correct: true,
        },
        {
          text: "Barcelona",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Who is the greatest footballer of all time?",
      answers: [
        {
          text: "Lionel Messi",
          correct: false,
        },
        {
          text: "Pele",
          correct: false,
        },
        {
          text: "Diego Maradona",
          correct: false,
        },
        {
          text: "Cristiano Ronaldo",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 10,000" },
        { id: 2, amount: "₹ 20,000" },
        { id: 3, amount: "₹ 50,000" },
        { id: 4, amount: "₹ 1,00,000" },
        { id: 5, amount: "₹ 2,50,000" },
        { id: 6, amount: "₹ 5,00,000" },
        { id: 7, amount: "₹ 10,00,000" },
        { id: 8, amount: "₹ 20,00,000" },
        { id: 9, amount: "₹ 30,00,000" },
        { id: 10, amount: "₹ 40,00,000" },
        { id: 11, amount: "₹ 50,00,000" },
        { id: 12, amount: "₹ 70,00,000" },
        { id: 13, amount: "₹ 1,00,00,000" },
        { id: 14, amount: "₹ 2,50,00,000" },
        { id: 15, amount: "$ 5,00,00,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
