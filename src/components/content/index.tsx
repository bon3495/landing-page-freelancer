import Article from './Article';
import Banner from './Banner';
import BecomeAPart from './BecomeAPart';
import Present from './Present';
import { ContentContainerStyled, ContentWrapperStyled } from './styled';

const Content = () => {
  return (
    <ContentWrapperStyled>
      <ContentContainerStyled>
        <Banner />
        <Article />
        <Present />
        <BecomeAPart />
      </ContentContainerStyled>
    </ContentWrapperStyled>
  );
};

export default Content;
