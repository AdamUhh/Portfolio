/**
 * Chrome doesnt allow web app to close tab :C
 * Instead goes to secret page :P
 */
export const closeTab = () => {
    window.opener = null;
    window.open("secret", "_self");
    window.close();
  };