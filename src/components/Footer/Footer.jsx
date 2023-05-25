import React from "react";
import { ReactComponent as FbSvg } from "images/fb.svg";
import { ReactComponent as LInSvg } from "images/lin.svg";
import { ReactComponent as TwSvg } from "images/twit.svg";
import { ReactComponent as YouTubeSvg } from "images/youtub.svg";
import {
  FooterContainer,
  FooterItem,
  FooterList,
  FooterStyled,
  FooterText,
  SocialLink,
} from "./Footer.styles";

const links = {
  fb: "https://www.facebook.com/",
  tw: "https://twitter.com/",
  youT: "https://www.youtube.com/",
  lIn: "https://www.linkedin.com/",
};

export default function Footer() {
  return (
    <FooterStyled>
      <FooterContainer>
        <FooterList>
          <FooterItem>
            <SocialLink href={links.fb} target="_blank">
              <FbSvg />
            </SocialLink>
          </FooterItem>
          <FooterItem>
            <SocialLink href={links.tw} target="_blank">
              <TwSvg />
            </SocialLink>
          </FooterItem>
          <FooterItem>
            <SocialLink href={links.youT} target="_blank">
              <YouTubeSvg />
            </SocialLink>
          </FooterItem>
          <FooterItem>
            <SocialLink href={links.lIn} target="_blank">
              <LInSvg />
            </SocialLink>
          </FooterItem>
        </FooterList>
        <FooterText>Copyright © 2023 - TBayEat</FooterText>
      </FooterContainer>
    </FooterStyled>
  );
}
