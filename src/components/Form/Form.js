import React from "react";

import { Button } from "../Button/Button";

import styles from "./Form.module.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  /**т.к мы используем  стрелочную функцию, buind() использовать не надо
   * если мы используем классическую, то у нее есть свой контекст и своя область видимости, и она не видит
   * котнекста нашегокласса, поэтому нам нужно сделать связывание - двумя способами
   * 1) при вызове внутри нашего render() - см. конспект занят.3 пункт 2.4.1. Привязка при передаче колбека.
   * СМОТРЕТЬ КОНСПЕКТ ДАЛЬШЕ...
   */

  //отправляем и записываем значение value в state Section
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.reset(); //чистим форму
  };
  //записываем в value то что набираем в инпуте
  hendleChange = (e) => {
    this.setState({ value: e.currentTarget.value });
  };

  reset = () => {
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;

    return (
      <form style={{ marginBottom: "32px" }} onSubmit={this.onSubmit}>
        <p>Добавление города</p>
        <input
          type="text"
          value={value} //тут в поле инпута записываем что хранится в state value
          className={styles.input}
          placeholder="Название города"
          onChange={this.hendleChange}
        />
        {/* {если поле value пустое (false) то disabled = true} */}
        <Button type="submit" buttonName="Добавить" disabled={!value} />
      </form>
    );
  }
}

export { Form };
