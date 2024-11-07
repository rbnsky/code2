namespace SolarSystem {

    export import f = FudgeCore

    window.addEventListener("load", start);

    let sun: Body
    let viewport: f.Viewport;
    let rotationNode:

        function start(): void {
            // Create Canvas
            const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
            // Create & Rotate Camera
            const camera: f.ComponentCamera = new f.ComponentCamera();
            camera.mtxPivot.translateZ(180);
            camera.mtxPivot.translateZ(180);

            // Create Sun Body
            sun = new Body("Sun", 1, 0, "yellow");

            // Create Earth Body
            const earth: Body = new Body("Earth", 1, 2, "blue");

            let rotationNode: f.Node = new f.Node("EarthRotation")
            let rotationTransform: f.ComponentTransform = new f.ComponentTransform();
            rotationNode.addComponent(rotationTransform)

            sun.addChild(earth)


            // Viewport
            viewport = new f.Viewport();
            viewport.initialize("Viewport", sun, camera, canvas);
            viewport.draw();

            f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
            f.Loop.start();

        }

    function update(): void {

        rotationNodeEarth.mtxLocal.rotateY(10)

        viewport.draw();
    }

}
