import './App.css';
import Table from "./components/Table";

function App() {
  const url = "http://localhost:8081/messier/list";
  const headers = ["M","NGC","Type","Magnitude","Size","Distance","RA","Dec","Constellation","Season","Name"];
  return (
    <div>
      <Table url={url} headers={headers}/>
    </div>
  );
}

export default App;
