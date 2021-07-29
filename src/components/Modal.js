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
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
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
