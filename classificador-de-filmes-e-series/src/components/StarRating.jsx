import { useState, useEffect } from "react"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import React from 'react';


export default function StarRating({ value, setRating }) {

  return (
    <Stack spacing={1}>
      <Rating 
        name="half-rating" 
        value={value}
        onChange={(event, newValue) => {
          setRating(newValue)
        }}
        precision={0.5} 
        size="large" 
      /> 
    </Stack>
  );
}