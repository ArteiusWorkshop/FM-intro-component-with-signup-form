import { Box, Typography } from "@mui/material";
export const Title = () => {
  return (
    <Box className="box left" color="white" flexDirection="column">
      <Box
        padding="40px"
        sx={{ textAlign: { xs: "center", sm: "center", md: "start" } }}
      >
        <Typography variant="h3" fontWeight="700">
          Learn to code by watching others
        </Typography>
        <Typography variant="body1" fontWeight="500" paddingTop="30px">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </Typography>
      </Box>
    </Box>
  );
};
