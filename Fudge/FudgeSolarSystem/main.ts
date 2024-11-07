namespace SolarSystem {

    // Import from FudgeCore
    export import f = FudgeCore;
    console.log(f);

    // Defer, but inside typescript
    window.addEventListener("load", start);




    let viewport: f.Viewport;

    function start(): void {
        // Create Canvas
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        console.log(canvas);

        // CAMERA

        // Create Camera
        const camera: f.ComponentCamera = new f.ComponentCamera();
        console.log(camera);

        // Move Camera
        camera.mtxPivot.translateZ(15);
        camera.mtxPivot.translateY(10);
        camera.mtxPivot.rotateY(180);

        // Viewport
        viewport = new f.Viewport();
        viewport.initialize("Viewport", nodeGround, camera, canvas);
        viewport.draw();
        console.log(viewport);

        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
        f.Loop.start();

        viewport.draw();
    }

    function update(): void {

        const up: f.Vector3 = f.Vector3.Y();

        viewport.camera.mtxPivot.lookAt(nodeCube.mtxWorld.translation,);

        f.Recycler.store(up); //Recycler

        viewport.draw();
    }

}
