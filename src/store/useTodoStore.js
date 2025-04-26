import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useTodoStore = create(
    persist(
        (set) => ({
            todos: [],
            filterStatus: 'all',

            addTodo: (text) => set((state) => ({
                todos: [
                    ...state.todos,
                    {
                        id: Date.now().toString(),
                        text,
                        completed: false,
                        createdAt: new Date(),
                    },
                ],
            })),

            toggleTodo: (id) => set((state) => ({
                todos: state.todos.map((todo) =>
                    todo.id === id ? { ...todo, completed: !todo.completed } : todo
                ),
            })),

            removeTodo: (id) => set((state) => ({
                todos: state.todos.filter((todo) => todo.id !== id),
            })),

            editTodo: (id, text) => set((state) => ({
                todos: state.todos.map((todo) =>
                    todo.id === id ? { ...todo, text } : todo
                ),
            })),

            setFilterStatus: (status) => set({ filterStatus: status }),
        }),
        {
            name: 'todo-storage', // ชื่อสำหรับ localStorage
        }
    )
);