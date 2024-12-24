import React, { useState } from 'react'
import { Variant } from '../../shared/types/Variant'
import './ImageGallery.css'

interface ImageGalleryProps {
  images: Array<{ src: string; description: string }>
  background: Variant
}
export default function ImageGallery(props: ImageGalleryProps) {
  const { images, background } = props
  const [activeImg, setActiveImg] = useState(0)
  const [expanded, setExpanded] = useState(false)

  return (
    <React.Fragment>
      <div className={`img-gallery-container ${background}`}>
        <div className='img-gallery boxed'>
          <div className='img-gallery-showcase'>
            <h2>Gallery</h2>
            <div className='img-gallery-active-img-container'>
              <img className='img-gallery-active-img' src={images[activeImg].src} alt={images[activeImg].description} />
            </div>
            <span className='img-gallery-active-desc'>{images[activeImg].description}</span>
          </div>
          <div className='img-gallery-imgs-container'>
            <div className='img-gallery-imgs'>
              {images.slice(0, expanded ? images.length : 3).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImg(index)}
                  className={`img-gallery-img-bt ${activeImg === index ? 'active' : ''}`}
                >
                  <img key={index} className='img-gallery-img' src={image.src} alt={image.description} />
                </button>
              ))}
            </div>
          </div>
          {images.length > 3 && (
            <button
              className='button img-gallery-more-switch-bt'
              onClick={() => setExpanded((prevState) => !prevState)}
            >
              {expanded ? 'See Less' : 'See More'}
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}
