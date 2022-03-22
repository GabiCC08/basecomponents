import {
  PlasmicRootProvider,
  PlasmicComponent,
  PlasmicCanvasHost,
} from "@plasmicapp/loader-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { PLASMIC } from "./plasmic-init";
import Homepage from "./components/Homepage";

function App() {
  const rutaServidor = "";
  /* const rutaServidor = "/iis"; */

  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <BrowserRouter>
        <Routes>
          <Route path={rutaServidor + "/"} element={<Homepage />} />
          <Route element={<CatchAllPage />} />
          <Route
            path={rutaServidor + "/plasmic-host"}
            element={<PlasmicCanvasHost />}
          />
        </Routes>
      </BrowserRouter>
    </PlasmicRootProvider>
  );
}

export default App;

export function CatchAllPage() {
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    async function load() {
      const pageData = await PLASMIC.maybeFetchComponentData(
        window.location.pathname
      );
      setPageData(pageData);
      setLoading(false);
    }
    load();
  }, [setPageData]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!pageData) {
    return <div>Not found</div>;
  }
  // The page will already be cached from the `load` call above.
  return <PlasmicComponent component={window.location.pathname} />;
}
