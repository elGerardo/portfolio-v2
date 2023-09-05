import RootLayout from "../../components/layout";
import "../global.css";
import "../utils.css";

const App = ({ Component, pageProps }) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default App;
