import React, { useState } from 'react';
import BookService from '../services/BookService';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    description: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const saveBook = (e) => {
    e.preventDefault();
    BookService.createBook(book)
      .then(() => navigate('/'))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={saveBook}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={book.description}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddBook;
