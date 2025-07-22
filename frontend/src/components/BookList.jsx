import React, { useEffect, useState } from 'react';
import BookService from '../services/BookService';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BookService.getBooks().then((res) => setBooks(res.data));
  }, []);

  const deleteBook = (id) => {
    BookService.deleteBook(id).then(() => {
      setBooks(books.filter(book => book.id !== id));
    });
  };

  return (
    <div>
      <h2>Books</h2>
      <Link to="/add">Add Book</Link>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} — {book.author}
            <Link to={`/edit/${book.id}`}>Edit</Link>
            <button className="icon-btn delete" onClick={() => deleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
