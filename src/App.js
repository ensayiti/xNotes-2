import React, { useState } from "react";
import { Container } from "@mui/material";
import { containerStyle } from "./theme/customStyles";
import ToDo from "./pages/ToDo";

const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    !loading && (
      <>
        <Container sx={containerStyle}>
          <ToDo />
        </Container>
      </>
    )
  );
};

export default App;