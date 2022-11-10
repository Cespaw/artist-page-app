import IMAGES from "./Images";
import Image from "./Image";

function Gallery() {

    console.log(IMAGES)

    return (
        <div className='gallery'>
            {IMAGES && IMAGES.map((image) =>
                <div key={image.id}>
                    <Image image={image} />
                </div>)}
        </div>
    );
}

export default Gallery;