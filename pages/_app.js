import "../styles/styles.css";
import Navbar from "../components/navbar";


export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar /> <Component {...pageProps} />
    </div>
  );
}
