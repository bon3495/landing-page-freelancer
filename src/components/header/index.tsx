import Link from '@mui/material/Link';
import HeaderStyled, {
  HeaderButtonStyled,
  HeaderContainerStyled,
  HeaderLoginWrapperStyled,
  HeaderNavbarItemStyled,
  HeaderNavbarStyled,
  MenuButtonMobile,
} from './styles';
import LogoIcon from '../icons/LogoIcon';
import { HEADER_NAVBAR_LIST } from '../../constants/global';
import MenuIcon from '../icons/MenuIcon';

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainerStyled>
        <Link href="/" style={{ display: 'flex' }}>
          <LogoIcon />
        </Link>
        <HeaderNavbarStyled>
          {HEADER_NAVBAR_LIST.map((item) => {
            return (
              <HeaderNavbarItemStyled key={item.id}>
                <Link href={item.path}>{item.label}</Link>
              </HeaderNavbarItemStyled>
            );
          })}
        </HeaderNavbarStyled>

        <HeaderLoginWrapperStyled>
          <HeaderButtonStyled>Log in</HeaderButtonStyled>
          <HeaderButtonStyled className="header-button-primary">
            Try for free
          </HeaderButtonStyled>
        </HeaderLoginWrapperStyled>

        <MenuButtonMobile>
          <MenuIcon />
        </MenuButtonMobile>
      </HeaderContainerStyled>
    </HeaderStyled>
  );
};

export default Header;
