// import { render } from "@testing-library/react";
import React from "react";
import { Button } from "../Button/Button";

class Section extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       showed: false,
  //       showed1: false,
  //     };
  //   }
  state = {
    showed: false,
    showed1: false,
  };

  render() {
    return (
      <div>
        {this.state.showed && <p>Форма для добавления города</p>}
        <Button
          onClick={() => {
            console.log("clicked");
            this.setState({ showed: true });
          }}
          buttonName="Добовить город"
        />
        {this.state.showed1 && <p>Форма для добавления села</p>}
        <Button
          onClick={() => {
            console.log("clicked");
            this.setState({ showed1: true });
          }}
          buttonName="Добовить село"
        />
      </div>
    );
  }
}
export { Section };

//================ХУКИ==================

// function Section() {
//   /**
//    * откуда взялось setShowed?
//    * мы используем хук useState, он возвращает массив, где первое значение - это значение
//    * state, а второе - это функция для обновления state. В классовых компонентах для обновления всех полей
//    *state мы используем setState(). А в функциональных компонентах у нас нету функции setState(), одной функции
//   для всего state, у нас для каждого поля state есть отдельная своя функция для обновления
//    */
//   const [showed, setShowed] = useState(false);
//   const [showed1, setShowed1] = useState(false);
//   return (
//     <div>
//       {showed && <p>Форма для добавления города</p>}
//       <Button
//         onClick={() => {
//           console.log("clicked");
//           setShowed(true);
//         }}
//         buttonName="Добовить город"
//       />
//       {showed1 && <p>Форма для добавления села</p>}
//       <Button
//         onClick={() => {
//           console.log("clicked");
//           setShowed1(true);
//         }}
//         buttonName="Добовить село"
//       />
//     </div>
//   );
// }
// export { Section };
