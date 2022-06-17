/** @format */

import { FunctionComponent, useEffect, useState } from 'react';
import { Flex, Text } from 'theme-ui';
import { GetServerSideProps } from 'next';
import { supabase } from '../lib/utils/supabaseClient';

const Heart: FunctionComponent<{
  hearts: number;
}> = ({ hearts }) => {
  const [liked, setLiked] = useState<boolean>();
  const [totalHearts, setHearts] = useState<number>(hearts);

  useEffect(() => setLiked(localStorage.getItem('liked') === 'true'), []);

  const handleClick = async () => {
    localStorage.setItem('liked', `${!liked}`);
    setLiked(!liked);
    let newHearts = !liked ? totalHearts + 1 : totalHearts - 1;
    setHearts(newHearts);
    await supabase.from('hearts').update({ count: newHearts }).eq('id', 1);
  };

  return (
    <>
      <Flex
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={handleClick}
      >
        <svg
          width={32}
          height={32}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill={liked ? '#42FF6B' : ''}
          stroke={'#42FF6B'}
          strokeWidth={2}
        >
          <path d="M17.19 4.155c-1.672-1.534-4.383-1.534-6.055 0L10 5.197 8.864 4.155c-1.672-1.534-4.382-1.534-6.054 0-1.881 1.727-1.881 4.52 0 6.246L10 17l7.19-6.599c1.88-1.726 1.88-4.52 0-6.246z" />
        </svg>
        <Text sx={{ color: 'body', mx: 1, fontSize: '1.5rem' }}>
          {totalHearts}
        </Text>
      </Flex>
    </>
  );
};

export default Heart;
