import { Link, MenuItem, Select, styled } from '@mui/material';

export const FooterWrapper = styled('footer')`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const FooterContainer = styled('div')`
  width: 100%;
  padding: 250px 16px 50px;

  @media (min-width: 744px) {
    max-width: 664px;
  }
  @media (min-width: 1440px) {
    padding: 120px 0;
    max-width: 811px;
  }
`;

export const FooterHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const FooterSelectStyled = styled(Select)({
  width: '147px',
  height: '26px',
  border: '1px solid #E4E4E7',
  borderRadius: '8px',
  boxShadow: '0px 1px 2px 0px #05050526',
  fontSize: 14,
  padding: 0,
});

export const FooterMenuItemStyled = styled(MenuItem)({
  padding: 0,
});

export const FooterGridStyled = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 68px;
  gap: 40px 0;

  @media (min-width: 744px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0;
  }
`;

export const FooterGridItemHeaderStyled = styled('h4')`
  margin: 0;
  margin-bottom: 24px;
  font-size: 14px;
  color: #44444b;
  font-weight: 600;
`;

export const FooterGridItemTextStyled = styled(Link)`
  color: #8d8c97;
  text-decoration: none;
  font-size: 14px;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const FooterCopyRightStyled = styled('p')`
  font-size: 14px;
  color: #5d5c70;
  font-weight: 500;
  margin: 0;
  text-align: right;
`;

export const FooterSocialsStyled = styled('div')`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: flex-end;
  margin-top: 24px;
`;

export const FooterLineStyled = styled('div')`
  width: 100%;
  height: 1px;
  background-color: #e4e4e7;
  margin: 80px 0;
  position: relative;

  & > p {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    background-color: #fff;
    padding: 4px;
    border: 1px solid #e4e4e7;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    color: #8d8c97;
    line-height: 1.4;
  }
`;

export const FooterLogoListStyled = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;

  .footer-logo-1 {
    width: 215px;
    margin-bottom: 48px;
  }
  .footer-logo-2 {
    margin-bottom: 48px;
  }
  @media (min-width: 744px) {
    justify-content: space-between;
    flex-direction: row;
    gap: 0 40px;

    .footer-logo-1 {
      margin-bottom: 0;
    }
    .footer-logo-2 {
      margin-bottom: 0;
    }
  }
`;

export const FooterGridItemStyled = styled('div')`
  display: flex;
  flex-direction: column;
  & > h4 {
    margin: 0;
    margin-bottom: 24px;
  }
`;

export const CopyRightMobileContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0 0;
  margin-top: 40px;
  & > h4 {
    margin: 0;
    margin-bottom: 24px;
  }
  border-top: 1px solid #e4e4e7;
`;
