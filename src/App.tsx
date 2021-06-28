
import { createContext, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

export const TextContext = createContext({} as any);

function App() {

  const [value, setValue] = useState('Teste');

  return (
    <BrowserRouter>
      <TextContext.Provider value={{value,setValue}}>
        {/* The 'exact' above, if set as true (default) 
        only displays the component when the path is reached  */}
        <Route path="/" exact={true} component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </TextContext.Provider>
    </BrowserRouter>
  );
}

export default App;
