function TaskList({ tasks, onToggle }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
<li key={task.id}>
  <input 
    type="checkbox" 
    checked={task.done}
    onChange={() => onToggle(task.id)}
  />
  {task.text}
</li>
      ))}
    </ul>
  );
}

// Användning:
<TaskList
  tasks={[
    { id: 1, text: "Handla mat", done: true },
    { id: 2, text: "Städa", done: false },
  ]}
/>

export default TaskList;
