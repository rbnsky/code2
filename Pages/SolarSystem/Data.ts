namespace Solarsystem {
    interface Data {
        name: string
        radius: number;
        color: string;
        speed: number;
        orbitradius: number;
        description: string;
        position: Vector;
        children: Data[];
    }

    export const data: Data = {
        name: "Sun",
        radius: 30,
        color: "yellow",
        speed: 0,
        description: "This is the Sun.",
        position: 1,
        orbitradius: 1,
        children: [{
            name: "Earth",
            sradius: 10,
            color: "blue",
            speed: 10,
            description: "This is the Earth.",
            position: 1,
            orbitradius: 1,
            children: [{
                name: "Moon",
                sradius: 10,
                color: "gery",
                speed: 10,
                description: "This is the Moon.",
                position: 1,
                orbitradius: 1,
                children: []
            }]
        }]
    }
