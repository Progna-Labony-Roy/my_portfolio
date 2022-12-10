import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import ContactForm from './components/ContactForm/ContactForm';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Header></Header>
    <ContactForm></ContactForm>
    <Toaster />
    </div>
  );
}

export default App;
