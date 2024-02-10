import './gellery.css'
import React from 'react';
import GalleryItem from './GalleryItem';

function Gallery({ pic, setModal }) {
  return (
    <div className="gallery">
      {pic.map((elem) => (
        <GalleryItem
          key={elem.id}
          url={elem.url}
          desc={elem.description}
          {...elem}
          setModal = {setModal}
        />
      ))}
    </div>
  );
}

export default Gallery;
