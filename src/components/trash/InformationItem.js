import React from "react";

function InformationItem(props) {
  const items = props.items;
  return (
    <>
      <div className="row justify-content-center">
        {items.map((item) => {
          return (
            <div key={item.id} className="col-md-5">
              <div className="card">
                <div className="card-header">{item.antetitle}</div>
                <img src={item.image} alt="toro" className="card-image" />
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default InformationItem;
