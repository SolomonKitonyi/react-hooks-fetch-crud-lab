import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions,setQuestions}) {
  
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(data => {
      setQuestions(data)
    })
  },[questions])
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{
        questions.map(question => (<QuestionItem question={question} key={question.id} />))
      /* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;
