namespace SolarSystem {
    export class Body extends f.Node {

        // Static First
        private static mesh: f.Mesh = new f.MeshSphere("Body");
        private static material: f.Material = new f.Material("Body", f.ShaderLit)

        // Then Public
        //public position: f.Vector3;
        //public name: string;

        // Then Private
        private size: number;
        private distance: number = 0;
        private vOrbit: number = 0;
        private vRotation: number = 0;
        private cmpMesh: f.ComponentMesh;
        private cmpMaterial: f.ComponentMaterial;
        private cmpTransform: f.ComponentTransform;

        public constructor(_name: string, _size: number, _color: string) {
            super(_name);
            this.name = _name;
            this.size = _size;

            this.cmpMesh = new f.ComponentMesh(Body.mesh);
            this.cmpMaterial = new f.ComponentMaterial(Body.material);
            this.addComponent(new f.ComponentTransform());
        }

        public setTransforms(_vOrbit: number, _vRotation: number, _distance: number);
    this.vOrbit = _vOrbit / 1000 * (Math.PI / 180);
    this.vRotation = _vRotation / 1000 * (Math.PI / 180);
    this.distance = _distance;
}
    }
}

