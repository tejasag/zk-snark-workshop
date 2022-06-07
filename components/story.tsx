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
        In a world of chaos and war, scientists have discovered a hidden cave
        which has its entrace closed with boulders heavier than we have ever
        seen. Archeologists have found rocks outside the cave with carvings in
        pre-historic glyphs claiming the cave contains a hidden "Elixir" which
        has answers to everything humans can ever ask. Discoveries prove that
        the only way to open the cave is by a number. The good news here is,
        they have also discovered an encrypted irreversible hash of the number,
        but the bad news is that we only have 1 shot at entering the number
        before the cave closes forever. The government has put a bounty of 30
        million dollars to whoever finds the number first and a lot of people
        are now apparently claiming that they know the number.
        <br />
        <br />
        Agent 3.14, you are one of the best detectives this country has ever
        had. You have to find a way to verify who has the correct number because
        they want the money before they give you the number.
      </Text>
    </Box>
  );
};

export default Story;
