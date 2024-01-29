import './ImageCarousel.css'
import image1 from '../../../assets/carouselImages/personalWeb1.png'
import image2 from '../../../assets/carouselImages/personalWeb2.png'
import image3 from '../../../assets/carouselImages/personalWeb3.png'
import image4 from '../../../assets/carouselImages/personalWeb4.png'
import image5 from '../../../assets/carouselImages/personalWeb5.png'
import image6 from '../../../assets/carouselImages/personalWeb6.png'
import image7 from '../../../assets/carouselImages/personalWeb7.png'
import image8 from '../../../assets/carouselImages/personalWeb8.png'
import React, { useState } from 'react'

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8
  ]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className='carouselImageContainer'>
      <img
        className='carouselImage'
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />

      <div className='carousel-controls'>
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  )
}

export default ImageCarousel
