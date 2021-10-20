// import React from "react";
// import { Button } from "../../components/Button/Button";
// import { Section } from "../Section/Section";
// import { Title } from "../Title/Title";

// import styles from "./Main.module.css";

// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showSection: true,
//     };
//   }

//   hendleBtnClick = () => {
//     this.setState({ showSection: !this.state.showSection });
//   };

//   render() {
//     return (
//       <div className={styles.container}>
//         <Title title="Информация об университете" />
//         {/* {когда} секция не рендерится, local Storage чистится потому что
//         срабатывает в Section  componentWillUnmount()*/}
//         {this.state.showSection && <Section />}
//         <br />
//         <Button onClick={this.hendleBtnClick} buttonName="Тогл секции" />
//       </div>
//     );
//   }
// }

// export { Main };
//=========================ХУКИ===============================================

import { Button } from "../../components/Button/Button";
import { Section } from "../Section/Section";
import { Title } from "../Title/Title";
import { useState } from "react";

import styles from "./Main.module.css";

function Main() {
  const [showSection, setShowSection] = useState(true);

  const hendleBtnClick = () => {
    setShowSection(!showSection);
  };
  return (
    <div className={styles.container}>
      <Title title="Информация об университете" />
      {/* {когда} секция не рендерится, local Storage чистится потому что 
        срабатывает в Section  componentWillUnmount()*/}
      {showSection && <Section />}
      <br />
      <Button onClick={hendleBtnClick} buttonName="Тогл секции" />
    </div>
  );
}

export { Main };
