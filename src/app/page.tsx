import Header from "@/components/Header/Header";
import Logo from "@/components/Logo/Logo";
import LanguageSelect from "@/components/LanguageSelect/LanguageSelect";
import NavigationMenu from "@/components/NavigationMenu/NavigationMenu";

const Page = () => {
  return (
    <Header>
      <Logo />

      <Header.Container>
        <LanguageSelect />

        <NavigationMenu />
      </Header.Container>
    </Header>
  );
};

export default Page;
