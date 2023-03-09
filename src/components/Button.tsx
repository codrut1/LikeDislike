import classes from "./Button.module.css";
import classNames from "classnames";

type ButtonProps = {
  label: string;
  onClick: (key: string) => void;
  isActive: boolean;
};

const Button = ({ isActive, label, onClick }: ButtonProps) => {
  const handleOnClick = () => {
    onClick(label.toLowerCase());
  };

  return (
    <button
      className={classNames(classes.button, isActive && classes.active)}
      onClick={handleOnClick}
    >
      {label.toUpperCase()}
    </button>
  );
};

export default Button;
