import { useContext } from "react";
import { TokenContext } from "./contexts/TokenContext";
import GlobalStyle from "./components/GlobalStyles";
import PrivateRoutes from "./routes/Private.Routes";
import PublicRoutes from "./routes/Public.Routes";


export default function App() {
  const { token } = useContext(TokenContext);

  return (
    <>
      <GlobalStyle />
      {token ? <PrivateRoutes token={token} /> : <PublicRoutes />}
    </>
  );
}
