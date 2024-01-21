import React from "react";

function ListingsPage({ listings, onDelete, onEdit }) {
  return (
    <div className="listings-page">
      {listings.map((listing, index) => (
        <div key={index} className="listing">
          <h3>{listing.title}</h3>
          <p>Price: {listing.price}</p>
          <p>Description: {listing.description}</p>
          <p>Bathrooms: {listing.bathrooms}</p>
          <p>Bedrooms: {listing.bedrooms}</p>
          <button onClick={() => onEdit(index)}>Edit</button>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ListingsPage;
