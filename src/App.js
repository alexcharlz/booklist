import React from 'react'
import BookContextProvider from './contexts/BookContext'
import NavBar from './components/NavBar'
import BookList from './components/BookList'
import BookForm from './components/BookForm'

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
