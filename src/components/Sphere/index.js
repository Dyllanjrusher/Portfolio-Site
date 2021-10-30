import React from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber';

const Sphere = React.forwardRef(({ placeholder }, ref) => {

    const [colorMap, normalMap] = useLoader(TextureLoader, [
        'material_1_baseColor.jpeg',
        'material_1_normal.jpeg'
    ]);


    return (
        <mesh ref={ref} position={[-1.5, -1, 12]}>
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