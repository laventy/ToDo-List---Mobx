import { action, observable, computed } from 'mobx';

import ToDo from 'domain/toDo';

class ToDos {
  @observable toDos = [];

  @computed get finishedToDosNum() {
    return this.toDos.filter(toDo => toDo.finished).length;
  }

  @action.bound
  addToDo() {
    this.toDos.push(new ToDo());
  }
}

export default new ToDos();
