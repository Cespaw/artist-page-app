import { useState } from "react";
import ImageModal from "./ImageModal";

function Image({image}) {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

 

    return ( 
    <div className="image-wrapper">
        <img src={image.image} onClick={handleShow} className="image-item"/>
        {show && <ImageModal show={show} handleClose={handleClose} image={image} />}
    </div> );
}

export default Image;