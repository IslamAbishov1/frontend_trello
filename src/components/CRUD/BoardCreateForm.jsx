import React, { useState } from 'react'
import { createBoard } from '../../api/boards'

const BoardCreateForm = ({ onCreated }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)

        try {
            const newBoard = { title, description, columns: [] }
            const created = await createBoard(newBoard)
            // Сообщаем родителю, что доска создана
            onCreated(created)
            // Очищаем поля
            setTitle('')
            setDescription('')
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
            <h2 className="font-bold text-lg">Create Board</h2>
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
            <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
                Create
            </button>
        </form>
    )
}

export default BoardCreateForm
