import react, {useRef} from 'react';
import { PointLightHelper } from 'three';
import { useHelper } from "@react-three/drei";

const LightHelper = () => {
    const ref = useRef()
    useHelper(ref, PointLightHelper, 1)
    
    return <pointLight ref={ref} args={[`white`, 1, 100]} position={[-5, 5, 5]} />
}


export default LightHelper;