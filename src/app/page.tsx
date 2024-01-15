import { LazyLoadComponent } from '@/src/helpers/LazyLoadingComponent';
import Header from '@/src/pages/Header/ui/Header';

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
