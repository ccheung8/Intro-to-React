import { GoalListItem } from "./GoalListItem";

// export individually for smaller components
export function GoalList({ goals, deleteGoal, toggleGoal }) {
  return (
    // {/* Display list of goals */}
    <ul style={{
      display: "flex",
      flexDirection: "column",
      gap: 5
    }}>
      {goals.map((goal, index) => (
        <GoalListItem 
          goal={goal}
          index={index}
          toggleGoal={toggleGoal}
          deleteGoal={deleteGoal}
        />
      ))}
    </ul>
  )
}