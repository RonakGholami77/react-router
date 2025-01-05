import About from "./components/About";
import Article from "./components/Article";
import Home from "./components/Home";
import Main from "./components/Main";
import Links from "./components/Links";
import FrontEnd from "./components/FrontEnd";
import BackEnd from "./components/BackEnd";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  {
    path: "/article/*",
    element: <Article />,
    children: [
      { path: "frontend", element: <FrontEnd /> },
      { path: "backend", element: <BackEnd /> },
    ],
  },
  { path: "/link/:idAction", element: <Links /> },
  { path: "/main", element: <Main /> },
  { path: "*", element: <h1>not found!!</h1> },
];

export default routes;
