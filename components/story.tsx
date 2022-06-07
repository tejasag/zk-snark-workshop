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
        It is year 2150, the world is at a crazy level of automation, no one
        needs to work anymore, there is unlimited food, entertainment and all
        mechanical and boring human tasks have been automated. All a human is
        supposed to do is to sit back and enjoy these comforts.
        <br />
        <br />
        But, humans are still depressed, the eternal question of human existence
        still persists! Why are we here? and what are we supposed to do? Given
        this newly available free time more and more humans are getting
        depressed and someone has to solve this.
        <br />
        <br />
        There is a mystic who has appeared from no-where and claims to know a
        place where lies the answer to all these question. Here is what the
        mystic claims:
        <ul>
          <li>
            There is a cave at the end of the world, in that cave lies an elixir
            which has answers to all questions of human existence.
          </li>
          <li>
            The cave is protected by gate which has a number lock on it, you can
            only take one attempt at it.
          </li>

          <li>He provides you with the hash of the number key for the lock.</li>
        </ul>
        Hearing this a crowd has emerged claiming that they know the key to open
        that door. All of them are quoting different prices for providing the
        key. No one of them wants to show the key as they are afraid that you
        might simply use the key and won’t give them the money.
        <br />
        <br />
        You are the smartest scientist and technologist on planet earth, the
        entire human kind if now looking to you for a solution to this problem.
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
        called zk-SNARK which can help solve this! Let’s go?
      </Text>
    </Box>
  );
};

export default Story;
