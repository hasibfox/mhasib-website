import React from 'react'
import Carousel from './Carousel'

const Modal = ({id, desc, images}) => {
    return (
        <div>
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" style="max-width: 80%" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title" id="exampleModalLongTitle"></h2>
                            <span aria-hidden="true" class="close" data-dismiss="modal" aria-label="Close">&times;</span>
                            <h1> X </h1>
                        </div>
                        <div class="modal-body">
                            {/*<Carousel id ={id} images = {images}/> */}
                            <h5>{desc}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
