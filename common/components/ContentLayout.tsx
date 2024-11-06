// React and other libraries
import React, { FC, ReactNode } from 'react';

// third party libraries
import { css } from 'styled-components';

//components
import { Box } from '../../blocks';

type ContentLayoutProps = {
  children: ReactNode;
};

const ContentLayout: FC<ContentLayoutProps> = ({ children }) => {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignSelf="center"
      maxWidth="1100px"
      backgroundColor="surface-transparent"
      width="calc(100% - (var(--spacing-sm) * 2))"
      css={css`
        flex: initial;
        margin: 0 0 auto 0;
      `}
    >
      {children}
    </Box>
  );
};
export { ContentLayout };
