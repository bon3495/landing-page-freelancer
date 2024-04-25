import styled from '@emotion/styled';
import LoginSingleIcon from '../icons/LoginSingleIcon';
import { Button } from '@mui/material';
import { COLORS } from '../../constants/global';

const BecomeAPart = () => {
  return (
    <BecomeAPartContainer>
      <img
        srcSet="/assets/images/become-1.png 2x"
        alt="become image 1"
        className="become-1"
      />
      <img
        srcSet="/assets/images/become-2.png 2x"
        alt="become image 2"
        className="become-2"
      />
      <img
        srcSet="/assets/images/become-3.png 2x"
        alt="become image 3"
        className="become-3"
      />
      <img
        srcSet="/assets/images/become-4.png 2x"
        alt="become image 4"
        className="become-4"
      />
      <img
        srcSet="/assets/images/become-5.png 2x"
        alt="become image 5"
        className="become-5"
      />
      <img
        srcSet="/assets/images/become-6.png 2x"
        alt="become image 6"
        className="become-6"
      />
      <BecomeAPartContentStyled>
        <div style={{ flexShrink: 0, display: 'flex' }}>
          <LoginSingleIcon />
        </div>

        <BecomeAPartTextContainerStyled>
          <h2>Become a part of the story</h2>
          <p>
            Apply to become a part of the beautiful story we are building here
            at A****** .
          </p>
          <ButtonStyled>Apply now {'>'}</ButtonStyled>
        </BecomeAPartTextContainerStyled>
      </BecomeAPartContentStyled>
    </BecomeAPartContainer>
  );
};

export default BecomeAPart;

export const BecomeAPartContainer = styled('section')`
  background-image: url('/assets/images/become-a-part-bg.png');
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px 0;
  align-items: center;
  position: relative;
  border-top: 1px;
  border-bottom: 1px;
  border-style: solid;
  border-color: #e4e4e7;
  max-width: 100%;
  width: 100%;
  .become-1 {
    top: 560px;
    right: -70px;
    position: absolute;
  }
  .become-2 {
    position: absolute;
    top: 0.26px;
    left: -70px;
  }
  .become-3 {
    position: absolute;
    top: 0.26px;
    left: -70px;
  }
  .become-4 {
    position: absolute;
    top: 340px;
    left: -110px;
  }
  .become-5 {
    position: absolute;
    top: 630px;
    left: -30px;
  }
  .become-6 {
    position: absolute;
    top: 0;
    right: -60px;
  }

  @media (min-width: 744px) {
    .become-1 {
      top: 460px;
      right: 100px;
    }
    .become-2 {
      top: 200px;
      left: 0;
    }
    .become-3 {
      top: -40px;
      left: 120px;
    }
    .become-4 {
      top: 500px;
      left: 50px;
    }
    .become-5 {
      top: 0;
      left: 650px;
    }
    .become-6 {
      top: 200px;
    }
  }
  @media (min-width: 1440px) {
    height: 558px;
    max-width: 1440px;
    width: 1440px;
    .become-1 {
      top: 460px;
      right: 100px;
    }
    .become-2 {
      top: 200px;
      left: 0;
    }
    .become-3 {
      top: 60px;
      left: 300px;
    }
    .become-4 {
      top: 350px;
      left: 300px;
    }
    .become-5 {
      top: 5.6px;
      left: 1100px;
    }
    .become-6 {
      top: 200px;
    }
  }
`;

export const BecomeAPartContentStyled = styled('div')`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: ${COLORS.WHITE};
  padding: 32px 0;

  @media (min-width: 744px) {
    max-width: 664px;
  }
  @media (min-width: 1440px) {
    width: 667px;
  }
`;

const BecomeAPartTextContainerStyled = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  & > h2 {
    font-size: 43px;
    font-weight: 600;
    margin: 30px 0 32px;
  }
  & > p {
    margin: 0;
    font-size: 27px;
    font-weight: 500;
    color: #8d8c97;
    padding: 0 32px 68px;

    @media (min-width: 744px) {
    }
    @media (min-width: 1440px) {
    }
  }
`;

const ButtonStyled = styled(Button)({
  fontSize: 14,
  letterSpacing: '-5%',
  borderRadius: 10,

  backgroundImage:
    'linear-gradient(0deg, #6F58FF, #6F58FF), linear-gradient(180deg, rgba(5, 5, 5, 0) 0%, rgba(5, 5, 5, 0.3) 100%);',
  color: COLORS.WHITE,
  border: '1px solid #6F58FF',
  boxShadow: '0px 1px 2px 0px #6C56F04D;',
  width: '132px',
  height: '37px',
});
