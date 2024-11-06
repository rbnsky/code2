namespace FirstFudge {

    // Import Arguents from FudgeCore
    import f = FudgeCore;
    console.log(f);

    // Defer, but inside typescript
    window.addEventListener("load", start);

    // Create Nodes
    const node: f.Node = new f.Node("Node");
    const nodeGround: f.Node = new f.Node("Ground");
    let Viewport: f.Viewport;

    function start(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        console.log(canvas);

        // Cube ------------------------------------------------------------

        // Create MeshCube
        const mesh: f.Mesh = new f.MeshCube("Cube");
        console.log(mesh);

        // Create ComponentMesh
        const cmpMesh: f.ComponentMesh = new f.ComponentMesh(mesh);
        node.addComponent(cmpMesh);

        // Create Cube Material
        const material: f.Material = new f.Material("Material", f.ShaderLit);
        const cmpMaterial: f.ComponentMaterial = new f.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(1, 0.4, 0.7, 1);
        node.addComponent(cmpMaterial);

        // Add transform node
        const cmpTransform: f.ComponentTransform = new f.ComponentTransform();
        node.addComponent(cmpTransform);
        console.log(node);

        // Ground ------------------------------------------------------------

        const meshGround: f.MeshQuad = new f.MeshQuad("Ground");

        const cmpMeshGround: f.ComponentMesh = new f.ComponentMesh(meshGround);
        nodeGround.addComponent(cmpMeshGround);

        const mtrGround: f.Material = new f.Material("Ground", f.ShaderLit);
        const cmpmtrGround: f.ComponentMaterial = new f.ComponentMaterial(mtrGround);
        cmpmtrGround.clrPrimary.set(0.2, 1, 0.7, 1);
        nodeGround.addComponent(cmpmtrGround);

        // Camera ------------------------------------------------------------

        // Create Camera
        const camera: f.ComponentCamera = new f.ComponentCamera();
        console.log(camera);

        // Move Camera
        camera.mtxPivot.translateZ(-15);
        camera.mtxPivot.translateY(10);
        //camera.mtxPivot.rotateY(180);

        // Create Viewport
        const viewport: f.Viewport = new f.Viewport();
        viewport.initialize("viewport", node, camera, canvas);
        viewport.draw();
        Viewport = viewport;
        console.log(viewport);

        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);
        f.Loop.start();
        //f.Time.game.setScale(0.3);

    }

    //function moveCube(): void {
    //const frameTimeInMilliSeconds: number = f.Loop.timeFrameGame;
    //const frameTimeInSeconds: number = (frameTimeInMilliSeconds / 1000);
    //onst degrees: number = 360 * frameTimeInSeconds;

    //node.mtxLocal.rotateY(degrees);
    //node.mtxLocal.rotateX(degrees * 2);
    //node.mtxLocal.rotateX(degrees / 2);
    //Viewport.draw();

    //}

    function update(): void {
        const tSpeed: number = 3 / 1; //units per seconds
        const rSpeed: number = 360 / 3; //degrees per seconds
        const frametimeInMilliSeconds: number = f.Loop.timeFrameGame;
        const frametimeInSeconds: number = (frametimeInMilliSeconds / 1000);

        // Controls
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.W]))
            node.mtxLocal.translateZ(tSpeed * frametimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.S]))
            node.mtxLocal.translateZ(-tSpeed * frametimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.A]))
            node.mtxLocal.rotateY(rSpeed * frametimeInSeconds);
        if (f.Keyboard.isPressedOne([f.KEYBOARD_CODE.D]))
            node.mtxLocal.rotateY(-rSpeed * frametimeInSeconds);

        Viewport.camera.mtxPivot.lookAt(node.mtxWorld.translation);

        Viewport.draw();
    }

}