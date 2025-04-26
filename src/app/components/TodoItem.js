'use client';

import { useState } from 'react';
import { useTodoStore } from '../../store/useTodoStore';

export default function TodoItem({ todo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const { toggleTodo, removeTodo, editTodo } = useTodoStore();

    const handleEdit = () => {
        if (editText.trim() !== todo.text) {
            editTodo(todo.id, editText);
        }
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleEdit();
        } else if (e.key === 'Escape') {
            setEditText(todo.text);
            setIsEditing(false);
        }
    };

    return (
        <div className={`flex items-center p-3 border rounded shadow-sm ${todo.completed ? 'bg-gray-50' : 'bg-white'}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="mr-3 h-5 w-5"
            />

            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={handleEdit}
                    onKeyDown={handleKeyDown}
                    className="flex-grow px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500  "
                    autoFocus
                />
            ) : (
                <div
                    className={`flex-grow ${todo.completed ? 'line-through text-black' : ''}`}
                    onDoubleClick={() => setIsEditing(true)}
                >
                    {todo.text}
                </div>
            )}

            <div className="flex space-x-2 ml-2">
                {!isEditing && (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="text-gray-500 hover:text-blue-500"
                    >
                        Edit
                    </button>
                )}
                <button
                    onClick={() => removeTodo(todo.id)}
                    className="text-gray-500 hover:text-red-500"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}