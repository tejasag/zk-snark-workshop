/**
 * @format
 * @jsxImportSource theme-ui
 */

import type { NextPage } from 'next';
import { Box, Link, Text } from 'theme-ui';
import { Meta, Layout, Heading, Story, Register } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Meta
        title="ZK-Elixir"
        description="Learn ZK-SNARK in 60 minutes, for complete beginners."
      />
      <Layout>
        <Heading
          heading="ZK-Elixir"
          subHeading="Learn ZK-SNARK in 60 minutes, for complete beginners."
        />

        <Story />
        <Register link="" />
      </Layout>
    </>
  );
};

export default Home;
