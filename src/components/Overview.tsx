import React from 'react'
import { Link } from 'react-router-dom'
import RandomWord from './RandomWord'

const Overview = () => {
    return (
        <>
            <h1 className="text-3xl text-center text-white">Overview</h1>
            <div className="grid grid-cols-5 gap-6 p-6">
                <Link to="randomword">
                    <RandomWord />
                </Link>
            </div>
        </>
    )
}

export default Overview
