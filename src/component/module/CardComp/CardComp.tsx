import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const CardComp = ({ title, count }: { title: string; count: string }) => {
  return (
    <Card sx={{ width: "200px", height: "130px" }}>
      <CardContent
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          height: "100px",
          justifyContent:"space-between"
        }}
      >
        <Typography variant="h5" component="div">
          {title}
        </Typography>

        <Typography variant="body2">{count}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardComp;
