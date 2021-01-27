import logo from './logo.svg';
import './App.css';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

// улучшаем читабельность
const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

function getGreeting(user)
{
    if (user)
    {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

function App() {
  return (
   /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>*/
      getGreeting(user)

      
  );
}

export default App;
