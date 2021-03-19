import React, { useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useTransition, animated, config } from 'react-spring'

const About = () => {

    const { inView, ref } = useInView({})
    const eref = useRef([])
    const [items, set] = useState([])
    const transitions = useTransition(items, null, {
        from: { opacity: 0, height: "0vw", innerHeight: "0vw", transform: 'perspective(600px)', color: '#20B2AA' },
        enter: [
            { opacity: 1, height: "7.5vw", innerHeight: "7.5vw" },
            { transform: 'perspective(600px)', color: '#c23369' },
            { transform: 'perspective(600px)' },
        ],
        leave: [{ color: '#8fa5b6' }, { innerHeight: "0vw" }, { opacity: 0, height: "0vw" }],
        update: { color: '#28b4d7' },
        config: config.default
    })

    useEffect(() => {
        eref.current.map(clearTimeout)
        eref.current = []
        set([])
        eref.current.push(setTimeout(() => set(["I'M", 'RIAN AHMAD', 'WEB DEVELOPER']), 2000))
        eref.current.push(setTimeout(() => set(["I'M", 'WEB DEVELOPER']), 4000))
        eref.current.push(setTimeout(() => set(["I'M", 'RIAN AHMAD', 'WEB DEVELOPER']), 8000))
    }, [inView])

    return (
        <div ref={ref}>
            {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
                <animated.h1 className="transitions-item" key={key} style={rest}>
                    <animated.span style={{ overflow: 'hidden', height: innerHeight }} className="text-nowrap">
                        {item}
                    </animated.span>
                </animated.h1>
            ))}
        </div>
    );
}

export default About;