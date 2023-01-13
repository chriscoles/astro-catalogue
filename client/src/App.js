import './App.css';
import Catalog from './components/Catalog';
import Table from "./components/Table";

function App() {
  const url = "http://localhost:8081/catalog/";
  const headers = ["M","NGC","Type","Magnitude","Size","Distance","RA","Dec","Constellation","Season","Name"];
  
  /* return (
    <div>
      <Table url={url} headers={headers}/>
    </div>
  ); */

    return(
      <div>
        <Catalog url={url}/>
      </div>
    );
}

export default App;
