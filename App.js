import { ThemeProvider } from "./src/ThemeProvider";

import CustomNavigation from "./src/Navigation";


function App() {
  return (
    <ThemeProvider>
      <CustomNavigation />
    </ThemeProvider>
  );
}

export default App;