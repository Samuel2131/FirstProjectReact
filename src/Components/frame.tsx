
import { useState } from 'react'

type frameType = {
    children?: JSX.Element,
    color?: string,
    border?: number
}

const defaultChildren = () => <div className="d-flex align-items-center m-3"><p>Empty div...</p></div>;

export const Frame = (props: frameType) => {
    const {children = defaultChildren(), color = 'gray', border = 1} = props;
    const [x, setX] = useState(3);
    const [isIn, setIsIn] = useState(false);
    return (
        <div onMouseEnter={() => setIsIn(true)} onMouseLeave={() => setIsIn(false)} className="d-flex align-items-center m-3" style={{border: `${border}px solid ${color}`, padding: 3, backgroundColor: isIn ? 'black' : 'white'}}>
            {children}
            <button type="button" className="btn btn-primary" onClick={() => setX(x+1)}>Click</button>
            {x}
        </div>
    )
}