import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import { PropsWithChildren } from 'react';
import { COLORS } from '../../constants/global';

const Wrapper = styled('header')`
  display: flex;
  align-items: center;
  height: 76px;
  border-bottom: 1px solid #f7f7f8;
  justify-content: center;
`;

const HeaderStyled = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export default HeaderStyled;

export const HeaderContainerStyled = styled('nav')`
  display: flex;
  align-items: center;
  padding: 20px 16px;
  max-width: 1440px;
  width: 100%;
  justify-content: space-between;
  @media (min-width: 744px) {
    padding: 20px 40px;
  }
  @media (min-width: 1440px) {
    padding: 0 120px;
  }
`;

export const MenuButtonMobile = styled(Button)`
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 2px 0px #05050526;
  border: 1px solid #e4e4e7;
  min-width: 34px;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  padding: 0;
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const HeaderNavbarStyled = styled('ul')`
  align-items: center;
  list-style: none;
  padding: 0;
  gap: 0 24px;
  display: none;
  @media (min-width: 1440px) {
    display: flex;
  }
`;

export const HeaderNavbarItemStyled = styled('li')({
  fontSize: 14,
  color: COLORS.TEXT,
  letterSpacing: '-5%',
  display: 'flex',

  '&>a': {
    color: 'inherit',
    textDecoration: 'none',
    fontWeight: 500,
  },
});

export const HeaderLoginWrapperStyled = styled('div')`
  display: none;
  align-items: center;
  gap: 0 8px;
  @media (min-width: 1440px) {
    display: flex;
  }
`;

export const HeaderButtonStyled = styled(Button)({
  boxShadow: '0px 1px 2px 0px #05050526;',
  fontSize: 14,
  color: COLORS.TEXT,
  letterSpacing: '-5%',
  borderRadius: 10,

  '&.header-button-primary': {
    backgroundImage:
      'linear-gradient(0deg, #6F58FF, #6F58FF), linear-gradient(180deg, rgba(5, 5, 5, 0) 0%, rgba(5, 5, 5, 0.3) 100%);',
    color: COLORS.WHITE,
    border: '1px solid #6F58FF',
    boxShadow: '0px 1px 2px 0px #6C56F04D;',
  },
});
