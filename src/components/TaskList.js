// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEditTask, onDeleteTask, onCompleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          onCompleteTask={onCompleteTask} // Pass the handler
        />
      ))}
    </ul>
  );
};

export default TaskList;