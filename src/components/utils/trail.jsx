import React from 'react';
import { useTrail, animated } from "react-spring";

const Trail = ({ open, children, ...props }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200, duration: 1000 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        <div className="trails-main" {...props}>
            <div>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div
                        key={items[index]}
                        className="trails-text"
                        style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
                        <animated.span style={{ height }}>{items[index]}</animated.span>
                    </animated.div>
                ))}
            </div>
        </div>
    )
}

export default Trail;