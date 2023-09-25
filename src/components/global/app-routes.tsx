import { ROUTES } from '../../utils/constants';
import { Box } from '@mui/material';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoaderComponent } from '../common/loader/';

const AppRoutes = () => {
  return (
    <Box>
      <Box className="w-[90%] m-auto">
        <Routes>
          {Object.entries(ROUTES).map(([_key, { path, content }]) => (
            <Route
              key={path}
              path={path}
              element={<Suspense fallback={<LoaderComponent />}>{content}</Suspense>}
            />
          ))}
        </Routes>
      </Box>
    </Box>
  );
};

export default AppRoutes;
