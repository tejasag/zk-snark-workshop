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
        It’s the is year 2150, the world is fully automated, no one needs to
        work anymore, there is unlimited food and, entertainment. All a human is
        supposed to do is to sit back and enjoy these comforts.
        <br />
        <br />
        But, humans are depressed, the eternal question of human existence still
        persists! Why are we here? and what are we supposed to do?
        <br />
        <br />
        There is a mystic who has appeared from no-where and claims to know a
        place where lies the answer to all these question. Here is what the
        mystic claims:
        <ul>
          <li>
            There is a cave at the end of the world, in that cave lies an elixir
            which has answers to all questions of human existence. There is a
            cave in the depths of the Himalayas, wherein lies the Eelixir of
            Enlightenment which has answers to all questions of human existence.
          </li>
          <li>
            The cave is protected by a gate which has a number lock on it, you
            can only take one attempt at it.
          </li>
          <li>He provides you with the hash of the number key for the lock.</li>
        </ul>
        Hearing this a crowd has emerged claiming that they know the key to open
        that door. All of them are quoting insanely high prices for providing
        the key. None of them wants to show the key as they are afraid that you
        might simply use the key and won’t give them the money.
        <br />
        <br />
        You are the smartest scientist on planet earth, the entire human kind if
        now looking to you for a solution to this problem.
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
            “You have to find whether a given person has the right key or not
            without actually seeing their key.”
          </b>
        </Box>
        <br />
        You have recently discovered that a friend of your knows a technology
        called <Text sx={{ variant: 'text.underline' }}>zk-SNARK</Text> which
        can help solve this! Let’s go?
      </Text>
    </Box>
  );
};

export default Story;
