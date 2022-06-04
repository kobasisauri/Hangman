import Hangman from "./components/Hangman";
import "./App.css";

const App = () => {
  let x = Math.floor(Math.random() * 3);
  const questionsAndAnswers = [
    { "what is the thing you call with?": "phone" },
    { "what is the best lecture in university?": "Web2" },
    { "what did the lincoln says?": "IDK" },
  ];
  const questions = questionsAndAnswers[x];
  const qust = Object.keys(questions);
  const answers = Object.values(questions);
  // const count = answers.length;

  const count = (answers) => {
    let number = answers.length;
  };

  return (
    <div className="App">
      <Hangman />
    </div>
  );
};

export default App;
