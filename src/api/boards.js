import axios from 'axios'

const API_URL = 'http://localhost:3000/boards'

export const getBoards = async () => {
    try {
        const res = await axios.get(API_URL)
        return res.data
    } catch (err) {
        throw new Error('Failed to fetch boards')
    }
}

export const createBoard = async (newBoard) => {
    try {
        const res = await axios.post(API_URL, newBoard)
        return res.data
    } catch (err) {
        throw new Error('Failed to create board')
    }
}

export const updateBoard = async (boardId, updatedData) => {
    try {
        const res = await axios.patch(`${API_URL}/${boardId}`, updatedData)
        return res.data
    } catch (err) {
        throw new Error('Failed to update board')
    }
}

export const deleteBoard = async (boardId) => {
    try {
        await axios.delete(`${API_URL}/${boardId}`)
    } catch (err) {
        throw new Error('Failed to delete board')
    }
}
