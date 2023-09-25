import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const LoaderComponent: React.FC = () => {
  return (
    <Box className="flex items-center justify-center w-full h-full">
      <CircularProgress />
    </Box>
  );
};

export default LoaderComponent;
