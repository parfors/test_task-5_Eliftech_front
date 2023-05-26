import React from "react";
import { NotContainer, NotFoundSvg, NotText } from "./NotFound.styled";

export default function NotFound() {
  return (
    <NotContainer>
      <NotFoundSvg />
      <NotText>Page is not found</NotText>
    </NotContainer>
  );
}
