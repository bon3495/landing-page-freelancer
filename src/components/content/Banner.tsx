import useMediaQuery from '@mui/material/useMediaQuery';

import { styled } from '@mui/material';
import { COLORS } from '../../constants/global';

const Banner = () => {
  const matchesDesktop = useMediaQuery('(min-width:1440px)');
  const matchesTablet = useMediaQuery('(min-width:744px)');

  return (
    <BannerStyled>
      <BannerItemGridStyled sx={{ marginBottom: '24px' }}>
        <BannerItemStyled
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: COLORS.BG,
            border: `1px solid ${COLORS.BORDER}`,
            borderRadius: '16px',
            justifyContent: 'center',
          }}
        >
          <p className="banner-top-title">2023</p>
          <span style={{ color: '#8D8C97' }}>A****** launched</span>
        </BannerItemStyled>
        <BannerItemStyled className="banner-img-rocket">
          <img srcSet="/assets/images/rocket.png 2x" alt="rocket image" />
        </BannerItemStyled>
        <BannerItemStyled
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: COLORS.BG,
            border: `1px solid ${COLORS.BORDER}`,
            borderRadius: '16px',
            justifyContent: 'center',
          }}
          className="banner-img-top"
        >
          <img srcSet="/assets/images/banner-1.png 2x" alt="banner 1" />
        </BannerItemStyled>
        <BannerItemStyled
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: COLORS.WHITE,
            borderRadius: '20px',
            padding: '8px',
            boxShadow: '0px 6px 11px 0px #00000040',
          }}
          className="banner-img-persons"
        >
          <img
            srcSet="/assets/images/banner-2.png 2x"
            alt="banner 2"
            style={{ borderRadius: 20 }}
          />
        </BannerItemStyled>
      </BannerItemGridStyled>
      <BannerTextContentStyled>
        {matchesDesktop ? (
          <p>
            Accelerate the world’s research
            <br />
            one reference at a time.
          </p>
        ) : (
          <p>Accelerate the world’s research one reference at a time.</p>
        )}
      </BannerTextContentStyled>

      <BannerItemGridBottomStyled
        sx={{ marginTop: '24px' }}
        className="banner-bottom-container"
      >
        <BannerItemStyled className="banner-star-reviews">
          <img srcSet="/assets/images/banner-3.png 2x" alt="banner 3 image" />
        </BannerItemStyled>
        <BannerItemStyled
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: COLORS.WHITE,
            borderRadius: '20px',
            padding: '8px',
            boxShadow: '0px 6px 11px 0px #00000040',
          }}
          className="banner-men"
        >
          <img srcSet="/assets/images/banner-4.png 2x" alt="banner 4 image" />
        </BannerItemStyled>

        {matchesTablet && (
          <BannerItemStyled className="banner-bottom-text">
            <p className="banner-top-title">$700,000+</p>
            <span style={{ color: '#8D8C97' }}>Raised in captial</span>
          </BannerItemStyled>
        )}
      </BannerItemGridBottomStyled>
      {!matchesTablet && (
        <BannerItemStyled className="banner-bottom-text-outside">
          <p className="banner-top-title">$700,000+</p>
          <span style={{ color: '#8D8C97' }}>Raised in captial</span>
        </BannerItemStyled>
      )}
    </BannerStyled>
  );
};

export default Banner;

export const BannerStyled = styled('section')`
  padding-top: 80px;
  padding-bottom: 160px;
  max-width: 343px;
  @media (min-width: 744px) {
    padding-top: 138px;
    padding-bottom: 178px;
    max-width: 664px;
  }
  @media (min-width: 1440px) {
    padding-top: 120px;
    padding-bottom: 212px;
    max-width: 897px;
    width: 100%;
  }
`;

export const BannerItemWrapperStyled = styled('div')({
  display: 'flex',
  gap: '0 24px',
  height: '136px',
});

export const BannerItemGridStyled = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px 16px;

  @media (min-width: 744px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (min-width: 1440px) {
    display: flex;
    height: 136px;
  }
`;

export const BannerItemGridBottomStyled = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px 16px;

  @media (min-width: 744px) {
    display: flex;
  }

  .banner-star-reviews {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #e4e4e7;
    border-radius: 16px;
    width: 100%;
    @media (min-width: 744px) {
      width: 239px;
      flex-shrink: 0;
      height: 154px;
    }

    @media (min-width: 1440px) {
      width: 239px;
      flex-shrink: 0;
      height: 136px;
    }

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
      @media (min-width: 744px) {
        height: 154px;
      }
      @media (min-width: 1440px) {
        height: 136px;
      }
    }
  }

  .banner-men {
    width: 100%;
    @media (min-width: 744px) {
      height: 154px;
    }

    @media (min-width: 1440px) {
      height: 136px;
      width: 136px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
    }
  }

  .banner-bottom-text {
    display: flex;
    flex-direction: column;
    background: ${COLORS.BG};
    border: 1px solid ${COLORS.BORDER};
    border-radius: 16px;
    padding: 24px;
    justify-content: center;
    align-items: center;
    @media (min-width: 744px) {
      width: 239px;
      flex-shrink: 0;
      height: 154px;
    }
    @media (min-width: 1440px) {
      height: 136px;
    }
  }
`;

export const BannerItemStyled = styled('div')`
  width: 164px;
  height: 164px;
  display: flex;

  &.banner-bottom-text-outside {
    margin-top: 24px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${COLORS.BG};
    border: 1px solid ${COLORS.BORDER};
    border-radius: 16px;
    padding: 24px;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 744px) {
    width: 100%;
    height: 100%;
  }

  &.banner-img-rocket {
    order: 3;
    @media (min-width: 744px) {
      order: 2;
    }

    @media (min-width: 744px) {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
      }
    }
  }

  &.banner-img-persons {
    order: 2;
    @media (min-width: 744px) {
      order: 4;
    }
  }

  &.banner-img-top {
    order: 4;
    @media (min-width: 744px) {
      order: 3;
    }
  }

  &.banner-img-top > img {
    width: 150px;
  }

  &.banner-img-top > img {
    width: 150px;
    order: 4;
  }

  &.banner-img-persons > img {
    width: 100%;
    order: 2;
  }

  & > .banner-top-title {
    line-height: 1.4;
    font-weight: 600;
    text-align: center;
    margin: 0;
    font-size: 34px;

    @media (min-width: 1440px) {
      font-size: 53px;
    }
  }

  &.banner-raised {
    width: 100%;
    margin-top: 24px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${COLORS.BG};
    border: 1px solid ${COLORS.BORDER};
    border-radius: 16px;
    justify-content: center;

    @media (min-width: 744px) {
      padding: 20px 40px;
    }
    @media (min-width: 1440px) {
      padding: 0 120px;
    }
  }

  @media (min-width: 1440px) {
    display: flex;
    gap: 0;
    &:nth-child(odd) {
      flex: 1;
    }

    &:nth-child(even) {
      width: 136px;
    }

    & > img {
      object-fit: cover;
      height: 100%;
    }
  }
`;

export const BannerTextContentStyled = styled('div')`
  background: ${COLORS.BG};
  border: 1px solid ${COLORS.BORDER};
  border-radius: 16px;
  padding: 24px;
  & > p {
    line-height: 1.4;
    font-weight: 600;
    text-align: center;
    margin: 0;
    font-size: 27px;
    @media (min-width: 744px) {
      font-size: 34px;
    }
    @media (min-width: 1440px) {
      font-size: 53px;
    }
  }

  & > br {
    display: none;
    @media (min-width: 744px) {
      font-size: 34px;
    }
    @media (min-width: 1440px) {
      font-size: 53px;
    }
  }
`;
