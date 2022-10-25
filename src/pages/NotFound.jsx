import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const NotFound = () => {
  // const history = useHistory();
  // console.log(history);
  // const usePrevLocation = (location) => {
  //   const prevLocRef = useRef(location);

  //   useEffect(() => {
  //     prevLocRef.current = location;
  //   }, [location]);

  //   return prevLocRef.current;
  // };
  // const location = useLocation();
  // const prevLocation = location;
  // console.log(navigate, location);
  // const
  return (
    <Box>
      <Box>
        <Typography>Page not found</Typography>
        <Button onClick={() => window.history.back()}>Back</Button>
        {/* <Box>PREV:{prevLocation}</Box>
        <Box>LOC:{location}</Box> */}
      </Box>
    </Box>
  );
};

export default NotFound;
// import { useLocation } from "react-router-dom";
// import { useEffect, useRef } from "react";
// import { Box } from "@mui/system";

// //THIS IS THE CUSTOM HOOK
// const usePrevLocation = (location) => {
//   const prevLocRef = useRef(location);

//   useEffect(() => {
//     prevLocRef.current = location;
//   }, [location]);

//   return prevLocRef.current;
// };

// //THIS IS HOW YOU USE IT

// const NotFound = () => {
//   const location = useLocation();
//   const prevLocation = usePrevLocation(location);

//   return (
//     <>
//       <Box>PREV:{prevLocation}</Box>
//       <Box>LOC:{location}</Box>
//     </>
//   );
// };
// export default NotFound;
