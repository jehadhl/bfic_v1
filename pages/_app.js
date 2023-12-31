import "@/scss/globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar /> <Component {...pageProps} /> <Footer />
    </>
  );
}
