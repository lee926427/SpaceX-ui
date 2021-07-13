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
      <main>
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
  <header>
    <div>header</div>
  </header>
  );
  const Footer = () => (
  <footer>
    <div>footer</div>
  </footer>
  );
  return (
    <div className="App">
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
