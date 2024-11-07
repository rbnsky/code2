"use strict";
var SolarSystem;
(function (SolarSystem) {
    SolarSystem.f = FudgeCore;
    window.addEventListener("load", start);
    let sun;
    let viewport;
    let rotationNode, start;
    () => {
        // Create Canvas
        const canvas = document.querySelector("canvas");
        // Create & Rotate Camera
        const camera = new SolarSystem.f.ComponentCamera();
        camera.mtxPivot.translateZ(180);
        camera.mtxPivot.translateZ(180);
        // Create Sun Body
        sun = new SolarSystem.Body("Sun", 1, 0, "yellow");
        // Create Earth Body
        const earth = new SolarSystem.Body("Earth", 1, 2, "blue");
        let rotationNode = new SolarSystem.f.Node("EarthRotation");
        let rotationTransform = new SolarSystem.f.ComponentTransform();
        rotationNode.addComponent(rotationTransform);
        sun.addChild(earth);
        // Viewport
        viewport = new SolarSystem.f.Viewport();
        viewport.initialize("Viewport", sun, camera, canvas);
        viewport.draw();
        SolarSystem.f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
        SolarSystem.f.Loop.start();
    };
    function update() {
        rotationNodeEarth.mtxLocal.rotateY(10);
        viewport.draw();
    }
})(SolarSystem || (SolarSystem = {}));
