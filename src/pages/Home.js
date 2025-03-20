// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { fetchTasks, addTask, updateTask, deleteTask } from '../utils/api';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks when the component mounts
  useEffect(() => {
    const fetchInitialTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);
    };
    fetchInitialTasks();
  }, []);

  // Add a new task
  const addTaskHandler = async (newTask) => {
    const addedTask = await addTask(newTask);
    setTasks([...tasks, addedTask]);
  };

  // Edit an existing task
  const editTaskHandler = async (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...updatedTask, id: taskId } : task
    );
    setTasks(updatedTasks);
    await updateTask(taskId, updatedTask);
  };

  // Delete a task
  const deleteTaskHandler = async (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
    await deleteTask(taskId);
  };

  // Toggle task completion status
  const completeTaskHandler = async (taskId, completed) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed } : task
    );
    setTasks(updatedTasks);
    await updateTask(taskId, { ...tasks.find((task) => task.id === taskId), completed });
  };

  return (
    <div>
      <h2>Tasks</h2>
      <TaskForm onAddTask={addTaskHandler} />
      <TaskList
        tasks={tasks}
        onEditTask={editTaskHandler}
        onDeleteTask={deleteTaskHandler}
        onCompleteTask={completeTaskHandler} // Pass the new handler
      />
    </div>
  );
};

export default Home;