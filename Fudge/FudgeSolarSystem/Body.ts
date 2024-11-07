namespace SolarSystem {
    export class Body extends f.Node {

        // First static
        private static mesh: f.Mesh = new f.MeshSphere("Body");
        private static material: f.Material = new f.Material("Body", f.ShaderLit);

        // Then public
        //public pos: f.Vector3;

        // Then private
        private size: number;
        private dist: number = 0;
        private vOrbit: number = 0;
        private vRotation: number = 0;

        public constructor(_name: string, _size: number, _color: string) {
            super(_name);
            this.name = _name;
            this.size = _size;
            this.rotationNode = new f.Node(_name + "Rotation Node");


            const tempMat: f.ComponentMaterial = new f.ComponentMaterial(Body.material)
            tempMat.clrPrimary.setCSS(_color)

            this.addComponent(new f.ComponentMesh(Body.mesh));
            this.addComponent(new f.ComponentMaterial(Body.material));
            this.addComponent(new f.ComponentTransform());
            this.mtxLocal.translateX(_distance);
        }

        public setTransforms(_vOrbit: number, _vRotation: number, _distance: number) {
            this.vOrbit = _vOrbit / 1000 * (Math.PI / 180);
            this.vRotation = _vRotation / 1000 * (Math.PI / 180);
            this.dist = _distance;
        }
    }
}