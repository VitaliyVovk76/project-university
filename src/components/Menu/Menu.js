import { menuConfig } from "../../utils/menu";
import s from "./Menu.module.css";
function Menu() {
  return (
    <div>
      {/* <p>Menu</p> */}
      {menuConfig.map((menuItem) => (
        //()это синтаксис return
        <div key={menuItem.id} className={s.menuItem}>
          {menuItem.icon}
          {/*используем  span вместо р чтобы убрать внутренние отступы*/}
          <span className={s.menuName}>{menuItem.name}</span>
        </div>
      ))}
    </div>
  );
}
export { Menu };
