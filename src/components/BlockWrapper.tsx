import React from 'react'

const BlockWrapper = (props: { children: any }) => {
    return (
        <div className="dark:bg-blue-gray-700 rounded-2xl bg-sky-800 dark:border-yellow-500 max-w-3xl p-4 mx-auto border-2 shadow-md">
            {props.children}
        </div>
    )
}

export default BlockWrapper
