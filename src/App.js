import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home";
import NotFound from "./components/NotFound";
import ML from "./MachineLearning/ML";
import Python from "./MachineLearning/Python";
import Supervised from "./MachineLearning/SupervisedML/Supervised";
import Unsupervised from "./MachineLearning/UnsupervisedML/Unsupervised";
import RootLayout from "./RootLayout";
import BackEndLayout from "./WebDev/BackEndLayout";
import FrameWorks from "./WebDev/FrameWorks";
import FrontEndLayout from "./WebDev/FrontEndLayout";
import Projects from "./WebDev/Projects";
import Roadmaps from "./WebDev/Roadmaps";
import WebDev from "./WebDev/WebDev";
import Website from "./WebDev/Websites";
let route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="webdev" element={<WebDev />}>
        <Route path="roadmaps" element={<Roadmaps />}></Route>
        <Route path="frontend" element={<FrontEndLayout />}></Route>
        <Route path="frameworks" element={<FrameWorks />}></Route>
        <Route path="backend" element={<BackEndLayout />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="websites" element={<Website />}></Route>
      </Route>
      <Route path="ml" element={<ML />}>
        <Route path="python" element={<Python />}></Route>
        <Route path="supervised" element={<Supervised />}></Route>
        <Route path="unsupervised" element={<Unsupervised />} />
      </Route>

      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);

function App() {
  document.title = "LearnCode-Learn For Fun";

  return <RouterProvider router={route} />;
}

export default App;
