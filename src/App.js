import React, { useReducer } from "react";
import { BoxScreen } from "./components/BoxScreen";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import CssBaseline from "@mui/material/CssBaseline";

import { GlobalContext } from "./global/globalContext";
import { globalReducer } from "./global/globalReducer";
const init = () => {
  return {
    price: "",
  };
};
function App() {
  const [datos, dispatch] = useReducer(globalReducer, {}, init);
  return (
    <GlobalContext.Provider value={{ datos, dispatch }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <BoxScreen />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
