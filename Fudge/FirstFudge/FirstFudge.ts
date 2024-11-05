namespace FirstFudge {
    import f = FudgeCore;

    window.addEventListener("load", start);

    // create a node as the scene graph
    const node: f.Node = new f.Node("Node");

    console.log(node);

    let globalViewport: f.Viewport;

    f.Loop.addEventListener(f.EVENT.LOOP_FRAME, rotateCube);
    f.Loop.start;

    function start(_event: Event): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        console.log(canvas);

        // create MeshCube
        const cube: f.Mesh = new f.MeshCube("Cube");
        // refer MesH´hCube to the node
        node.addComponent(new f.ComponentMesh(cube));
        // rotate meshCube (once)
        node.getComponent(f.ComponentMesh).mtxPivot.rotate(new f.Vector3(-30, 30, -50));

        console.log(cube);


        // create a material with the default texture for testing (I replaced it with a color)
        //const material = new f.Material("Texture", FudgeCore.ShaderLitTextured);

        // create lit material
        const material = new f.Material("Texture", f.ShaderLit);

        console.log(material);


        //create ComponentMaterial
        const cmpmaterial: f.ComponentMaterial = new f.ComponentMaterial(material);
        // set ComponentMaterial color (r, g, b, alpha) - all 0-1 (alpha doesnt work if material is lit)
        cmpmaterial.clrPrimary.set(1, 0.4, 0.7, 1);
        // refer ComponentMaterial to the node
        node.addComponent(cmpmaterial);

        console.log(cmpmaterial);


        // create a camera
        const camera: f.ComponentCamera = new f.ComponentCamera();

        console.log(camera);


        // move the camera
        camera.mtxPivot.translateZ(-3);
        // rotate the camera (only if we look away from the camera)
        //camera.mtxPivot.rotateY(180);


        // create a viewport to manage rendering of the graph to the canvas via the camera
        const viewport: f.Viewport = new f.Viewport();
        viewport.initialize("Viewport", node, camera, canvas);
        viewport.draw();
        globalViewport = viewport;


        //const cmptransform: f.ComponentTransform = new f.ComponentTransform;
        //node.addComponent(componenttransform);
        //node.getComponent(f.ComponentTransform).mtxLocal.rotateY(1);
        //node.mtxLocal.rotateY(1);

        f.Loop.start();
        f.Time.game.setScale(1);
    }

    function rotateCube(): void {
        const frameTimeInMilliSeconds: number = f.Loop.timeFrameGame;
        const frameTimeInSeconds: number = (frameTimeInMilliSeconds / 1000);
        const degrees: number = 360 / frameTimeInMilliSeconds;
        node.mtxLocal.rotateY(1);
        globalViewport.draw();
    }
}