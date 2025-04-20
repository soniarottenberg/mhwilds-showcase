import cn from "classnames";
import { ButtonIconProps } from "./props";

const ButtonIcon = ({ icon, onClick, active }: ButtonIconProps) => {
  return (
    <button onClick={onClick} className={cn("hover:bg-slate-200 rounded-md p-2", active && "bg-slate-200")}>
      {icon}
    </button>
  );
};

export default ButtonIcon;
