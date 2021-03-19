import React from 'react';
import { useTrail, animated, config } from "react-spring";

const FadeIn = ({ start, children, ...props }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: config.gentle,
        opacity: start ? 1 : 0,
        x: start ? 0 : 20,
        height: start ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        <div className="trails-main d-flex justify-content-center" {...props}>
            {trail.map(({ x, height, ...rest }, index) => (
                <animated.div
                    key={[index]}
                    className="trails-text"
                    style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
                    <animated.span style={{ height }}>{items[index]}</animated.span>
                </animated.div>
            ))}
        </div>
    )
}

export default FadeIn;