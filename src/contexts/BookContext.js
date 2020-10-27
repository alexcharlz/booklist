import React, { createContext, useState, useEffect } from 'react'



export const BookContext = createContext();

function BookContextProvider(props) {
    
    const [books, setBooks] = useState(() => {
        const localbooks = localStorage.getItem('books')
        return localbooks ? JSON.parse(localbooks) : []
    });

    const addBook = (title, author) => {
        setBooks([...books, {title, author, id:books.length+1 }]);
    };

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])


    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            { props.children }
        </BookContext.Provider>
    )
} export default BookContextProvider;
