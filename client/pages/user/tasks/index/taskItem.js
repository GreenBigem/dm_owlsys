import React from "react";
import { AiFillEye, AiOutlineMessage  } from 'react-icons/ai'
// import { AiOutlineMessage } from "react-icons/ai";



export const TaskItem = ({ task }) => {
    if(!task) {
        return <div>Нет задач</div>
    }
    return (
        <div className="flex flex-col basis-1/4 flex-grow">
            <div>Image</div>
            <div className="flex justify-between items-center py-2">
                <div className="test-xs text-black opacity-50">
                    {task.username}
                </div>
                <div className="test-xs text-black opacity-50">
                    {task.end_date}
                </div>
                <div className="text-black text-xl">
                    {task.title}
                </div>
                <p className="text-black opacity-60 text-xs pt-4">{task.description}</p>
                <div className="flex items-center gap-3 mt-2">
                    <button className="flex items-center justify-center gap-2 text-xs text-black opacity-50">
                        <AiFillEye /> <span>{task.views}</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 text-xs text-black opacity-50">
                        <AiOutlineMessage/> <span>{task.comments?.length}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}