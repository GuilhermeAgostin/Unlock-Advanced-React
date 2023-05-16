import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Topics } from "../pages/Topics/Topics";
import { Projects } from "../pages/Projects/Projects";
import { RevisingHooks } from "../pages/RevisingHooks/RevisingHooks";
import { CustomHook } from "../pages/CustomHook/CustomHook";
import { ReactContext } from "../pages/ReactContext/ReactContext";
import { ErrorBoundaries } from "../pages/ErrorBoundaries/ErrorBoundaries";
import { MemoizingComponents } from "../pages/MemoizingComponents/MemoizingComponents";
import { MemoizingFunctions } from "../pages/MemoizingFunctions/MemoizingFunctions";
import { SuspenseFallback } from "../components/SuspenseFallback/SuspenseFallback";
const CodeSplittingModules = lazy(() =>
  import("../pages/CodeSplittingModules/CodeSplittingModules")
);
const MemoizingValues = lazy(() =>
  import("../pages/MemoizingValues/MemoizingValues")
);

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/topics" element={<Topics />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route
        path="/topics/revising-use-effect-hook"
        element={<RevisingHooks />}
      />
      <Route
        path="/topics/create-my-own-custom-hook"
        element={<CustomHook />}
      />
      <Route path="/topics/react-context" element={<ReactContext />} />
      <Route path="/topics/error-boundaries" element={<ErrorBoundaries />} />
      <Route
        path="/topics/memoizing-values"
        element={
          <Suspense fallback={<SuspenseFallback></SuspenseFallback>}>
            <MemoizingValues />
          </Suspense>
        }
      />
      <Route
        path="/topics/memoizing-components"
        element={<MemoizingComponents />}
      />
      <Route
        path="/topics/memoizing-functions"
        element={<MemoizingFunctions />}
      />
      <Route
        path="/topics/code-splitting-modules"
        element={
          <Suspense fallback={<SuspenseFallback></SuspenseFallback>}>
            <CodeSplittingModules />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <div style={{ padding: "1rem" }}>
            <p style={{ color: "#fcfcfc" }}>There's nothing here!</p>
          </div>
        }
      />
    </>
  )
);

export default Router;
