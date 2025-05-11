export function GoalListItem({ goal, index, toggleGoal, deleteGoal }) {
  return (
    <li key={index}>
      <input
        type="checkbox"
        key={index}
        onClick={() => toggleGoal(index)}
      >
      </input>
      <span style={{
        textDecoration: 
          goal.status == "complete" ? 'line-through' : 'none'
      }}>{goal.text}</span>
      <button 
      onClick={() => deleteGoal(index)}
      style={{
        marginLeft: 8,
      }}>Delete</button>
  </li>
  )
}