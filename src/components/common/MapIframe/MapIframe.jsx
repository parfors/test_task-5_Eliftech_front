import React from "react";
import { Iframe } from "./MapIframe.styled";

const link =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21990.063204472834!2d30.738059049999997!3d46.45349385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631965dfc29b9%3A0x3750de6bffea4ddd!2sComfy!5e0!3m2!1suk!2sua!4v1685168206280!5m2!1suk!2sua";

export default function MapIframe({ link }) {
  return (
    <Iframe
      src={link}
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></Iframe>
  );
}
