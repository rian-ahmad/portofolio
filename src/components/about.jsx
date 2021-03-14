import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'

const About = () => {

    const eref = useRef([])
    const [items, set] = useState([])
    const transitions = useTransition(items, null, {
        from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px)', color: '#8fa5b6' },
        enter: [
            { opacity: 1, height: 70, innerHeight: 70 },
            { transform: 'perspective(600px)', color: '#20B2AA' },
            { transform: 'perspective(600px)' },
        ],
        leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
        update: { color: '#28b4d7' },
    })

    const reset = useCallback(() => {
        eref.current.map(clearTimeout)
        eref.current = []
        set([])
        eref.current.push(setTimeout(() => set(["I'M", 'RIAN AHMAD', 'WEB DEVELOPER']), 2000))
        eref.current.push(setTimeout(() => set(["I'M", 'WEB DEVELOPER']), 5000))
        eref.current.push(setTimeout(() => set(["I'M", 'RIAN AHMAD', 'WEB DEVELOPER']), 8000))
    }, [])

    useEffect(() => {
        reset()
    }, [reset])

    return (
        <div>
            {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
                <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
                    <animated.div style={{ overflow: 'hidden', height: innerHeight }}>
                        <span className="text-nowrap"> {item} </span>
                    </animated.div>
                </animated.div>
            ))}
        </div>
    );
}

export default About;