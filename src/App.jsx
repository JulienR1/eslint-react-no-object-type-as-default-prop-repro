import React from "react";

function App() {
  return (
    <>
      <ErrorIsShown />
      <ErrorIsAbsent />
    </>
  );
}

const ErrorIsShown = ({ foo = {} }) => null;
const ErrorIsAbsent = ({ foo = {} }, ref) => null;

export default App;
