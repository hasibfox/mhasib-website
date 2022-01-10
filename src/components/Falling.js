import React from 'react'
import './index.css'
const Falling = ({emote,size,speed,delay,color,reverse,dist}) => {
    return (
        <div>
            <div className="" style={{
                fontSize: size,
                color:color,
            }}>
                <i className={emote} style={{
                    animation:"rotate " + speed + " infinite " ,
                    animationDelay: delay,
                    animationDirection: reverse,
                    left: dist,
                }}></i>
                </div>
        </div>
    )
}

export default Falling
