import { lazy, Suspense } from 'react';
import Loader from './layouts/Loader';

const Header = lazy(() => import('./layouts/Header'));
const MainContent = lazy(() => import('./layouts/MainContent/MainContent'));

export default function App() {
  return (
    <div className="p-4 md:p-6 lg:p-8 pt-2 md:pt-2 lg:pt-2">
      <Suspense>
        <Header />
        <MainContent />
      </Suspense>
      <Loader />
    </div>
  )
}
