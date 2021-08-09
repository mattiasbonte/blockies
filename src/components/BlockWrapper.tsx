import React from 'react'

const BlockWrapper = (props: { children: any }) => {
    return (
        <div className="dark:bg-blue-gray-700 bg-sky-800 dark:border-white max-w-3xl p-4 mx-auto rounded-md shadow-md">
            {props.children}
        </div>
    )
}

export default BlockWrapper
