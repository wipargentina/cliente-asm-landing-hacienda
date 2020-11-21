import React from "react";

function PhotoItem(props) {
  const photos = props.photos;
  return (
    <div className="row justify-content-center">
      {photos.map((photo) => {
        return (
          <div key={photo.id} className="col-md-3">
            <div className="photo">
              <img src={photo.image} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PhotoItem;
