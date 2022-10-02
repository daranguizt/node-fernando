import inquirer from 'inquirer';
import 'colors';

const menuOptions = [
  {
    type: 'list',
    name: 'option',
    message: 'Qué desea hacer?',
    choices: [
      {
        value: 1,
        name: `${'1.'.green} Buscar ciudad`
      },
      {
        value: 2,
        name: `${'2.'.green} Historial`
      },
      {
        value: 0,
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

export const selectPlace = async (places, message) => {
  const choices = places.map(place => ({
    value: place.id,
    name: place.name,
  }))

  choices.push({
    value: '0',
    name: 'Salir',
  })

  const questions = [{
    type: 'list',
    name: 'selectedItem',
    message,
    choices,
  }]

  const { selectedItem } = await inquirer.prompt(questions);
  return selectedItem;
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