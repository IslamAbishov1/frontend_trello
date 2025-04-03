import React, { useState } from 'react'
import { updateBoard } from '../../api/boards'

const BoardEditForm = ({ board, onUpdated }) => {
    const [title, setTitle] = useState(board.title)
    const [description, setDescription] = useState(board.description)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        try {
            const updated = await updateBoard(board.id, { title, description })
            onUpdated(updated) // сообщаем родителю
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
            <h2 className="font-bold text-lg">Edit Board</h2>
            {error && <p className="text-red-500">{error}</p>}
            <div>
                <label className="block mb-1">Title:</label>
                <input
                    className="border p-1 w-full"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label className="block mb-1">Description:</label>
                <textarea
                    className="border p-1 w-full"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded">
                Save
            </button>
        </form>
    )
}

export default BoardEditForm
