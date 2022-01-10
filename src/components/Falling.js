import React from 'react'
import './index.css'
const Falling = ({emote,size,speed,delay,color,reverse,dist}) => {
    return (
        <div>
            <div className="ii" style={{
                fontSize: size,
                color:color,
                

            }}>
                <i className={emote} style={{
                    left: dist,
                    animation: `goDown ${speed} infinite ${reverse} ${delay}`
                }}></i>
                </div>
        </div>
    )
}

export default Falling
