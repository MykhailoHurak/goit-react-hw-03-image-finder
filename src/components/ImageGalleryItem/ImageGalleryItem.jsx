import './ImageGalleryItem.css';

const ImageGalleryItem = ({ tags, webformatURL, largeImageURL, onImageClick }) => {
    return (
        <li>
            <img
                src={webformatURL}
                alt={tags}
                className='ImageGalleryItem__image'
                onClick={() => onImageClick(largeImageURL)}
            />
        </li>
    );
};

export default ImageGalleryItem;