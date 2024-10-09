"use client";
import React, { FC, useState } from "react";
import styles from "./Header.module.scss";
import { LogoImage, SearchInput } from "@/features";
import { FlexDiv, Icon } from "@/shared/ui";
import classNames from "classnames";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownClass = classNames({
    [styles["header__dropdown"]]: true,
    [styles["header__dropdown_open"]]: isOpen,
  });

  const dropdownHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <FlexDiv
        extraClass={styles.header__main}
        wrap="nowrap"
      >
        <LogoImage />

        <FlexDiv
          justify="start"
          align="center"
          extraClass={styles.header__container}
        >
          <SearchInput />
        </FlexDiv>

        <FlexDiv
          justify="end"
          extraClass={styles.header__icon}
        >
          <Icon
            type="search"
            color="white"
            size="big"
            interactive
            onClick={dropdownHandler}
          />
        </FlexDiv>
      </FlexDiv>

      <FlexDiv
        extraClass={dropdownClass}
        justify="center"
      >
        <SearchInput
          size="adaptive"
          onBlur={dropdownHandler}
        />
      </FlexDiv>
    </header>
  );
};

export default Header;
