/** @format */

import Head from 'next/head';
import { FunctionComponent } from 'react';

const Meta: FunctionComponent<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
