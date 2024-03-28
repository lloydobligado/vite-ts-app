import { ROUTES } from '@/shared/utils/constants';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoaderComponent } from '@/shared/components/loader';

const AppRoutes = () => {
  return (
    <div className="w-[90%] m-auto">
      <Routes>
        {Object.entries(ROUTES).map(([_key, { path, content }]) => (
          <Route
            key={path}
            path={path}
            element={<Suspense fallback={<LoaderComponent />}>{content}</Suspense>}
          />
        ))}
      </Routes>
    </div>
  );
};

export default AppRoutes;
