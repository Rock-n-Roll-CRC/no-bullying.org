import Header from "@/components/Header/Header";
import Logo from "@/components/Logo/Logo";
import Main from "@/components/Main/Main";
import Quiz from "@/components/Quiz/Quiz";
import Footer from "@/components/Footer/Footer";

const Page = () => {
  return (
    <>
      <Header>
        <Logo />
      </Header>

      <Main>
        <Quiz lang="ru" />
      </Main>

      <Footer lang="ru" page="quiz" />
    </>
  );
};

export default Page;
