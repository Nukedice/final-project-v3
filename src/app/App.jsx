import './global/styles/global.module.css'
import { RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import { TokenProvider } from "./global/provider/tokenProvider/"
import { router } from "./global/provider/Router/Routes";

function App() {
  return (
    <TokenProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </TokenProvider>
  );
}
export default App;