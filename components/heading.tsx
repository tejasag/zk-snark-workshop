/** @format */

import { FunctionComponent } from 'react';
import { Box, Heading, Text } from 'theme-ui';
import { keyframes } from '@emotion/react';

const glow = keyframes`
    0% {
        opacity: 1;
        text-shadow: 3px 3px 7px #42ff6b;
    }

    25% {
        opacity: 0.7;
        text-shadow: 2px 2px 3px #42ff6b;
    }

    50% {
        opacity: 1;
        text-shadow: 3px 3px 7px #42ff6b;
    }

    75% {
        opacity: 0.7;
        text-shadow: 2px 2px 3px #42ff6b;
    }
`;

const HeadingComp: FunctionComponent<{
  heading: string;
  subHeading: string;
}> = ({ heading, subHeading }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Heading
        sx={{
          color: 'text',
          fontSize: ['2rem', '2.5rem', '3rem'],
          fontWeight: 'bold',
          animation: `${glow} 10s backwards infinite`,
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

const SubHeading: FunctionComponent<{ subHeading: string }> = ({
  subHeading,
}) => {
  const subHeadingArr = subHeading.split(',');

  return (
    <Text
      sx={{
        color: 'text',
        fontSize: ['1rem', '1.2rem', '1.2rem'],
        mt: 2,
      }}
    >
      <Text sx={{ variant: 'text.underline' }}>{subHeadingArr[0]},</Text>
      {subHeadingArr[1]}
    </Text>
  );
};

export default HeadingComp;
