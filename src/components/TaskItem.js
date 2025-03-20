// src/components/TaskItem.js
import React, { useState } from 'react';
import { Edit, Trash, CheckCircle, Circle } from 'lucide-react';

const TaskItem = ({ task, onEditTask, onDeleteTask, onCompleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!editedTitle.trim()) return;
    await onEditTask(task.id, { title: editedTitle, completed: task.completed });
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await onDeleteTask(task.id);
  };

  const handleToggleComplete = async () => {
    await onCompleteTask(task.id, !task.completed); // Toggle the `completed` status
  };

  return (
    <li className="task-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleSave} className="save-btn">
            <CheckCircle size={16} />
          </button>
        </>
      ) : (
        <>
          {/* Task Title with Conditional Styling */}
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? '#4caf50' : 'inherit', // Green color for completed tasks
            }}
            className="task-title"
          >
            {task.title}
          </span>
          <div className="task-actions">
            {/* Toggle Completion Status Button */}
            <button onClick={handleToggleComplete} className="complete-btn">
              {task.completed ? (
                <CheckCircle size={16} color="#4caf50" /> // Completed
              ) : (
                <Circle size={16} color="#ccc" /> // Not Completed
              )}
            </button>

            {/* Edit Button */}
            <button onClick={handleEdit} className="edit-btn">
              <Edit size={16} />
            </button>

            {/* Delete Button */}
            <button onClick={handleDelete} className="delete-btn">
              <Trash size={16} />
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TaskItem;