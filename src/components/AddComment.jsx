import React, {useEffect, useState} from 'react';
import { Form, Button, Container, Row, Col} from 'react-bootstrap'

const AddComment = ({asin, onSuccess, getCommentsFromBook}) => {

    const [handlerComment, setHandlerComment] = useState(''); 
    const [handlerRate, setHandlerRate] = useState('');
    const apiUrl = "https://striveschool-api.herokuapp.com/api/comments/";
    const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDgwNDhjYmQyYWRhNDAwMTQzYzFlOTciLCJpYXQiOjE2ODczNDM2MTAsImV4cCI6MTY4ODU1MzIxMH0.9te7LdsFv5of_YmuveCy48HuVmaJPJ2tfqpQgxEhyKI";

    const postComment = async () => {

        const newComment = {
            "comment": handlerComment,
            "rate": handlerRate,
            "elementId": asin,
        };

        const payload = newComment;

        try {
            const response = await fetch (apiUrl,{
                    method: "POST",
                    body: JSON.stringify(payload),
					headers: {
						"Content-Type": "application/json",
                        "Authorization": "Bearer " + apiKey
					}
				}
            );
            if (response.ok){

                setHandlerComment(''); 
                setHandlerRate('');
                getCommentsFromBook();
           
            } else {
                // La richiesta non è andata a buon fine
                console.log("Errore durante la creazione del prodotto:", response.status, response.statusText);
            }
            
        } catch (error) {
            console.log("Errore durante la richiesta:", error);
        }
    }

    const handlePostComment = async () => {
        await postComment();
        onSuccess(); // Richiama la funzione di callback passata come prop
        setHandlerComment('');
        setHandlerRate('');
      };
    return(
        <Container style={{background: "white"}}>
            <Row style={{ display: "block" }}>
                <Col>
                    <Form.Group className="d-flex justify-content-center align-items-center mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control className='mx-2' type="text" placeholder="scrivi un commento" name="comment" value={handlerComment} onChange={(e) => setHandlerComment(e.target.value)} />
                        <Form.Control type="number" placeholder="dai un voto" name="voto" value={handlerRate} onChange={(e) => setHandlerRate(e.target.value)} />
                        <Button 
                            type="submit" 
                            variant="success" 
                            id="button-addon2" 
                            className='mx-2'
                            onClick={handlePostComment}>
                            Invia
                        </Button>
                    </Form.Group>
                </Col>
            </Row>  
        </Container>
    )
}

export default AddComment;