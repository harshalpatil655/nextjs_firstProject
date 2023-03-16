import MainLayout from "@/src/components/layout/main-layout";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout style={{ display: "flex" }}>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
