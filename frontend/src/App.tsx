import { Home } from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UseAuth } from './UseAuth';
import { Footer } from "./Components/Footer";

function App() {
  const isLogin = UseAuth();

  return (
    <div className="App">
    
      {isLogin ? <Home/> : <p> "..login First"</p>}
      <Footer/>

    </div>
  );
}

export default App;
