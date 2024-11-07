namespace SolarSystem {

    // Import from FudgeCore
    export import f = FudgeCore;
    console.log(f);

    // Defer, but inside typescript
    window.addEventListener("load", start);

    const sun: f.Node = new f.Node("Sun");
    let vewport: f.Viewport;



    let viewport: f.Viewport;

    function start(): void {
        // Create Canvas
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        // Create Camera
        const camera: f.ComponentCamera = new f.ComponentCamera();


        const earth: Body = new Body("Earth", 1, "blue");
        sun.addChild.(earth)

        // Viewport
        viewport = new f.Viewport();
        viewport.initialize("Viewport", sun, camera, canvas);
        viewport.draw();
        console.log(viewport);

        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
        f.Loop.start();

        viewport.draw();
    }

    function update(): void {

        viewport.draw();
    }

}
