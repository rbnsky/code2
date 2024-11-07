"use strict";
var SolarSystem;
(function (SolarSystem) {
    class Body extends SolarSystem.f.Node {
        constructor(_name, _size, _color) {
            super(_name);
            this.dist = 0;
            this.vOrbit = 0;
            this.vRotation = 0;
            this.name = _name;
            this.size = _size;
            const tempMat = new SolarSystem.f.ComponentMaterial(Body.material);
            tempMat.clrPrimary.setCSS(_color);
            this.addComponent(new SolarSystem.f.ComponentMesh(Body.mesh));
            this.addComponent(new SolarSystem.f.ComponentMaterial(Body.material));
            this.addComponent(new SolarSystem.f.ComponentTransform());
        }
        setTransforms(_vOrbit, _vRotation, _distance) {
            this.vOrbit = _vOrbit / 1000 * (Math.PI / 180);
            this.vRotation = _vRotation / 1000 * (Math.PI / 180);
            this.dist = _distance;
        }
    }
    // First static
    Body.mesh = new SolarSystem.f.MeshSphere("Body");
    Body.material = new SolarSystem.f.Material("Body", SolarSystem.f.ShaderLitTextured);
    SolarSystem.Body = Body;
})(SolarSystem || (SolarSystem = {}));
