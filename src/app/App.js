import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';

//const http = new HttpService();

function App() {

  // constructor(props){
  //   super(props);
  //   http.getProducts();
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to the Swag Shop</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
