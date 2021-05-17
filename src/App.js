import { Route, Switch } from 'react-router';
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
      <Switch>
      <Route exact path="/" children={()=><Chart id="IBM"  key="IBM"/>}/>
      <Route path="/:id" children={(props)=><Chart {...props} key={props.match.params.id}/>}/>
      </Switch>
      </div>
    </div>
  );
}

export default App;
