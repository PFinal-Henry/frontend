import Home from "./Views/home";
import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
function App() {
  function handleCallbackResponse(response) {
    console.log(response);
  }
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "453274049947-qfcof220qp90nce2fpube032vb7uee73.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
  }, []);

  useEffect(() => {
    google.accounts.id.renderButton(document.getElementById("my-signin2"), {
      theme: "outline",
      longtitle: true,
      type: "standard",
      size: "large",
      text: "Sign in with Google",
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
