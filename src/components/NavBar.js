import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

function NavBar(props) {

    const { books } = useContext(BookContext);
    console.log(books)


    return (
        <div className="navbar">
            <h1>My Reading List</h1>
            <p>You currently have { books.length } books to get through...</p>
        </div>
    )
}

export default NavBar
