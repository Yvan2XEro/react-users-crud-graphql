import { BrowserRouter, Routes, Route } from "react-router-dom";
import { pages } from "@/pages";
import Providers from "@/providers";

function App() {
  return (
    <Providers>
      <div className="container my-12 mx-auto">
        <BrowserRouter>
          <Routes>
            {pages.map((page) => (
              <Route key={page.path} {...page} />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
    </Providers>
  );
}

export default App;
