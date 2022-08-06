import { Box, Button, Typography } from "@mui/material";
import type { NextPage } from "next";

import { BaseLayout } from "../components/layout";
import { Offer, Title } from "../components/ui";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Box className="container" display="flex">
        <Box
          display="flex"
          sx={{ flexDirection: { xs: "column", sm: "column", md: "row" } }}
        >
          <Title />
          <Offer />
        </Box>
      </Box>
    </BaseLayout>
  );
};
export default Home;
