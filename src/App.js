import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Game from "./pages/game";
import Welcome from "./pages/Welcome";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      { path: '/', element: <Welcome /> },
      { path: '/game', element: <Game /> }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;