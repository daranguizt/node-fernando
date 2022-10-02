import { inquirerMenu, readInput, pause, selectTaskMenu, confirm } from './helpers/inquirer.js';
import { readDB, saveDB } from './helpers/file-handler.js';
import { Tasks } from './models/task.js';

console.clear();

const main = async () => {

  let selectedOption;
  const previousTasks = readDB();

  const tasks = new Tasks();

  if (previousTasks) {
    tasks.loadTasksFromArray(previousTasks);
  }

  do {
    selectedOption = await inquirerMenu();

    switch (selectedOption) {
      case '1': {
        // Create Task
        const description = await readInput('Please enter a description: \n');
        tasks.createTask(description);
        await pause();
        break;
      }
      case '2': {
        // List Tasks
        console.log(tasks.listAllTasksWithStatus());
        break;
      }
      case '3': {
        // List completed tasks
        console.log(tasks.listCompletedTasks());
        break;
      }
      case '4': {
        // List pending tasks
        console.log(tasks.listPendingTasks());
        break;
      }
      case '5': {
        // Complete task
        const taskList = tasks.listAllTasksIdsAndStatus();
        const selectedTask = await selectTaskMenu(taskList);
        if (selectedTask !== '0') {
          const shouldComplete = await confirm();
          if (shouldComplete.toUpperCase() === 'Y') {
            await tasks.completeTask(
              selectedTask,
              new Date().toLocaleString('cl', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })
            );
          }
        }
        break;
      }
      case '6': {
        // Delete task
        const taskList = tasks.listAllTasksIdsAndStatus();
        const selectedTask = await selectTaskMenu(taskList);
        if (selectedTask !== '0') {
          const shouldDelete = await confirm();
          if (shouldDelete.toUpperCase() === 'Y') {
            await tasks.deleteTask(selectedTask);
          }
        }
        break;
      }
    }
  } while (selectedOption !== '0');

  saveDB(tasks.list);

}

main();