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
      <SubHeading subHeading={subHeading} />
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
      <Text
        sx={{
          textDecoration: 'underline',
          textDecorationStyle: 'wavy',
          textDecorationColor: 'yellow',
          textUnderlineOffset: [5],
        }}
      >
        {subHeadingArr[0]},
      </Text>
      {subHeadingArr[1]}
    </Text>
  );
};

export default HeadingComp;
