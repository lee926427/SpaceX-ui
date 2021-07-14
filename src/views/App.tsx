import {ReactNode,ComponentType} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useRecoilState} from "recoil";
import {user} from "../store/atoms"
import Home from "./Home"

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

function App() {
  const routes:RouteProps[] =  [
    {
      path:'/Home',
      name:'Home',
      component: Home
    }
  ]
  const Header = () => (
  <header className="flex justify-center text-blueGray-100 text-2xl font-bold py-4">
    <div>VEHICLE OVERVIEW</div>
  </header>
  );
  const Footer = () => (
  <footer  className="flex justify-center">
    <div></div>
  </footer>
  );
  return (
    <div className="App h-screen flex flex-col bg-blueGray-900">
      <Template Header={Header} Footer={Footer}>
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
