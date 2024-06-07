import FormAddTask from "./components/FormAddTask";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { fakeAuthProvider } from "./Auth";

function App() {
  const protectedLoader = () => {
    if (!fakeAuthProvider.isAuthenticated) {
      return redirect("/home");
    }
    return null;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        { path: "/home", element: <HomePage /> },
        { path: "todo", element: <FormAddTask />, loader: protectedLoader },
      ],
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
