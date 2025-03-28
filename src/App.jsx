import React, { useEffect, useState } from 'react'

const App = ({ children }) => {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark)
    }, [dark])

    return (
        <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
            <header className="flex justify-end p-4">
                <button
                    onClick={() => setDark(!dark)}
                    className="p-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                    {dark ? '☀️ Light' : '🌙 Dark'}
                </button>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}

export default App
