import Header from "@/components/Header/Header";
import Logo from "@/components/Logo/Logo";
import LanguageSelect from "@/components/LanguageSelect/LanguageSelect";
import NavigationMenu from "@/components/NavigationMenu/NavigationMenu";
import Main from "@/components/Main/Main";
import Hero from "@/components/Hero/Hero";
import Steps from "@/components/Steps/Steps";
import Statistics from "@/components/Statistics/Statistics";
import Tabs from "@/components/Tabs/Tabs";
import Carousel from "@/components/Carousel/Carousel";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";

const Page = () => {
  return (
    <>
      <Header>
        <Logo />

        <Header.Container>
          <LanguageSelect lang="ru" />

          <NavigationMenu lang="ru" />
        </Header.Container>
      </Header>

      <Main>
        <Hero lang="ru" />

        <Steps lang="ru" />

        <Statistics lang="ru" />

        <Tabs lang="ru" />

        <Carousel lang="ru" />

        <Contacts lang="ru" />
      </Main>

      <Footer lang="ru" />
    </>
  );
};

export default Page;
