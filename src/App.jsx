import { useState } from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import ClickButton from "./components/ClickButton";
import ProfileCard from "./components/ProfileCard";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Handla mat", done: false },
    { id: 2, text: "Städa", done: false },
  ]);

  const onToggle = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <>
      <Header />
      <List />
      <ClickButton />
      <ProfileCard
        name="Anna Svensson"
        role="Frontend-utvecklare"
        initials="AS"
      />
      <TaskList tasks={tasks} onToggle={onToggle} />
      <Footer />
    </>
  );
}

export default App;
