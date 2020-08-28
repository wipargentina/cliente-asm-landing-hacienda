import React from "react";

function Gallery(props) {
  const photos = props.photos;
  return (
    <div className="row justify-content-center">
      {photos.map((photo) => {
        return (
          <div key={photo.id} className="col-md-4">
            <div className="photo">
              <img src={photo.image} alt={photo.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
