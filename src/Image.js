function Image({source}) {
    return ( 
    <div className="image-wrapper">
        <img src={source} className="image-item"/>
    </div> );
}

export default Image;