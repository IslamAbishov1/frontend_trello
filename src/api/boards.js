import axios from 'axios'

const API_URL = 'http://localhost:3000/boards'

export const getBoards = async () => {
    const res = await axios.get(API_URL)
    return res.data
}
