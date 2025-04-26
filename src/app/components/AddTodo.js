'use client';

import { useState } from 'react';
import { useTodoStore } from '../../store/useTodoStore';

export default function AddTodo() {
    const [text, setText] = useState('');
    const addTodo = useTodoStore((state) => state.addTodo);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim()) {
            addTodo(text.trim());
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="เพิ่มงานที่ต้องทำ..."
                    className="flex-grow px-4 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none"
                >
                    Add
                </button>
            </div>
        </form>
    );
}
