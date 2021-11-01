
import './App.css';
import Navbar from './Component/navbar';
import InfoSection from './Component/InfoSection'
import Service from './Component/Service';
import Work from './Component/Work';
import Reveiw from './Component/Reveiw';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <InfoSection/>
      <br/>
      <br/>
      <br/>
      <Service/>
      <br/>
      <br/>
      <br/>
      <Work/>
      <br/>
      <br/>
      <br/>
      <Reveiw/>
      <br/>
      <br/>
      <br/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
