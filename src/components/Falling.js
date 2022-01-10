import React from 'react'
import './index.css'
const Falling = ({emote,size,speed,delay,color,reverse,dist}) => {
    return (
        <div>
            <div  style={{

                fontSize: size,
                color:color,

            }}>
                <i className={emote} style={{
                    left: dist,
                }}></i>
            </div>
        </div>
    )
}

export default Falling
