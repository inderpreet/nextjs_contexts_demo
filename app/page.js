import Login from "./components/Login";
import Profile from "./components/Profile";
import { AppWrapper } from "./contexts/AppContext";
import UserContextProvider from "./contexts/UserContextProvider";

function Home({ Component, pageProps }) {

  return (
    <UserContextProvider>
          <Login/>
          <Profile/>
    </UserContextProvider>
  );
}

export default Home;