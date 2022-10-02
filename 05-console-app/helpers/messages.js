import 'colors';
import readline from 'readline';

export const showMenu = () => {

  return new Promise((resolve) => {
    console.clear();
    console.log('###############################'.green);
    console.log('Seleccione una opción'.green);
    console.log('###############################'.green);
    console.log('\n');
    console.log(`${'1.'.green} Crear Tarea`);
    console.log(`${'2.'.green} Listar tareas`);
    console.log(`${'3.'.green} Listar tareas completadas`);
    console.log(`${'4.'.green} Listar tareas pendientes`);
    console.log(`${'5.'.green} Completar Tarea`);
    console.log(`${'6.'.green} Borrar Tarea`);
    console.log(`${'0.'.green} Salir \n`);
  
    const read = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    read.question('Seleccione una opción: ', (option) => {
      read.close();
      resolve(option);
    })
  })
}

export const pause = () => {
  return new Promise((resolve) => {
    const read = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    read.question(`Presione ${'ENTER'.green} para continuar\n`, (option) => {
      read.close();
      resolve();
    });
  })
}

