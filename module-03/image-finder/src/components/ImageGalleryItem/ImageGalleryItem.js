import React from "react";
import PropTypes from "prop-types";

export default function ImageGalleryItem({
  webformatURL,
  tags,
  onImgClick,
  largeImageURL,
}) {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={onImgClick}
        data-large_img_url={largeImageURL}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  onImgClick: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
