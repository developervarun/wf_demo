import './App.css';
import Header from './components/Header';
import Leftpane from './components/Leftpane';
import Container from './components/Container';

function App() {
  return (
      <div className="bodyWraper">
        <Header />
        <Leftpane />
        <Container />
      </div>
  );
}

export default App;
