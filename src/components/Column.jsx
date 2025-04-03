import React from 'react'

const Column = ({ column }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-md p-4 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {column.title}
            </h2>
            <ul className="space-y-2">
                {column.cards.map((card) => (
                    <li
                        key={card.id}
                        className="p-3 bg-gray-50 dark:bg-gray-700 rounded shadow-sm"
                    >
                        <h3 className="font-medium text-gray-800 dark:text-white">
                            {card.title}
                        </h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Column
