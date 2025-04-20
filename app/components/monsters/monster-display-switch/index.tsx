import { LayoutGrid, Rows3 } from "lucide-react";
import ButtonIcon from "../../ui/button-icon";
import { useMonsterDisplayStore } from "../../../store/monster-display-store";

const MonsterDisplaySwitch = () => {
  const { display, setDisplay } = useMonsterDisplayStore();

  return (
    <div className='flex gap-2'>
      <ButtonIcon icon={<LayoutGrid />} onClick={() => setDisplay("card")} active={display === "card"} />
      <ButtonIcon icon={<Rows3 />} onClick={() => setDisplay("table")} active={display === "table"} />
    </div>
  );
};

export default MonsterDisplaySwitch;
