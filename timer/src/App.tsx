import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "./styles/default";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="danger" />
    </ThemeProvider>
  );
};
