import React from "react";
import { GoalForm } from "./components/GoalForm";
import { GoalList } from "./components/GoalList";

function App() {
  // USE STATE STUFF
  // // same as let num = 0;
  // // [name, setterName]
  // const [num, setNum] = React.useState(0);
  
  // function increment() {
    //   setNum((prev) => prev + 1);
  // }

  const [goals, setGoals] = React.useState([
    {
      status: "incomplete",
      text: "Item 1"
    }
  ]);
  const [name, setName] = React.useState(null);

  function addGoal(event) {
    event.preventDefault();

    const goal = {status: "incomplete", text: event.target.goal.value};
    setGoals(() => [...goals, goal]);

    event.target.goal.value = "";
  }

  function toggleGoal(index) {
    setGoals(goals.map((goal, goalIdx) => {
      if (goalIdx === index) {
        return {
            status: goal.status == "incomplete" ? "complete" : "incomplete",
            text: goal.text
          };
      }
    }));
  }

  function deleteGoal(index) {
    setGoals((prev) =>
      prev.filter((goal, goalsIdx) => {
        if (goalsIdx !== index) return goal;
      })
    );
  }

  // function isStrikethrough(event) {
  //   if (event.target.checked) {
  //     event.target.parentElement.style.textDecoration = "line-through";
  //   } else {
  //     event.target.parentElement.style.textDecoration = "none";
  //   }
  // }

  // function nameGreeting(event) {
  //   event.preventDefault();
  //   setName(event.target.name.value);
  //   event.target.name.value = "";
  // }

  return (
    // jsx fragment that component must be wrapped in
    <>
      <h1 className="header">Goal Tracker App</h1>
      {/* input to get goal from user */}
      <GoalForm addGoal={addGoal}/>

      <GoalList
        goals={goals}
        deleteGoal={deleteGoal}
        toggleGoal={toggleGoal}
      />

      {/* <div>
        <form className="nameContainer" onSubmit={nameGreeting}>
          <label for="name">Enter your name</label>
          <input type="text" name="name" id="name"></input>
          <button>Submit</button>
        </form>
        {name && <p>Hello, {name}!</p>}
      </div> */}
    </>
  );
}

// use for big app components
export default App;