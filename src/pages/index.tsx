import EditPage from "./EditPage";
import HomePage from "./HomePage";

const pages = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:id",
    element: <EditPage />,
  },
];

export { pages };
