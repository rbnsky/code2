namespace FirstFudge {

    import f = FudgeCore;
    console.log(f);

    window.addEventListener("load", start);

    // create node
    const node: f.Node = new f.Node("Node");
    let globalViewport: f.Viewport;
    f.Loop.addEventListener(f.EVENT.LOOP_FRAME, moveCube);


    function start(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        console.log(canvas);

        //create Cube Mesh
        const mesh: f.Mesh = new f.MeshCube("Cube");
        console.log(mesh);

        //create Camera
        const camera: f.ComponentCamera = new f.ComponentCamera();
        console.log(camera);

        //create ComponentMesh
        const cmpMesh: f.ComponentMesh = new f.ComponentMesh(mesh);
        node.addComponent(cmpMesh);

        //create Material
        const material: f.Material = new f.Material("Material", f.ShaderLit);
        const cmpMaterial: f.ComponentMaterial = new f.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(1, 0.4, 0.7, 1);
        node.addComponent(cmpMaterial);

        //Move Camera back
        camera.mtxPivot.translateZ(-5);
        //camera.mtxPivot.rotateY(180);

        //add transform node
        const cpmTransform: f.ComponentTransform = new f.ComponentTransform();
        node.addComponent(cpmTransform);
        //node.mtxLocal.translateX(0);
        console.log(node);

        //create Viewport
        const viewport: f.Viewport = new f.Viewport();
        viewport.initialize("viewport", node, camera, canvas);
        viewport.draw();
        globalViewport = viewport;
        console.log(viewport);

        node.mtxLocal.rotateX(45);
        node.mtxLocal.rotateZ(45);

        f.Loop.start();
        f.Time.game.setScale(0.3);

    }

    function moveCube(): void {
        const frameTimeInMiliSeconds: number = f.Loop.timeFrameGame;
        const frameTimeInSeconds: number = (frameTimeInMiliSeconds / 1000);
        const degrees: number = 360 * frameTimeInSeconds;

        node.mtxLocal.rotateY(degrees);
        //node.mtxLocal.rotateX(degrees);
        globalViewport.draw();

    }
}