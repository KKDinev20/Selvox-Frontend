export const setSession = (sessionData) => {
    sessionStorage.setItem("sessionData", JSON.stringify(sessionData));
  };
  
  export const getSession = () => {
    const sessionData = sessionStorage.getItem("sessionData");
    return sessionData ? JSON.parse(sessionData) : null;
  };
  
  export const clearSession = () => {
    sessionStorage.removeItem("sessionData");
  };