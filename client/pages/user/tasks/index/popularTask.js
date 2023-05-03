import React from "react";

export const PopularTask = ({popularTask}) => {
    return (
        <div className="bg-gray-600 my-1">
            <div className="flex text-xs p-2 text-gray-300 hover:bg-gray-800 hover:text-black">
                {popularTask.title}
            </div>
        </div>
    )
}