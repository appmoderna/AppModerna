import React from "react";
import App from "./App";
import { SessionProvider } from "./app/context/SessionProvider";

export default function AppWrapper() {
  return (
    <SessionProvider>
      <App />
    </SessionProvider>
  );
}
