/** @format */

import { FunctionComponent } from 'react';
import { Box, Text } from 'theme-ui';

const Story: FunctionComponent<{}> = () => {
  return (
    <Box
      sx={{
        my: [3, 3, 4],
      }}
    >
      <Text
        sx={{
          color: 'text',
          fontSize: ['1rem', '1.5rem', '1.5rem'],
        }}
      >
        It is year 2150, the world is fully automated, no one needs to work
        anymore, there is unlimited food and entertainment. All a human is
        supposed to do is to sit back and enjoy these comforts.
        <br />
        <br />
        But, humans are depressed, the eternal question of human existence still
        persists! Why are we here? And what is the purpose of my life? These
        questions are driving people mad. Literally.
        <br />
        <br />
        The Artificial General Intelligence program Bramha, wrote the answer to
        life, the universe and everything in Room #42 before disappearing
        forever.
        <br />
        <br />
        Outside the room is a door with a number lock on it with the
        instruction: The contents of this room will self destruct if a wrong key
        is punched. “Hexadecimal hash”: "0xsajhgdhajgdhjasgd".
        <br />
        <br />
        A trillion dollar reward has been put for whoever finds the key.
        Unfortunately, multiple robots and humans are claiming to have the key
        to Room #42 and nobody will reveal their key until they get their
        trillion dollars.
        <br />
        <br />
        You are the smartest technologist on earth, the entire human kind is now
        looking up to you for a solution to this problem.
        <br />
        <br />
        <Box
          sx={{
            border: '1px solid white',
            p: [3],
            borderRadius: [5],
            textAlign: 'center',
          }}
        >
          <b>
            “You have to find if someone has the right key without actually
            seeing their key.”
          </b>
        </Box>
        <br />
        You have recently discovered that a friend of yours knows a technology
        called <Text sx={{ variant: 'text.underline' }}>zk-SNARK</Text> which
        can help solve this! Let’s go?
      </Text>
    </Box>
  );
};

export default Story;
