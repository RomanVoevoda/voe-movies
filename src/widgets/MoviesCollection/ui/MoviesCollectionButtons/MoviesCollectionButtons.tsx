import { collectionsEnum } from "@/shared/consts";
import { MoviesCollections } from "@/shared/model";
import { Button, FlexDiv } from "@/shared/ui";
import React, { FC, useState } from "react";
import styles from "./MoviesCollectionButtons.module.scss";

interface MoviesCollectionButtonsProps {
  collections: Array<MoviesCollections["type"]>;
  currentCollection: MoviesCollections["type"];
  setCurrentCollection: React.Dispatch<React.SetStateAction<MoviesCollections["type"]>>;
}

const MoviesCollectionButtons: FC<MoviesCollectionButtonsProps> = ({
  collections,
  currentCollection,
  setCurrentCollection,
}) => {
  const [activeButton, setActiveButton] = useState(currentCollection);

  const handleButtonClick = (value: MoviesCollections["type"]) => {
    setActiveButton(value);
    setCurrentCollection(value);
  };

  return (
    <FlexDiv extraClass={styles.container}>
      {collections.map((collection) => (
        <Button
          variant={collection === activeButton ? "contained" : "text"}
          color="dark_blue"
          onClick={() => handleButtonClick(collection)}
          key={collection}
        >
          {collectionsEnum[collection as keyof typeof collectionsEnum]}
        </Button>
      ))}
    </FlexDiv>
  );
};

export default MoviesCollectionButtons;
