import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <img src="public/images/logo.png" className="App-logo" alt="logo"/>
        <ul clas="navUl">
          <li><a href="default.asp">Home</a></li>
          <li><a href="news.asp">News</a></li>
          <li><a href="contact.asp">Contact</a></li>
          <li><a href="about.asp">About</a></li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </nav>
    </div>
  );
}

export default App;
