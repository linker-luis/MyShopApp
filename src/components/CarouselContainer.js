import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarouselContainer({images}) {
  
    return (
        <div className = 'carousel-container'>
                {
                    images 
                        ?<Carousel showArrows={true} >
                        
                                 {
                                    images.map((img, i) => {
                                        return(
                                            <div key = {i} className = 'carouse-item'>
                                                <img src={img.imgURL} alt = '' loading='lazy' />                                    
                                            </div>  
                                        )
                                    })
                                }
                                
                        
                                            
                                                
                        </Carousel>
                        : <p>cargando</p>
                }
            </div>
    )
}

export default CarouselContainer
