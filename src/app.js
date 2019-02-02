import React from 'react';

import themeMainUI from 'themeMainUI';

import ToDos from 'containers/toDos';

class Application extends React.Component {
  render() {
    return <ToDos />;
  }
}

export default themeMainUI(Application);
