/** @format */

import { FunctionComponent, PropsWithChildren } from 'react';
import { Container } from 'theme-ui';

const Layout: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Container
      sx={{
        px: [4, 4, 6],
        py: [4, 4, 5],
        height: ['auto', 'auto', '100vh'],
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </Container>
  );
};

export default Layout;
