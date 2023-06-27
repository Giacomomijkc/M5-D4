import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import historyBooks from '../data/history.json';
import SingleBook from './SingleBook';
import SearchBar from './SearchBar';

const LatestReleases = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (value) => {
      setSearchTerm(value);
    };

    const filteredBooks = historyBooks.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <>
        <Container>
            <SearchBar handleInputChange={handleInputChange} />
            <Row>
                <Col className='d-flex flex-wrap gap-5'>
                {searchTerm !== '' ? (
              filteredBooks.map((book) => (
                <SingleBook
                  key={book.asin}
                  img={book.img}
                  category={book.category}
                  price={book.price}
                  title={book.title}
                  asin = {book.asin}
                />
              ))
            ) : (
              historyBooks.map((book) => (
                <SingleBook
                  key={book.asin}
                  img={book.img}
                  category={book.category}
                  price={book.price}
                  title={book.title}
                  asin = {book.asin}
                />
              ))
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LatestReleases;