"use client";

import { Icon, Input } from "@/shared/ui";
import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import styles from "./SearchInput.module.scss";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { routesEnum } from "@/shared/config";
import { useTypedDispatch } from "@/shared/hooks";
import { filtersSliceActions } from "@/entities";
import { InputProps } from "@/shared/ui/Input/Input";

interface SearchInputProps {
  size?: InputProps["size"];
  onBlur?: () => void;
  placeholder?: string;
}

const SearchInput: FC<SearchInputProps> = ({
  placeholder = "Поиск...",
  onBlur,
  size = "normal",
}) => {
  const [value, setValue] = useState<string>("");
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
    onBlur?.();
  };

  const iconClass = classNames({
    [styles[`form__icon`]]: value.length < 1,
    [styles[`form__icon_hidden`]]: value.length > 0,
  });

  const formClass = classNames({
    [styles[`form`]]: true,
    [styles[`form_adaptive`]]: size === "adaptive",
  });

  useEffect(() => {
    const keywords = localStorage.getItem("keywords") || "";
    setValue(keywords);
  }, []);

  return (
    <form
      className={formClass}
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
        size={size}
        type="search"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </form>
  );
};

export default SearchInput;
