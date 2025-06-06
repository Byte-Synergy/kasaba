import { form } from 'elysia'
import React from 'react'

const SearchComponent = () => {
  return (
    <form
      action="/search"
      method="get"
      className="flex items-center justify-between w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
    >
      <input
        type="text"
        name="query"
        placeholder="Search..."
        className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </form>
  )
}

export default SearchComponent
