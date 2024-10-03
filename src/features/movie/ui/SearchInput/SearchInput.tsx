"use client";

import { Icon, Input } from "@/shared/ui";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./SearchInput.module.scss";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { routesEnum } from "@/shared/config";
import { useTypedDispatch } from "@/shared/hooks";
import { filtersSliceActions } from "@/entities";

interface SearchInputProps {
  placeholder?: string;
}

const SearchInput: FC<SearchInputProps> = ({ placeholder = "Поиск..." }) => {
  const keywords = localStorage.getItem("keywords") || "";

  const [value, setValue] = useState<string>(keywords);
  const router = useRouter();
  const dispatch = useTypedDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("keywords", value);
    dispatch(filtersSliceActions.setKeyword(value));

    router.push(routesEnum.movies);
  };

  const blurHandler = () => {
    localStorage.setItem("keywords", "");
  };

  const iconClass = classNames({
    [styles[`form__icon`]]: value.length < 1,
    [styles[`form__icon_hidden`]]: value.length > 0,
  });

  return (
    <form
      className={styles.form}
      onSubmit={submitHandler}
      onBlur={blurHandler}
    >
      <span className={iconClass}>
        <Icon
          type="search"
          size="small"
          color="translucent"
        />
      </span>
      <Input
        size="normal"
        type="search"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </form>
  );
};

export default SearchInput;
