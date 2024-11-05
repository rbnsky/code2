"use strict";
var FirstFudge;
(function (FirstFudge) {
    var f = FudgeCore;
    console.log(f);
    window.addEventListener("load", start);
    // create node
    const node = new f.Node("Node");
    let globalViewport;
    f.Loop.addEventListener("loopFrame" /* f.EVENT.LOOP_FRAME */, moveCube);
    function start() {
        const canvas = document.querySelector("canvas");
        console.log(canvas);
        //create Cube Mesh
        const mesh = new f.MeshCube("Cube");
        console.log(mesh);
        //create Camera
        const camera = new f.ComponentCamera();
        console.log(camera);
        //create ComponentMesh
        const cmpMesh = new f.ComponentMesh(mesh);
        node.addComponent(cmpMesh);
        //create Material
        const material = new f.Material("Material", f.ShaderLit);
        const cmpMaterial = new f.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(1, 0.4, 0.7, 1);
        node.addComponent(cmpMaterial);
        //Move Camera back
        camera.mtxPivot.translateZ(-5);
        //camera.mtxPivot.rotateY(180);
        //add transform node
        const cpmTransform = new f.ComponentTransform();
        node.addComponent(cpmTransform);
        //node.mtxLocal.translateX(0);
        console.log(node);
        //create Viewport
        const viewport = new f.Viewport();
        viewport.initialize("viewport", node, camera, canvas);
        viewport.draw();
        globalViewport = viewport;
        console.log(viewport);
        node.mtxLocal.rotateX(45);
        node.mtxLocal.rotateZ(45);
        f.Loop.start();
        f.Time.game.setScale(0.3);
    }
    function moveCube() {
        const frameTimeInMiliSeconds = f.Loop.timeFrameGame;
        const frameTimeInSeconds = (frameTimeInMiliSeconds / 1000);
        const degrees = 360 * frameTimeInSeconds;
        node.mtxLocal.rotateY(degrees);
        //node.mtxLocal.rotateX(degrees);
        globalViewport.draw();
    }
})(FirstFudge || (FirstFudge = {}));
