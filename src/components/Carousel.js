import React from 'react'

const Carousel = ({images, index}) => {

    return (
        <div>

            <div id={"Modal" + index.toString()} class="carousel slide" data-bs-ride="carousel" >
                <ol class="carousel-indicators">
                    <li data-bs-target="#Modal" data-bs-slide-to="0" class="active"></li>
                    {images.slice(1).map((img,inx)=> {
                        return (
                            <li data-bs-target={"#Modal"+ index.toString()} data-bs-slide-to={(inx+1).toString()}></li>
                        )
                    })}
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={images[0]} alt="First slide"/>
                    </div>
                    {images.slice(1).map((img,inx)=> {
                        return (
                            <div class="carousel-item">
                                <img class="d-block w-100" src={img} alt={"Slide" + (inx+1).toString()}/>
                            </div>
                        )
                    })}
                    
                </div>
                <a class="carousel-control-prev" href={"#Modal" + index.toString()} role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href={"#Modal" + index.toString()} role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
        </div>
    )
}

export default Carousel
