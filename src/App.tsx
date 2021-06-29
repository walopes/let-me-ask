
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {


  return (
    <BrowserRouter>
      <AuthContextProvider>
        {/* The 'exact' above, if set as true (default) 
        only displays the component when the path is reached  */}
        <Route path="/" exact={true} component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
