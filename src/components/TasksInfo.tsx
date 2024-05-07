import React from "react";

type TasksInfoProps = {
    uncompletedTasksCount: number;
    completedTasksCount: number;
}
const TasksInfo = ({completedTasksCount, uncompletedTasksCount}: TasksInfoProps) => {
    return (
        <div className=' mt-2'>
            <div>Uncompleted Tasks: {uncompletedTasksCount}</div>
            <div>Completed Tasks: {completedTasksCount}</div>
        </div>
    );
};

export default TasksInfo;
