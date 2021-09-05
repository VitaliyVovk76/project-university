/**
 * создаем config-file для пунктов меню, т.к. пункты
 * меню могут добавляться и приходить с сервера
 * для того чтоб наш файл был доступет в другом, нужно его export
 */
//HiBookOpen HiAcademicCap
import { HiAcademicCap, HiBookOpen } from "react-icons/hi";
export const menuConfig = [
  { id: 1, name: "Университет", icon: <HiBookOpen /> },
  { id: 2, name: "Факультеты", icon: <HiAcademicCap /> },
];
