import { Request, Response } from "express";

export class Vr {
    index(req: Request, res: Response) {
        res.send(`<!DOCTYPE html>
<html lang="fr">
    <head>
        <title>VR with A-FRAME</title>
        <script src="https://aframe.io/releases/0.9.2/aframe.min.js"></script>
        <script src="https://unpkg.com/aframe-animation-component@3.2.1/dist/aframe-animation-component.min.js"></script>
        <script src="https://unpkg.com/aframe-particle-system-component@1.0.x/dist/aframe-particle-system-component.min.js"></script>
        <script src="https://unpkg.com/aframe-extras.ocean@%5E3.5.x/dist/aframe-extras.ocean.min.js"></script>
        <script src="https://unpkg.com/aframe-gradient-sky@1.0.4/dist/gradientsky.min.js"></script>
        <script src="js/components/hello-world.js"></script>
    </head>
    <body>
        <a-scene>
            <a-entity id="sphere" geometry="primitive: sphere"
                      material="color: #EFEFEF; shader: flat"
                      position="0 0.15 -5"
                      light="type: point; intensity: 5"
                      animation="property: position; easing: easeInOutQuad; dir: alternate; dur: 1000; to: 0 -0.10 -5; loop: true"></a-entity>
        
            <a-entity id="ocean" ocean="density: 20; width: 50; depth: 50; speed: 4"
                      material="color: #9CE3F9; opacity: 0.75; metalness: 0; roughness: 1"
                      rotation="-90 0 0"></a-entity>
        
            <a-entity id="sky" geometry="primitive: sphere; radius: 5000"
                      material="shader: gradient; topColor: 235 235 245; bottomColor: 185 185 210"
                      scale="-1 1 1"></a-entity>
        
            <a-entity id="light" light="type: ambient; color: #888"></a-entity>
            
            <a-entity hello-world></a-entity>
        </a-scene>
    </body>
</html>`);
    }
}