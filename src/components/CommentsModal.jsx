import React, { useEffect, useState } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import "./commentsModal.css";
import AddComment from "./AddComment";

const CommentsModal = ({ close, asin }) => {
	const [bookComments, setBookComments] = useState(null);
    const apiUrl = "https://striveschool-api.herokuapp.com/api/comments/";
    const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDgwNDhjYmQyYWRhNDAwMTQzYzFlOTciLCJpYXQiOjE2ODczNDM2MTAsImV4cCI6MTY4ODU1MzIxMH0.9te7LdsFv5of_YmuveCy48HuVmaJPJ2tfqpQgxEhyKI";

	const getCommentsFromBook = async () => {
		try {
			const data = await fetch(
				apiUrl +`${asin}`,
				{
					headers: {
						"Content-Type": "application/json",
                        "Authorization":
							"Bearer " + apiKey
					}
				}
			);
			const response = await data.json();
			setBookComments(response);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getCommentsFromBook();
	}, [asin]);

	return (
        <>
		<div className="modal show commentsModal" style={{ display: "block" }}>
            <>
			<Modal.Dialog centered size="lg" backdrop="static">
				<Modal.Header>
					<Modal.Title>Commenti</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					{bookComments &&
						bookComments.map((comment) => {
							return (
								<ListGroup
									className="d-flex justify-content-between align-items-start"
									
								>
									<div className="ms-2 me-auto my-3">
										<div>{comment.comment}</div>
										<div>Voto: {comment.rate}</div>
									</div>
								</ListGroup>
							);
						})}
				</Modal.Body>

				<Modal.Footer>
                    <AddComment asin={asin} onSuccess={getCommentsFromBook}/>
					<Button onClick={close}>Chiudi</Button>
				</Modal.Footer>
			</Modal.Dialog>
            </>
		</div>
        </>
	);
};

export default CommentsModal;
