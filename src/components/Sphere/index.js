import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Sphere = React.forwardRef((props, ref) => {

    const [colorMap, normalMap] = useLoader(TextureLoader, [
        'material_1_baseColor.jpeg',
        'material_1_normal.jpeg'
    ]);


    return (
        <mesh ref={ref} position={props.position}>
            <sphereGeometry
                args={[3, 32, 32]}
            />
            <meshStandardMaterial
                map={colorMap} normalMap={normalMap}
            />
        </mesh>
    )
});

export default Sphere;