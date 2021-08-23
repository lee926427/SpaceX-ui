import {ReactNode} from 'react';
import {routes,RouteProps} from "../store/atoms";
import Navigation from "../components/organisms/Navigations"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useRecoilValue } from 'recoil';
import {FaRocket,FaUsers} from "react-icons/fa";
import classNames from 'classnames';


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
  const links = useRecoilValue<RouteProps[]>(routes)
  const location = useLocation();
  return(
    <footer>
      <nav className="fixed bottom-0 w-full pointer-events-none flex justify-center">
        <Navigation id="navigation" className="flex flex-row px-4 py-2">
          {
            links.map(
              link=>(
                <li key={link.name}  className=" pointer-events-auto">
                  <Link to={link.path}>
                    <div className={classNames(
                      "flex flex-col justify-items-end items-center px-2 text-blueGray-100",
                      {
                        "text-blueGray-100": location.pathname === link.path,
                        "text-blueGray-500": location.pathname !== link.path,
                      }
                    )}>
                      { link.path === "/ROCKET" ?<FaRocket size="2.4em"/>:null}
                      { link.path === "/MEMBER" ?<FaUsers size="2.4em"/>:null}
                      <span className="font-bold text-xs">{link.name}</span>
                    </div>
                  </Link>
                </li>
              )
            )
          }
        </Navigation>
      </nav>
    </footer>
  )
}
function App() {
  const navigationLinks = useRecoilValue<RouteProps[]>(routes)
  return (
    <div className="App h-screen flex flex-col bg-blueGray-900">
        <Template Header={()=><TemplateHeader/>} Footer={()=><TemplateFooter/>}>
        {
          navigationLinks.map(
            link => (<Route path={link.path} component={link.component}></Route>)
          )
        }
        </Template>
    </div>
  );
}

export default App;
