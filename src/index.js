import React from 'react';
import { render } from 'react-dom';
import Application from 'app';

// MobX Store Providers
import { Provider } from 'mobx-react';

import toDos from './stores/toDos';

const stores = {
  toDos
};

render(
  <Provider {...stores}>
    <Application />
  </Provider>,
  document.getElementById('root')
);

// registerServiceWorker();
