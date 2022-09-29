import React from 'react';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ imagesFromAPI, onImageClick }) => {
    return (
        <div>
            <ul className='ImageGallery'>
                {imagesFromAPI.map(({ id, tags, webformatURL, largeImageURL }) => (
                    <ImageGalleryItem
                        key={id}
                        tags={tags}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                        onImageClick={onImageClick}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ImageGallery;
