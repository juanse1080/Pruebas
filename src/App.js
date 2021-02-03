import "./App.css";

import { ThemeProvider } from "@material-ui/core/styles";
// Import local theme
import theme from "./theme";

import TableExmple from "./pages/Tables/TableExample";
import Login from "./pages/Login";
import AppBar from "./components/AppBar";
import RouteWithAuthenticated from "./layouts/RouteWithAuthenticated";
import Calculator from "./pages/Calculator/Calculator";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouteWithAuthenticated navbar={<AppBar />}>
        <Calculator />
      </RouteWithAuthenticated>
    </ThemeProvider>
  );
}

export default App;
