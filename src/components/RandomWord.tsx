import React, { useState, useEffect } from 'react'
import BlockWrapper from './BlockWrapper'

interface Word {
    word: string
    definition: string
    pronunciation: string
}

const RandomWord = () => {
    const [data, setData]: [Word, Function] = useState({ word: '', definition: '', pronunciation: '' })

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await fetch('https://random-words-api.vercel.app/word')
        const json = await response.json()
        setData(json.pop())
    }

    return (
        <BlockWrapper>
            <div onClick={getData} className=" flex flex-row items-center justify-between cursor-pointer">
                <div>
                    <div className=" text-lg font-bold uppercase">{data.word}</div>
                    <div className="dark:text-yellow-400">{data.definition}</div>
                </div>
                <div className="hover:dark:text-yellow-400 hover:scale-125 hover:-rotate-90 bg-blue-gray-200/25 hover:shadow-md p-1 transition-all duration-300 rounded-full cursor-pointer">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
        </BlockWrapper>
    )
}

export default RandomWord
