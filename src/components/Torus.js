import React, { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';


const Torus = React.forwardRef((props, ref) => {

    const { moveStuff, setIsOrbiting, isOrbiting } = props;

    const [numModN, setNumModN] = useState(0);
    const torusArgs = [5, .75, 178, 8, 5, 3];

    const onAnimateButtonClick = (e) => {
        setIsOrbiting(!isOrbiting);
    }


    useFrame(() => {
        if (isOrbiting && (numModN % 3 == 0)) {
            moveStuff(1, true);
            setNumModN(numModN + 1);
        } else {
            setNumModN(numModN + 1);
        }
    });


    return (
        <mesh ref={ref}>
            <torusKnotGeometry args={torusArgs} />
            <Html center>
                <div className="container">
                    <h1 className="title">Hey There!</h1>
                    <br /> <br /> <br /> <br /> <br /> <br /> <br />
                    <p className="tiny-text">Made with love in React
                        <br />
                        <button
                            className='animate-button'
                            onClick={onAnimateButtonClick}>
                            <br />
                            Orbit!
                            <br />
                            <br />
                        </button>
                    </p>
                </div>
            </Html>
            <meshStandardMaterial color='#1E5128' />
        </mesh>
    )
});

export default Torus;