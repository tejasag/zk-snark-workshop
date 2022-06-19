/**
 * @format
 * @jsxImportSource theme-ui
 */
import type { NextPage, GetServerSideProps } from 'next';
import { Box, Link, Text, Flex } from 'theme-ui';
import { Meta, Layout, Heading, Story2, Register, Heart } from '../components';
import { meta, registerLink } from '../lib/data';
import { supabase } from '../lib/utils/supabaseClient';

const Home: NextPage<{ hearts: number }> = ({ hearts }) => {
  return (
    <>
      <Meta {...meta} />
      <Layout>
        <Heading
          heading="ZK-Elixir"
          subHeading="Learn ZK-SNARK in 60 minutes, for complete beginners."
        />

        <Story2 />
        <Flex
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Heart hearts={hearts} />
          <Register link={registerLink} />
          {/* hack :p */}
          <div></div>
        </Flex>
      </Layout>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data, error } = await supabase.from('hearts').select();
  if (error) {
    throw new Error(error.message);
  }
  return {
    props: { hearts: data[0].count },
  };
};
