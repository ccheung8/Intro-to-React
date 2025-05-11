export function GoalForm({ addGoal }) {
  return (
    <form onSubmit={addGoal}>
      <input type="text" id="goal"></input>
      <button type="submit">Add Goal</button>
    </form>
  )
};