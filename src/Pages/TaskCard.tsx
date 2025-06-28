import React from 'react';

type Task = {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
};

type TaskCardProps = {
    task: Task;
    onToggleComplete?: (id: string) => void;
    onDelete?: (id: string) => void;
};

const TaskCard: React.FC<TaskCardProps> = ({ task, onToggleComplete, onDelete }) => {
    return (
        <div
            className={`border rounded-lg p-4 mb-3 shadow-sm flex flex-col gap-2 ${
            task.completed ? 'bg-green-50' : 'bg-white'
            }`}
        >
            <div className="flex items-center gap-2">
            <input
                type="checkbox"
                checked={task.completed}
                readOnly
                className="accent-green-500"
            />
            <h3
                className={`m-0 text-lg font-semibold ${
                task.completed ? 'line-through text-gray-400' : ''
                }`}
            >
                {task.title}
            </h3>
            </div>
            {task.description && (
            <p className="m-0 text-gray-600">{task.description}</p>
            )}
        </div>
    );
};

export default TaskCard;
