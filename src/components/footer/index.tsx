import { SelectChangeEvent, Link, useMediaQuery } from '@mui/material';
import {
  CopyRightMobileContainer,
  FooterContainer,
  FooterCopyRightStyled,
  FooterGridItemHeaderStyled,
  FooterGridItemStyled,
  FooterGridItemTextStyled,
  FooterGridStyled,
  FooterHeader,
  FooterLineStyled,
  FooterLogoListStyled,
  FooterMenuItemStyled,
  FooterSelectStyled,
  FooterSocialsStyled,
  FooterWrapper,
} from './styled';
import { useState } from 'react';
import LogoIcon from '../icons/LogoIcon';
import { FOOTER_LIST } from '../../constants/global';
import LinkedInIcon from '../icons/LinkedInIcon';
import YoutubeIcon from '../icons/YoutubeIcon';
import TikTokIcon from '../icons/TikTokIcon';
import TwitterIcon from '../icons/TwitterIcon';

const Footer = () => {
  const matchesDesktop = useMediaQuery('(min-width:744px)');

  const [language, setLanguage] = useState('english');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setLanguage(event.target.value as string);
  };
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterHeader>
          <Link href="/" style={{ display: 'flex' }}>
            <LogoIcon />
          </Link>

          <FooterSelectStyled
            value={language}
            onChange={handleChange}
            label="Language"
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <FooterMenuItemStyled value="english">English</FooterMenuItemStyled>
          </FooterSelectStyled>
        </FooterHeader>

        <FooterGridStyled>
          <FooterGridItemStyled>
            <FooterGridItemHeaderStyled>Company</FooterGridItemHeaderStyled>
            {FOOTER_LIST.company.map((item) => {
              return (
                <FooterGridItemTextStyled href={item.path} key={item.title}>
                  {item.title}
                </FooterGridItemTextStyled>
              );
            })}
          </FooterGridItemStyled>
          <FooterGridItemStyled>
            <FooterGridItemHeaderStyled>Resources</FooterGridItemHeaderStyled>
            {FOOTER_LIST.resources.map((item) => {
              return (
                <FooterGridItemTextStyled href={item.path} key={item.title}>
                  {item.title}
                </FooterGridItemTextStyled>
              );
            })}
          </FooterGridItemStyled>
          <FooterGridItemStyled>
            <FooterGridItemHeaderStyled>Compare</FooterGridItemHeaderStyled>
            {FOOTER_LIST.compare.map((item) => {
              return (
                <FooterGridItemTextStyled href={item.path} key={item.title}>
                  {item.title}
                </FooterGridItemTextStyled>
              );
            })}
          </FooterGridItemStyled>
          {matchesDesktop && (
            <FooterGridItemStyled>
              <FooterCopyRightStyled>
                Copyright ©2023 A****** inc.️
              </FooterCopyRightStyled>
              <FooterSocialsStyled>
                <LinkedInIcon />
                <YoutubeIcon />
                <TikTokIcon />
                <TwitterIcon />
              </FooterSocialsStyled>
            </FooterGridItemStyled>
          )}
        </FooterGridStyled>

        {!matchesDesktop && (
          <CopyRightMobileContainer>
            <FooterCopyRightStyled>
              Copyright ©2023 A****** inc.️
            </FooterCopyRightStyled>
            <FooterSocialsStyled>
              <LinkedInIcon />
              <YoutubeIcon />
              <TikTokIcon />
              <TwitterIcon />
            </FooterSocialsStyled>
          </CopyRightMobileContainer>
        )}

        <FooterLineStyled>
          <p>A****** is backed by</p>
        </FooterLineStyled>

        <FooterLogoListStyled>
          <img
            srcSet="/assets/images/footer-logo-1.png 2x"
            alt="Footer logo image"
            style={{ objectFit: 'cover' }}
            className="footer-logo-1"
          />
          <img
            srcSet="/assets/images/footer-logo-2.png 2x"
            alt="Footer logo image"
            style={{ objectFit: 'cover' }}
            className="footer-logo-2"
          />
          <img
            srcSet="/assets/images/footer-logo-3.png 2x"
            alt="Footer logo image"
            style={{ objectFit: 'cover' }}
            className="footer-logo-3"
          />
        </FooterLogoListStyled>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
