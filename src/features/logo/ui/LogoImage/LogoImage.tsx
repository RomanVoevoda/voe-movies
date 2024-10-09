"use client";
import React, { FC } from "react";
import Image from "next/image";

import Logo from "@/shared/assets/images/logo.webp";
import styles from "./LogoImage.module.scss";
import { useRouter } from "next/navigation";
import { routesEnum } from "@/shared/config";

const LogoImage: FC = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push(routesEnum.home);
  };

  return (
    <Image
      alt="logo"
      src={Logo}
      width={0}
      height={0}
      className={styles.image}
      onClick={handleLogoClick}
      layout="responsive"
      priority
    />
  );
};

export default LogoImage;
