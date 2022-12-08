import React, { createContext, useState } from "react";

const SessionContext = createContext("session");

function SessionProvider({ children }) {
  const [session, setSession] = useState(null);
  const [sincronizado, setSincronizado] = useState(null);

  const toExport = {
    sessionUser: session,
    setSessionUser: setSession,
    sincronizado,
    setSincronizado,
  };

  return (
    <SessionContext.Provider value={toExport}>
      {children}
    </SessionContext.Provider>
  );
}
export { SessionContext, SessionProvider };
