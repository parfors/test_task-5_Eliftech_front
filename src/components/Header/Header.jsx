import {
  HeaderContainer,
  HeaderLink,
  HeaderLogo,
  HeaderNav,
  HeaderStyled,
  LogoHolder,
} from "./Header.styled";

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <HeaderContainer>
          <HeaderNav>
            <HeaderLink to={"shop"}>Shop</HeaderLink>
            <HeaderLink to={"cart"}>Shopping Cart</HeaderLink>
            <HeaderLink to={"history"}>History</HeaderLink>
          </HeaderNav>
          <LogoHolder to={"/"}>
            <HeaderLogo />
          </LogoHolder>
        </HeaderContainer>
      </HeaderStyled>
    </>
  );
}
