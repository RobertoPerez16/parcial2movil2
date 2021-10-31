interface Persona {
    id: string;
    nombre: string;
}

export interface Taller {
    id: string;
    nombre: string;
    hora: string;
    experto: string;
    pacientes?: Array<Persona>;
    cantInscritos: number;
}
