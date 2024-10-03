import React, { FC } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "@/shared/assets/images/logo.webp";
import { SearchInput } from "@/features";
import { FlexDiv } from "@/shared/ui";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Image
        alt="logo"
        src={Logo}
        width={0}
        height={0}
        className={styles.header__logo}
        priority
      />

      <FlexDiv
        justify="start"
        align="center"
        extraClass={styles.header__container}
      >
        <SearchInput />
      </FlexDiv>
    </header>
  );
};

export default Header;
