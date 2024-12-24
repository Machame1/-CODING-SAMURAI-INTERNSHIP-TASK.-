import './App.css';
import Weather from './components/currentLocation';


function App() {
  return (
    <>
      <div className="container">
        <Weather />
      </div>
      <div className="footer-info">
        
        
        Developed by
        <a target="_blank" href="https://github.com/Machame1/react-">
        (<u> S.Syam_Babu</u>)
        </a>
        | Done in
        <a target="_blank" href="/">
         ( REACT JS)
        </a>
      </div>
    </>
  );
}

export default App;