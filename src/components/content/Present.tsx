import styled from '@emotion/styled';
import { ArticleItemStyled, ArticleItemContentStyled } from './Article';
import { PRESENT_DATA } from '../../constants/present-data';

const Present = () => {
  return (
    <PresentContainer>
      <ArticleItemStyled>
        <ArticleItemContentStyled>
          <span>Present</span>
          <p>
            We’ve grown our team & continue to invest time, money & effort into
            A******, with excitement for what the future holds!
          </p>
        </ArticleItemContentStyled>
        <PresentCardListStyled>
          {PRESENT_DATA.map((item) => {
            return (
              <PresentCardStyled key={item.id}>
                <PresentCardImageStyled>
                  <img srcSet={`${item.image} 2x`} alt={item.title} />
                </PresentCardImageStyled>

                <p>{item.title}</p>
              </PresentCardStyled>
            );
          })}

          <PresentCardStyled
            style={{
              background: '#F7F7F8',
              border: '1px solid #E4E4E7',
              boxShadow: 'none',
            }}
          >
            <PresentCardImageStyled
              style={{
                paddingTop: '30px',
                paddingBottom: '12px',
              }}
            >
              <img
                srcSet={`/assets/images/book-open.png 2x`}
                alt="more image"
              />
            </PresentCardImageStyled>
            <PresentCardItemMoreStyled>
              <span>2024 {'->'} Onwards</span>
              <p>More memories to be made...</p>
            </PresentCardItemMoreStyled>
          </PresentCardStyled>
        </PresentCardListStyled>
      </ArticleItemStyled>
    </PresentContainer>
  );
};

export default Present;

export const PresentContainer = styled('section')`
  max-width: 343px;
  @media (min-width: 744px) {
    max-width: 664px;
  }
  @media (min-width: 1440px) {
    max-width: 897px;
    width: 100%;
  }
`;

export const PresentCardListStyled = styled('div')({
  width: '1200px',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr));',
  gap: '24px',
});

export const PresentCardStyled = styled('div')({
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0px 6px 11px 0px #00000040',
  borderRadius: '32px',

  '&>p': {
    fontSize: 14,
    margin: 0,
    padding: '16px 0 8px',
    textAlign: 'center',
  },
});

export const PresentCardImageStyled = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

export const PresentCardItemMoreStyled = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '185px',
  justifyContent: 'center',
  margin: '0 auto',
  '&>span': {
    marginBottom: '8px',
    color: '#8D8C97',
  },
  '&>p': {
    fontSize: 26,
    margin: 0,
    fontWeight: 500,
    textAlign: 'center',
  },
});
