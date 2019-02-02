import { observable, action } from 'mobx';

import { uniqueId } from 'lodash';

class ToDo {
  id = uniqueId('toDo_');

  @observable title = '';
  @observable finished = false;

  @action.bound
  handleFieldChange(field, value) {
    this[field] = value;
  }
}

export default ToDo;
