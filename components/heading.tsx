/** @format */

import { FunctionComponent } from 'react';
import { Box, Heading, Text } from 'theme-ui';

const HeadingComp: FunctionComponent<{
  heading: string;
  subHeading: string;
}> = ({ heading, subHeading }) => {
  return (
    <Box>
      <Heading
        sx={{
          color: 'text',
          fontSize: ['2rem', '2.5rem', '3rem'],
          fontWeight: 'bold',
        }}
      >
        {heading}
      </Heading>
      <Text
        sx={{ color: 'text', fontSize: ['1rem', '1.2rem', '1.2rem'], mt: 2 }}
      >
        {subHeading}
      </Text>
    </Box>
  );
};

export default HeadingComp;
