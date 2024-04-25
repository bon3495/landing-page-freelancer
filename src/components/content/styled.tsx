import { styled } from '@mui/material';

export const ContentWrapperStyled = styled('main')({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  flexDirection: 'column',
});

export const ContentContainerStyled = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 0 16px;
  @media (min-width: 744px) {
    padding: 0 40px;
  }
  @media (min-width: 1440px) {
    padding: 0;
    max-width: 897px;
  }
`;
