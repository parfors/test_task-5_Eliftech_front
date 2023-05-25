import React from "react";
import {
  PlaceholderContainer,
  PlaceholderSection,
  PlaceholderTitle,
} from "./HomePlaceholder.styled";

export default function HomePlaceholder() {
  return (
    <>
      <PlaceholderSection>
        <PlaceholderContainer>
          <PlaceholderTitle>Welcome to the Shop</PlaceholderTitle>
        </PlaceholderContainer>
      </PlaceholderSection>
    </>
  );
}
