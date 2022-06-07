/** @format */

import { FunctionComponent } from 'react';
import { Box, Link, Text } from 'theme-ui';

const Register: FunctionComponent<{ link: string }> = ({ link }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        my: [3, 3, 0],
      }}
    >
      <Link href={link} target="_blank">
        <Text
          sx={{
            textShadow: 'none',
            boxShadow: '3px 3px 7px #42ff6b',
            borderRadius: '4px',
            p: [2, 2, 2],
            fontSize: ['1rem', '1.5rem', '1.5rem'],
            borderColor: 'text',
            borderStyle: 'solid',
            borderWidth: '5px',
            height: 'inherit',
          }}
        >
          Register Now
        </Text>
      </Link>
    </Box>
  );
};

export default Register;
