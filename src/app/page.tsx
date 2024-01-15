import Header from '@/src/pages/Header/ui/Header';
import LazyLoadComponent from '@/src/helpers/LazyLoadingComponent/ui/LazyLoadingComponent';

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
