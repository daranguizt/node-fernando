import { v4 as uuidV4 } from 'uuid';
import 'colors';

class Task {
  id = '';
  description = '';
  completedOn = '';

  constructor(description) {
    this.id = uuidV4();
    this.description = description;
  }

  completeTask(date = '') {
    this.completedOn = date.green;
  }
}

export class Tasks {
  _taskList = {};

  get list() {
    return Object.values(this._taskList);
  }

  listAllTasksWithStatus() {
    return this.list.map(task => {
      return `${task.description} :: ${task.completedOn ? "Completada".green : "Pendiente".yellow}`;
    }).join('\n');
  }

  listAllTasksIdsAndStatus() {
    return this.list.map(task => {
      const status = `${task.description} :: ${task.completedOn ? "Completada".green : "Pendiente".yellow}`;
      return {
        id: task.id,
        status,
      }
    });
  }

  listCompletedTasks() {
    return this.list
      .filter(task => !!task.completedOn)
      .map(task => `${task.description.green} :: ${task.completedOn.green}`)
      .join('\n');
  }

  listPendingTasks() {
    return this.list
      .filter(task => !!!task.completedOn)
      .map(task => task.description.yellow)
      .join('\n');
  }

  createTask(description = '') {
    const task = new Task(description);
    this._taskList[task.id] = task;
  }

  loadTasksFromArray(tasks = []) {
    tasks.forEach(task => {
      this._taskList[task.id] = task;
    })
  }

  completeTask(key, date) {
    if (this._taskList[key]) {
      this._taskList[key].completedOn = date;
      
    }
  }

  deleteTask(key) {
    if (this._taskList[key]) {
      delete this._taskList[key]
    }

  }

}

export default Task;