import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import CommentsModal from "./CommentsModal";
import Button from "react-bootstrap/Button";
import "./singleBook.css";

const SingleBook = ({ img, asin, title, price, category }) => {
    const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const toggleCommentsModal = () =>
		setIsCommentsModalOpen(!isCommentsModalOpen);

    const handlerIsClicked = () =>
        setIsClicked(!isClicked);

    return(
        <>
        <Card key={asin} style={{ width: '18rem' }} onClick={handlerIsClicked} className={isClicked ? 'clickedCard' : ''}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price}</Card.Text>
                <Card.Text>{category}</Card.Text>
                <Card.Text>{asin}</Card.Text>
                <Button onClick={toggleCommentsModal} variant="primary">
					Commenti
				</Button>
            </Card.Body>
        </Card>
        {isCommentsModalOpen && (
            <>
            <CommentsModal asin={asin} close={toggleCommentsModal} />
            </>
        )}
        </>
    )
}

export default SingleBook;