import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

function BookDetail({ book }) {

    const { removeBook } = useContext(BookContext)
    
    return (
        <li onClick={() => removeBook(book.id)}>
            <div className="title">{ book.title }</div>
            <div className="author">{ book.author }</div>
        </li>
    )
}

export default BookDetail
