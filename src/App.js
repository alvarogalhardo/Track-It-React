import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import GlobalStyle from "./components/GlobalStyles";
import PrivateRoutes from "./routes/Private.Routes";
import PublicRoutes from "./routes/Public.Routes";

export default function App() {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <GlobalStyle />
      {auth ? <PrivateRoutes /> : <PublicRoutes />}
    </>
  );
}
