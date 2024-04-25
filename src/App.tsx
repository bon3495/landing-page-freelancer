import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';
import ContainerStyled from './styles/ContainerStyled';

const App = () => {
  return (
    <ContainerStyled>
      <Header />
      <Content />
      <Footer />
    </ContainerStyled>
  );
};

export default App;
