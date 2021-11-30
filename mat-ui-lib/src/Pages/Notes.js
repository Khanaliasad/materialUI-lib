import React from "react";
// import Box from '../@mui/material/Box';
import Button from "@mui/material/Button";
// import SendIcon from '@mui/icons-material/Send';

export default function Notes() {
  return (
    <div>
      <Button
        variant="outlined"
        size="large"
        href="http://localhost:3000/create"
        children="goto Create notes"
      />
    </div>
  );
}
