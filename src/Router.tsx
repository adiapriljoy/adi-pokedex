import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Loading from "./components/Loading";
import NotFoundPage from "./pages/NotFoundPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const PokemonDetailsPage = lazy(() => import("./pages/PokemonDetailsPage"));

export const Router = createBrowserRouter([
  {
    path: "/adi-pokedex",
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "pokemon/:name",
        element: (
          <Suspense fallback={<Loading />}>
            <PokemonDetailsPage />
          </Suspense>
        ),
      },
      {
        path: "404",
        element: <NotFoundPage />,
      },
      {
        path: "*",
        element: <Navigate to="/adi-pokedex/404" replace />,
      },
    ],
  },
]);
