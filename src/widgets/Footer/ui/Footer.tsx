import React, { FC } from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Logo from "@/shared/assets/images/logo.webp";
import FooterButtons from "./FooterButtons/FooterButtons";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Image
        alt="logo"
        src={Logo}
        width={0}
        height={0}
        className={styles.footer__logo}
        priority
      />
      <FooterButtons />
    </footer>
  );
};

export default Footer;
