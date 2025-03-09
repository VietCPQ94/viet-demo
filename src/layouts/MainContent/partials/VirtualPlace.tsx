import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { sVirtual } from "../mainContent.store";

const VirtualPlace: React.FC = () => {
    const obj = sVirtual.use(n => n.model);
    return (
        <div className="flex  justify-content-center" style={{ aspectRatio: "16 / 9" }}>
            <Canvas camera={{
                position: [5, 5, 5],
            }} className="w-10">
                <axesHelper args={[5]} />
                <gridHelper args={[10, 10]} />
                {obj && <primitive object={obj} />}
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default VirtualPlace;
