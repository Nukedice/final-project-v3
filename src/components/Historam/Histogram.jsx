import css from "./Historgam.module.css";
import Arrow from "../../ui/Arrow/arrow";
const Historgam = () => {
  return (
    <div className={css.wrapper}>
      <Arrow />
      <ul className={css.table}>
        <li className={css.example}>
          <div>Период</div>
          <div>Всего</div>
          <div>Риски</div>
        </li>
      </ul>
      <Arrow direction={"right"} />
    </div>
  );
};
export default Historgam;
