import { format } from 'date-fns';
import { styled } from '@mui/material';
import { ARTICLE_DATA } from '../../constants/article-data';

const Article = () => {
  return (
    <ArticleContainer>
      {ARTICLE_DATA.map((item) => {
        return (
          <ArticleItemStyled key={item.id}>
            <ArticleItemContentStyled>
              <span>{format(item.createdAt, 'MMM yyyy')}</span>
              <p>{item.content}</p>
            </ArticleItemContentStyled>
            <img srcSet={`${item.image} 2x`} alt="article image 1" />
          </ArticleItemStyled>
        );
      })}
    </ArticleContainer>
  );
};

export default Article;

export const ArticleContainer = styled('section')`
  max-width: 343px;
  @media (min-width: 744px) {
    max-width: 664px;
  }
  @media (min-width: 1440px) {
    max-width: 897px;
    width: 100%;
  }
`;

export const ArticleItemStyled = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: '160px',

  '&>img': {
    width: '100%',
    objectFit: 'cover',
  },
});

export const ArticleItemContentStyled = styled('div')`
  border-top: 1px solid #e4e4e7;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  width: auto;

  & > p {
    margin: 4px 0 80px;
  }

  & > span {
    color: #8d8c97;
  }

  @media (min-width: 744px) {
    width: 531px;
  }
`;
