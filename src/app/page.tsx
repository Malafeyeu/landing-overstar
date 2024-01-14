import { LazyLoadComponent } from "../helpers/LazyLoadingComponent";
import Header from "../pages/Header/ui/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className={'app'}>
        <LazyLoadComponent />
      </main>
    </>
  )
}
