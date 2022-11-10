import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import ContactForm from './ContactForm';


function ImageModal({ show, handleClose, image }) {

    const [showContact, setShowContact] = useState(false);
    const [stat, setStatic] = useState('')

    function handleStatic () {
        if(stat === 'static') {
            console.log("set static to '' ")

            setStatic('')
        }else {
            console.log("set static to static ")

            setStatic('static')
        
        }
    } 
    function handleShowContact (){    
        setShowContact(!showContact)
        if(showContact){
            handleStatic()
        }
    }
    
    return (
        <Modal 
            show={show} 
            onHide={handleClose}
            >
            <Modal.Header closeButton>
                <Modal.Title>{image.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <img src={image.image} className="image-item" />
                <div>{image.price}</div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleShowContact}>
                    {!showContact ? <>Contact seller</> : <>Close contact</>}
                </Button>
            </Modal.Footer>
            {showContact && <ContactForm name={image.name}/>}
        </Modal>
    );
}

export default ImageModal;