// src/utils/api.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const addTask = async (task) => {
  try {
    const response = await axios.post(API_URL, task);
    return response.data;
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};

export const updateTask = async (taskId, updatedTask) => {
    try {
      console.log(`Updating task ID ${taskId} with data:`, updatedTask);
      const response = await axios.put(`${API_URL}/${taskId}`, updatedTask);
      console.log('Update successful:', response.data);
      return response.data;
    } catch (error) {
      console.error(`Failed to update task ID ${taskId}:`, error.response?.data || error.message);
      throw error;
    }
  };


  

export const deleteTask = async (taskId) => {
  try {
    const response = await axios.delete(`${API_URL}/${taskId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};