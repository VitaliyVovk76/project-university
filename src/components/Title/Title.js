import s from "./Title.module.css";

function Title({ title }) {
  return <h3 className={s.title}>{title}</h3>;
}
export { Title };
