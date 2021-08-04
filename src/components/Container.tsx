import React from 'react'

function Container(props: { children: any[] }) {
    return (
        <div className="dark:bg-gray-600 h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4 ">
                <div className="max-w-3xl mx-auto">{props.children}</div>
            </div>
        </div>
    )
}

export default Container
