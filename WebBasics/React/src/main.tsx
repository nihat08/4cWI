import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FirebaseApp from "./components/Firebase/App";
/*10 UseState & UseEffect App
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App></App>
  </StrictMode>
)
*/


/*Spider Man Main App*/
const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <FirebaseApp />
    </React.StrictMode>
  );
}




/*
import Page1 from "./components/Router/Page1";
import Page2 from "./components/Router/Page2";
const router = createBrowserRouter([
  { path: "/", element: <Page1 /> },
  { path: "/p2", element: <Page2 /> },
]);

const root = document.getElementById("root"); 
if (root) { 
  ReactDOM.createRoot(root).render(               //Rendern der App
    <React.StrictMode>                            //StrictMode hilft bei der Erkennung von Problemen in der App
      <RouterProvider router={router} />          //RouterProvider stellt den Router zur Verfügung
    </React.StrictMode> 
  );
}
*/

