import { useState } from "react";

// a proper place to define a component
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [voteArray, setVoteArray] = useState(Array(anecdotes.length).fill(0));
  const [most, setMost] = useState(0);

  const addVote = () => {
    // spread operator to copy state (no mutate)
    const copy = [...voteArray];
    // increment the value in selected position by one
    copy[selected] += 1;
    setVoteArray(copy);

    const max = Math.max(...copy);
    setMost(copy.indexOf(max));
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {voteArray[selected]} votes</div>
      <Button handleClick={() => addVote()} text="vote" />
      <Button
        handleClick={() => setSelected(Math.floor(Math.random() * 7))}
        text="next anecdote"
      />
      <h2>Anecdote with most votes</h2>
      <div>{anecdotes[most]}</div>
      <div>has {voteArray[most]} votes</div>
    </>
  );
};

export default App;
