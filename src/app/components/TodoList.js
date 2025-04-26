'use client';

import { useMemo } from 'react';
import { useTodoStore } from '../../store/useTodoStore';
import TodoItem from './TodoItem';

export default function TodoList() {
    const todos = useTodoStore((state) => state.todos);
    const filterStatus = useTodoStore((state) => state.filterStatus);

    const filteredTodos = useMemo(() => {
        switch (filterStatus) {
            case 'active':
                return todos.filter((todo) => !todo.completed);
            case 'completed':
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    }, [todos, filterStatus]);

    if (filteredTodos.length === 0) {
        return (
            <div className="text-center py-4 text-gray-500">
                No tasks found. Add some todos to get started!
            </div>
        );
    }

    return (
        <div className="space-y-2">
            {filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
            <div className="text-sm text-gray-500 mt-4 text-right">
                {filteredTodos.length} item{filteredTodos.length !== 1 ? 's' : ''}
            </div>
        </div>
    );
}