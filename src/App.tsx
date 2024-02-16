import { Button } from "./components/Button";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";

export default function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <h1>hello world!</h1>
        <Button variant="primary" />
        <Button variant="secondary" />
        <Button variant="danger" />
        <Button variant="success" />

        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}
