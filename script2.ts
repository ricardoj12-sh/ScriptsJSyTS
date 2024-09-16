// Definicion de interfaces y tipos
interface Usuario {
    id: number;
    nombre: string;
    actividades: string[];
}

type Actividad = string;

function obtenerUsuario(): Promise<Usuario> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                nombre: 'Juan',
                actividades: ['correr', 'nadar', 'leer']
            });
        }, 2000); // Simulamos un retraso de 2 segundos para obtener el usuario
    });
}

function obtenerActividades(actividades: Actividad[]): Promise<void> {
    return new Promise((resolve) => {
        actividades.forEach((actividad, index) => {
            setTimeout(() => {
                console.log(`Actividad ${index + 1}: ${actividad}`);
                if (index === actividades.length - 1) {
                    resolve(); // Resolvemos la promesa cuando todas las actividades fueron impresas
                }
            }, (index + 1) * 1000); // Cada actividad se imprime 1 segundo después de la anterior
        });
    });
}

//Logica principal
async function main() {
    try {
        const { nombre, actividades } = await obtenerUsuario(); // Desestructuramos el objeto usuario
        console.log(`Usuario: ${nombre}`);
        
        await obtenerActividades(actividades); // Esperamos a que se impriman todas las actividades
        
        console.log('Todas las actividades fueron impresas.');
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
