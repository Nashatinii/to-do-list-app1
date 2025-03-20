// src/components/TaskForm.js
import React, { useState } from 'react';
import { Plus } from 'lucide-react'; // Import the Plus icon

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask({ title, completed: false });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="add-task-btn">
        <Plus size={16} /> Add Task
      </button>
    </form>
  );
};

export default TaskForm;