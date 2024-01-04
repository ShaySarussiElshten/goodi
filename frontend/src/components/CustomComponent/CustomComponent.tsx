import React from 'react';
import { useTheme } from '@mui/material/styles';

const CustomComponent = () => {
  const theme = useTheme();

  const customStyle = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    cursor: 'pointer',
  };

  return <div style={customStyle}>Custom Component with Background Color</div>;
};

export default CustomComponent;