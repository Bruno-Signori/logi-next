import React from 'react';
import {Divider as ChakraDivider, Grid} from '@chakra-ui/core';


const DividerCustom: React.FC = () => {
  return (
    <Grid
      templateColumns="1fr 1fr"
      columnGap={12}
      opacity={0.4}
    >
      <ChakraDivider />
      <ChakraDivider />

    </Grid>
  );
}

export default DividerCustom;