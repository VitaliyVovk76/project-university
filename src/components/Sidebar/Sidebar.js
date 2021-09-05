import { Menu } from "../Menu/Menu";
import s from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={s.sidebar}>
      <Menu />
    </div>
  );
}
//используем именованый экспорт - чтобы при импорте в другой
//файл нельзя было применить другое название кроме Sidebar
// export default Sidebar;
export { Sidebar };
