import React from 'react';
import Color from './components/color/Color'
import ChangeColor from './components/changecolor/ChangeColor'
import Count from './components/count/Count'
import Todos from './components/todos/Todos'

import ColorProvider from './contexts/ColorContext'
import ChangeColorProvider from './contexts/ChangeColorContext'
import CountProvider from './contexts/CountContext'
import TodoProvider from './contexts/TodoContext'

const App = () => {
  return (
    <div>
      <TodoProvider>
        <Todos />
      </TodoProvider>
      
      <hr />

      {/* <ColorProvider >
        <CountProvider>
          <Color/>
          <Count />
        </CountProvider>
      </ColorProvider> */}
      <ColorProvider >
          <Color/>
      </ColorProvider>

      <hr />

      <ChangeColorProvider>
        <ChangeColor />
      </ChangeColorProvider>

      <hr />

      <CountProvider>
        <Count />
      </CountProvider>
    </div>
  );
};

export default App;