"use strict";
var SolarSystem;
(function (SolarSystem) {
    // Import from FudgeCore
    SolarSystem.f = FudgeCore;
    console.log(SolarSystem.f);
    // Defer, but inside typescript
    window.addEventListener("load", start);
    let viewport;
    function start() {
        // Create Canvas
        const canvas = document.querySelector("canvas");
        console.log(canvas);
        // CAMERA
        // Create Camera
        const camera = new SolarSystem.f.ComponentCamera();
        console.log(camera);
        // Move Camera
        camera.mtxPivot.translateZ(15);
        camera.mtxPivot.translateY(10);
        camera.mtxPivot.rotateY(180);
        // Viewport
        viewport = new SolarSystem.f.Viewport();
        viewport.initialize("Viewport", nodeGround, camera, canvas);
        viewport.draw();
        console.log(viewport);
        SolarSystem.f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
        SolarSystem.f.Loop.start();
        viewport.draw();
    }
    function update() {
        const up = SolarSystem.f.Vector3.Y();
        viewport.camera.mtxPivot.lookAt(nodeCube.mtxWorld.translation);
        SolarSystem.f.Recycler.store(up); //Recycler
        viewport.draw();
    }
})(SolarSystem || (SolarSystem = {}));
