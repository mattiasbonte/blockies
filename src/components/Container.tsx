import React from 'react'

const Container = (props: { children: any }) => {
    return (
        <div className="dark:bg-[#2f3437] bg-[#ffffff] dark:text-emerald-400 text-violet-100 h-screen">
            <div className="max-w-7xl py-1 mx-auto">{props.children}</div>
        </div>
    )
}

export default Container
