import { menuConfig } from "../../utils/menu";
import s from "./Menu.module.css";
function Menu() {
  return (
    <div className={s.menu}>
      {menuConfig.map((menuItem) => (
        //()это синтаксис return, обязательно использовать return
        <div key={menuItem.id} className={s.menuItem}>
          {menuItem.icon}
          {/*используем  span вместо р чтобы убрать внутренние отступы сверху и снизу*/}
          <span className={s.menuName}>{menuItem.name}</span>
        </div>
      ))}
    </div>
  );
}
export { Menu };
