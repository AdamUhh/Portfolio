export const closeTab = () => {
    window.opener = null;
    window.open("secret", "_self");
    window.close();
  };