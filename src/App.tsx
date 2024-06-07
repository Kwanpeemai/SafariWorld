import FormAddTask from "./components/FormAddTask";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
          {path: '/home', element: <HomePage/>},
          {path: 'todo', element: <FormAddTask/>},
      ]

    },
  ]);
  {
    return (
      <RouterProvider router={router} />
      // document.getElementById('')
    );
  }
}

export default App;
