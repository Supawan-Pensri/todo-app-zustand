'use client';

import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useTodoStore } from '../store/useTodoStore';

export default function Home() {
  const { filterStatus, setFilterStatus } = useTodoStore();
  
  return (
    <div className="container mx-auto max-w-md p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Todo App</h1>
      
      <AddTodo />
      
      <TodoList />
    </div>
  );
}
