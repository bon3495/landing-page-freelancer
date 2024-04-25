import { styled } from '@mui/material';
import { PropsWithChildren } from 'react';

const Wrapper = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: '0 auto',
  overflowX: 'hidden',
});

const ContainerStyled = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ContainerStyled;
