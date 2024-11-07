"use strict";
var SolarSystem;
(function (SolarSystem) {
    class Body extends SolarSystem.f.Node {
        constructor(_name, _size, _color) {
            super(_name);
            this.distance = 0;
            this.vOrbit = 0;
            this.vRotation = 0;
            this.name = _name;
            this.size = _size;
            this.cmpMesh = new SolarSystem.f.ComponentMesh(Body.mesh);
            this.cmpMaterial = new SolarSystem.f.ComponentMaterial(Body.material);
            this.addComponent(new SolarSystem.f.ComponentTransform());
        }
    }
    // Static First
    Body.mesh = new SolarSystem.f.MeshSphere("Body");
    Body.material = new SolarSystem.f.Material("Body", SolarSystem.f.ShaderLit);
    SolarSystem.Body = Body;
    this.vOrbit = _vOrbit / 1000 * (Math.PI / 180);
    this.vRotation = _vRotation / 1000 * (Math.PI / 180);
    this.distance = _Distance;
})(SolarSystem || (SolarSystem = {}));
