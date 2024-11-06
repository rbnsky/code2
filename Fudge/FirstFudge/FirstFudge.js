"use strict";
var FirstFudge;
(function (FirstFudge) {
    // Import Arguents from FudgeCore
    var f = FudgeCore;
    console.log(f);
    // Defer, but inside typescript
    window.addEventListener("load", start);
    // Create Nodes
    const node = new f.Node("Node");
    const nodeGround = new f.Node("Ground");
    let Viewport;
    function start() {
        const canvas = document.querySelector("canvas");
        console.log(canvas);
        // Cube ------------------------------------------------------------
        // Create MeshCube
        const mesh = new f.MeshCube("Cube");
        console.log(mesh);
        // Create ComponentMesh
        const cmpMesh = new f.ComponentMesh(mesh);
        node.addComponent(cmpMesh);
        // Create Cube Material
        const material = new f.Material("Material", f.ShaderLit);
        const cmpMaterial = new f.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(1, 0.4, 0.7, 1);
        node.addComponent(cmpMaterial);
        // Add transform node
        const cmpTransform = new f.ComponentTransform();
        node.addComponent(cmpTransform);
        console.log(node);
        // Ground ------------------------------------------------------------
        const meshGround = new f.MeshQuad("Ground");
        const cmpMeshGround = new f.ComponentMesh(meshGround);
        nodeGround.addComponent(cmpMeshGround);
        const mtrGround = new f.Material("Ground", f.ShaderLit);
        const cmpmtrGround = new f.ComponentMaterial(mtrGround);
        cmpmtrGround.clrPrimary.set(0.2, 1, 0.7, 1);
        nodeGround.addComponent(cmpmtrGround);
        // Camera ------------------------------------------------------------
        // Create Camera
        const camera = new f.ComponentCamera();
        console.log(camera);
        // Move Camera
        camera.mtxPivot.translateZ(-15);
        camera.mtxPivot.translateY(10);
        //camera.mtxPivot.rotateY(180);
        // Create Viewport
        const viewport = new f.Viewport();
        viewport.initialize("viewport", node, camera, canvas);
        viewport.draw();
        Viewport = viewport;
        console.log(viewport);
        f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, update);
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
    function update() {
        const tSpeed = 3 / 1; //units per seconds
        const rSpeed = 360 / 3; //degrees per seconds
        const frametimeInMilliSeconds = f.Loop.timeFrameGame;
        const frametimeInSeconds = (frametimeInMilliSeconds / 1000);
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
})(FirstFudge || (FirstFudge = {}));
