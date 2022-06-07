import "../styles/main.scss";
import react, {useEffect, useState} from "react";
import  Router  from "next/router";
import nprogress from "nprogress";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const start = () => nprogress.start();
    const end = () => nprogress.done();

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
