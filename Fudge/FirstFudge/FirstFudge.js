"use strict";
var FirstFudge;
(function (FirstFudge) {
    var f = FudgeCore;
    window.addEventListener("load", start);
    f.loop;
    function start(_event) {
        const canvas = document.querySelector("canvas");
        console.log(canvas);
        // create a node as the scene graph
        const node = new f.Node("Node"); // create a node as the scene graph
        console.log(node);
        // create MeshCube
        const cube = new f.MeshCube("Cube");
        // refer the mesh to the node
        node.addComponent(new f.ComponentMesh(cube));
        // rotate the mesh
        node.getComponent(f.ComponentMesh).mtxPivot.rotate(new f.Vector3(-30, 30, -50));
        console.log(cube);
        // create a material with the default texture for testing (I replaced it with a color)
        //const material = new f.Material("Texture", FudgeCore.ShaderLitTextured);
        // create lit material
        const material = new f.Material("Texture", f.ShaderLit);
        console.log(material);
        //create ComponentMaterial
        const cmpmaterial = new f.ComponentMaterial(material);
        // set ComponentMaterial color (r, g, b, alpha) - all 0-1
        cmpmaterial.clrPrimary.set(1, 0.4, 0.7, 1);
        // refer ComponentMaterial to the node
        node.addComponent(cmpmaterial);
        console.log(cmpmaterial);
        // create a camera
        const camera = new f.ComponentCamera;
        console.log(camera);
        // move the camera
        camera.mtxPivot.translateZ(+5);
        //rotate the camera
        camera.mtxPivot.rotateY(180);
        // create a viewport to manage rendering of the graph to the canvas via the camera
        const viewport = new f.Viewport();
        viewport.initialize("Viewport", node, camera, canvas);
        const cmptransform = new f.ComponentTransform;
        //node.addComponent(componenttransform);
        //node.getComponent(f.ComponentTransform).mtxLocal.rotateY(1);
        node.mtxLocal.rotateY(1);
        // render
        viewport.draw();
    }
})(FirstFudge || (FirstFudge = {}));
