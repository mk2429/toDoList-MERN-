import { Home } from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseAuth } from './UseAuth';

function App() {
  const isLogin = UseAuth();

  return (
    <div className="App">
    
      {isLogin ? <Home/> : <p> "..login First"</p>}
    </div>
  );
}

export default App;
