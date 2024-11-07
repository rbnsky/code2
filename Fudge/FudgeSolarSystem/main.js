"use strict";
var SolarSystem;
(function (SolarSystem) {
    // Import from FudgeCore
    SolarSystem.f = FudgeCore;
    console.log(SolarSystem.f);
    // Defer, but inside typescript
    window.addEventListener("load", start);
    const sun = new SolarSystem.f.Node("Sun");
    let vewport;
    let viewport;
    function start() {
        // Create Canvas
        const canvas = document.querySelector("canvas");
        // Create Camera
        const camera = new SolarSystem.f.ComponentCamera();
        const earth = new SolarSystem.Body("Earth", 1, "blue");
        sun.addChild.(earth);
        // Viewport
        viewport = new SolarSystem.f.Viewport();
        viewport.initialize("Viewport", sun, camera, canvas);
        viewport.draw();
        console.log(viewport);
        SolarSystem.f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
        SolarSystem.f.Loop.start();
        viewport.draw();
    }
    function update() {
        viewport.draw();
    }
})(SolarSystem || (SolarSystem = {}));
