import React, { useEffect, useState } from 'react'
import BoardList from '../components/BoardList'
import { getBoards } from '../api/boards'

const HomePage = () => {
    const [boards, setBoards] = useState([])

    useEffect(() => {
        getBoards().then(setBoards)
    }, [])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-8">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
                Boards
            </h1>
            <BoardList boards={boards} />
        </div>
    )
}

export default HomePage
