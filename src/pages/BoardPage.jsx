import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getBoards } from '../api/boards'

const BoardPage = () => {
    const { boardId } = useParams()
    const [board, setBoard] = useState(null)

    useEffect(() => {
        getBoards().then((data) => {
            const found = data.find((b) => b.id.toString() === boardId)
            setBoard(found)
        })
    }, [boardId])

    if (!board) {
        return <p className="p-8 text-gray-500 dark:text-gray-300">Loading...</p>
    }

    return (
        <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                {board.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-200 mt-2">
                {board.description}
            </p>
        </div>
    )
}

export default BoardPage
