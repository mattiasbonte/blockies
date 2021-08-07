import React from 'react'

function Container(props: { children: any }) {
    return (
        <div className="dark:bg-[#2f3437] bg-[#ffffff] dark:text-emerald-400 text-violet-100 h-screen">
            <div className="max-w-7xl sm:px-6 lg:px-8 px-4 py-4 mx-auto">
                <div className="dark:bg-blue-gray-700 rounded-2xl bg-sky-800 dark:border-yellow-500 max-w-3xl p-4 mx-auto border-2 shadow-md">{props.children}</div>
            </div>
        </div>
    )
}

export default Container
