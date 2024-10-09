import React, { FC } from "react";
import styles from "./Footer.module.scss";
import FooterButtons from "./FooterButtons/FooterButtons";
import { LogoImage } from "@/features";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <LogoImage />
      <FooterButtons />
    </footer>
  );
};

export default Footer;
