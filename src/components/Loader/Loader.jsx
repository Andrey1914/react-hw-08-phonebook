import { Oval } from 'react-loader-spinner';
import { Box } from '@mui/material';

export default function Loader() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      pt="100px"
      position="absolute"
      top="50%"
      left="50%"
    >
      <Oval
        height={80}
        width={80}
        color="var(--loader-color)"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="var(--loader-secondary-color)"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Box>
  );
}
