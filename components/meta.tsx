/** @format */

import Head from 'next/head';
import { FunctionComponent } from 'react';

const Meta: FunctionComponent<{
  title: string;
  description: string;
  imgLink: string;
  keywords: string;
}> = ({ title, description, imgLink, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />

      <meta name="description" content={description} />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={title} />

      <meta property="og:type" content="website" />

      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgLink} />
    </Head>
  );
};

export default Meta;
