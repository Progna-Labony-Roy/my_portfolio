import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Header></Header>
    <ContactForm></ContactForm>
    </div>
  );
}

export default App;
