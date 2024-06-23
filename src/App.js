import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Stream from './components/Stream';
import CompulsorySubjects from './components/CompulsorySubjects';
import NONABS from './components/NONABS';
import Disclaimer from './components/Disclaimer';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App" style={{border: "11px solid #2471A3", backgroundColor: "rgb(231 242 245)", boxShadow: "2px 2px 2px 2px 000"}}>
      <Navbar/>
      <br/>
      <Form/>
      <br/>
      <Stream/>
      <CompulsorySubjects/>
      <NONABS/>
      <Disclaimer/>
      <Footer/>
    </div>
  );
}

export default App;
