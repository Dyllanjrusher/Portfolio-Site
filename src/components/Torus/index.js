import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Torus = () => {
    const torusMesh = useRef();
    const torusArgs = [5, .75, 178, 8, 5, 3];

    // useFrame(() => {
    //     torusMesh.current.rotation.x += 0.01;
    //     torusMesh.current.rotation.y += 0.005;
    //     torusMesh.current.rotation.z += 0.01;

    // });

    return (
        <mesh ref={torusMesh}>
            <torusKnotGeometry
                args={torusArgs}
            />
            <meshStandardMaterial color='#1E5128' />
        </mesh>
    )
};
export default Torus;