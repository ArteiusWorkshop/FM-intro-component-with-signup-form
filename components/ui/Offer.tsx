import { Box, Typography } from "@mui/material";
import React from "react";
import { Form } from "../form";

export const Offer = () => {
  return (
    <Box className="box right">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        className="offer"
        borderRadius="10px"
        sx={{
          backgroundColor: "hsl(248, 32%, 49%)",
          color: "white",
          boxShadow: "0 10px 0 0 rgba(73, 73, 73, 0.37)",
          width: "100%",
          height: { md: "60px", xs: "100px", sm: "100px" },
        }}
      >
        <Typography>
          <span className="offer">Try it free 7 days </span>then $20/mo.
          thereafter
        </Typography>
      </Box>
      <Form />
    </Box>
  );
};
