import {ReactNode,ComponentType} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import System from "./System"
import Cabin from "./Cabin"
interface RouteProps{
  path: string
  name: string
  component: ComponentType
  meta?: {
    [any: string]: any
  }
}

interface TemplateProps{
  Header?: Function
  Footer?: Function
  children: ReactNode
}


function Template({Header,Footer,children}:TemplateProps){
  return(
    <Router>
      {Header !== undefined ? Header() : null}
      <main className="flex-1">
        <Switch>
          {children}
        </Switch>
      </main>
      {Footer !== undefined ? Footer() : null}
    </Router>
  )
}
function TemplateHeader(){
  return(
    <header className="flex justify-center text-blueGray-100 text-2xl font-bold py-4">
      <div>VEHICLE OVERVIEW</div>
    </header>
  )
}
function TemplateFooter(){
  return(
    <footer>

    </footer>
  )
}
function App() {
  const routes:RouteProps[] =  [
    {
      path:'/SYSTEM',
      name:'SYSTEM',
      component: System
    },{
      path:'/CABIN',
      name:'CABIN',
      component: Cabin
    }
  ]
  return (
    <div className="App h-screen flex flex-col bg-blueGray-900">
      <Template Header={TemplateHeader} Footer={TemplateFooter}>
      {
        routes.map(
          route => (<Route path={route.path} component={route.component}></Route>)
        )
      }
      </Template>
    </div>
  );
}

export default App;
