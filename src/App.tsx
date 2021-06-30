
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';

import { AuthContextProvider } from './contexts/AuthContext';

function App() {


  return (
    <BrowserRouter>
      <AuthContextProvider>
        {/* The Switch tag will enter on the first path that applies */}
        <Switch>
          {/* The 'exact' above, if set as true (default) 
          only displays the component when the path is reached  */}
          <Route path="/" exact={true} component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
