import inquirer from 'inquirer';
import 'colors';

const menuOptions = [
  {
    type: 'list',
    name: 'option',
    message: 'Qué desea hacer?',
    choices: [
      {
        value: '1',
        name: `${'1.'.green} Crear Tarea`
      },
      {
        value: '2',
        name: `${'2.'.green} Listar tareas`
      },
      {
        value: '3',
        name: `${'3.'.green} Listar tareas completadas`
      },
      {
        value: '4',
        name: `${'4.'.green} Listar tareas pendientes`
      },
      {
        value: '5',
        name: `${'5.'.green} Completar Tarea`
      },
      {
        value: '6',
        name: `${'6.'.green} Borrar Tarea`
      },
      {
        value: '0',
        name: `${'0.'.green} Salir \n`
      },
    ]
  }
]

export const inquirerMenu = async () => {
  console.log('###############################'.green);
  console.log('Seleccione una opción'.green);
  console.log('###############################'.green);

  const { option } = await inquirer.prompt(menuOptions);
  return option;

}

export const pause = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'ENTER'.green} para continuar\n`,
    }
  ]

  await inquirer.prompt(question);
}

export const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'description',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Please enter a value'
        }
        return true;
      }
    }
  ]

  const { description } = await inquirer.prompt(question);
  return description;
}

export const selectTaskMenu = async (taskList) => {
  const choices = taskList.map(task => ({
    value: task.id,
    name: task.status,
  }))

  choices.push({
    value: '0',
    name: 'salir',
  })

  const questions = [{
    type: 'list',
    name: 'selectedTask',
    message: 'Please select a task to delete',
    choices,
  }]

  const { selectedTask } = await inquirer.prompt(questions);
  return selectedTask;
}

export const confirm = async () => {
  const questions = [{
    type: 'input',
    name: 'option',
    message: 'Confirm (Y/N)',
    validate(value) {
      if (value === 'Y' || value === 'y') {
        return true;
      }

      if (value === 'N' || value === 'n') {
        return true;
      }

      return "Please select a valid option";
    }
  }]

  const { option } = await inquirer.prompt(questions);
  return option;

}