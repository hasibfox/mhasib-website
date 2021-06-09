import React from 'react'
import './index.css'
const Falling = ({emote,size,speed,delay,color,reverse,dist}) => {
    return (
        <div>
            <div className="icon-test" style={{
                animation:"rotate " + speed + " infinite " ,
                animationDelay: delay,
                animationDirection: reverse,
                left: dist,
                fontSize: size,
                color:color,

            }}>
                <i class={emote}></i>
            </div>
        </div>
    )
}

export default Falling