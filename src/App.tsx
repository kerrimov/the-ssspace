import React from 'react';
import { useRoutes } from 'react-router-dom';
import rootRoutes from './routes/root';

function App() {
  const elements = useRoutes(rootRoutes);
  return (
    <>
      <header>Header</header>
      {elements}
    </>
  );
}

export default App;
