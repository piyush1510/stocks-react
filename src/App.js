import './App.css';
import Chart from './components/Chart'
import SideNav from './components/SideNav'

function App() {
  return (
    <div className="App">
      <header>
        <h2>
          Piyush <span>Verma</span>
        </h2>
      </header>
      <div className="screen">
      <SideNav />
        <Chart />
        
      </div>
    </div>
  );
}

export default App;
