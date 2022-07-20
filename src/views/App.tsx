import { ReactNode } from "react";
import { routes, RouteProps } from "../store/atoms";
import Navigation from "../components/organisms/Navigations";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useLocation,
} from "react-router-dom";
import { useRecoilValue } from "recoil";
import { FaRocket, FaUsers } from "react-icons/fa";
import clsx from "clsx";
import Rocket from "./Rocket";
import Member from "./Member";

interface TemplateProps {
    Header?: Function;
    Footer?: Function;
    children: ReactNode;
}

function Template({ Header, Footer, children }: TemplateProps) {
    return (
        <Router>
            {Header !== undefined ? Header() : null}
            <main className="flex-1">{children}</main>
            {Footer !== undefined ? Footer() : null}
        </Router>
    );
}
function TemplateHeader() {
    return (
        <header className="flex justify-center text-blueGray-100 text-2xl font-bold py-4">
            <div>VEHICLE OVERVIEW</div>
        </header>
    );
}

function TemplateFooter() {
    const links = useRecoilValue<RouteProps[]>(routes);
    const location = useLocation();
    return (
        <footer>
            <nav className="fixed bottom-0 w-full pointer-events-none flex justify-center">
                <Navigation
                    id="navigation"
                    className="flex flex-row px-4 py-2 bg-slate-800 rounded-t-md shadow-md"
                >
                    {links.map((link) => (
                        <li key={link.name} className=" pointer-events-auto">
                            <Link to={link.path}>
                                <div
                                    className={clsx(
                                        "flex flex-col justify-items-end items-center px-2 text-blueGray-100",
                                        {
                                            "text-blueGray-100":
                                                location.pathname === link.path,
                                            "text-blueGray-500":
                                                location.pathname !== link.path,
                                        }
                                    )}
                                >
                                    {link.path === "/" ? (
                                        <FaRocket size="2.4em" />
                                    ) : null}
                                    {link.path === "/MEMBER" ? (
                                        <FaUsers size="2.4em" />
                                    ) : null}
                                    <span className="font-bold text-xs">
                                        {link.name}
                                    </span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </Navigation>
            </nav>
        </footer>
    );
}

function App() {
    return (
        <div className="App h-screen flex flex-col bg-slate-900 text-white">
            <Template
                Header={() => <TemplateHeader />}
                Footer={() => <TemplateFooter />}
            >
                <Routes>
                    <Route path="/" element={<Rocket />} />
                    <Route path="/MEMBER" element={<Member />} />
                </Routes>
            </Template>
        </div>
    );
}

export default App;
