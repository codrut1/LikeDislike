import { useState } from "react";
import classes from "./App.module.css";
import Button from "./components/Button";

function App() {
  const [buttonsState, setButtonsState] = useState<{
    [button: string]: boolean;
  }>({ like: false, dislike: false });

  const handleOnClick = (key: string) => {
    setButtonsState((prevState) => {
      const newState = Object.keys(prevState).reduce(
        (acc, currentKey) => ({
          ...acc,
          [currentKey]: currentKey === key ? !prevState[key] : false,
        }),
        {}
      );
      return newState;
    });
  };

  return (
    <div className={classes.root}>
      <Button
        isActive={buttonsState.like}
        label="Like"
        onClick={handleOnClick}
      />
      <Button
        isActive={buttonsState.dislike}
        label="Dislike"
        onClick={handleOnClick}
      />
    </div>
  );
}

export default App;
