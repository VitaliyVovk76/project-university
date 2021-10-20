// // import { render } from "@testing-library/react";
// import React from "react";
// import shortid from "shortid";
// import axios from "axios";
// // const axios = require("axios");

// import { Title } from "../Title/Title";
// import { Card } from "../Card/Card";
// import { Form } from "../Form/Form";
// import { Button } from "../Button/Button";

// const BASE_URL = "http://localhost:3000";

// class Section extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showed: false,
//       cities: [],
//       loading: false,
//       error: "",
//     };
//   }
//   /**т.к cities должно быть в формате массива, а мы храним в формате строки - то используем JSON.parse()*/
//   componentDidMount() {
//     // console.log("componentDidMount()");
//     // const localCities = localStorage.getItem("cities"); //формат строки
//     // const parsedCities = JSON.parse(localCities); //формат массива

//     // // //делаем проверку - если в localStorage пусто то cities инициируем пустым массивом, а не null
//     // // this.setState({ cities: parsedCities || [] });

//     // //или если  parsedCities===true(там не пусто) и parsedCities является массивом, то делаем this.setState()
//     // if (parsedCities && Array.isArray(parsedCities)) {
//     //   this.setState({ cities: parsedCities });
//     // }

//     // Make a request for a user with a given ID
//     this.setState({ loading: true });

//     //ОБЯЗАТЕЛЬНО НЕ function, a =>, ПОТОМУ ЧТО У function СВОЙ КОНТЕКСТ
//     axios
//       .get(`${BASE_URL}/cities`)
//       .then((response) => {
//         // handle success
//         if (response.status === 200) {
//           this.setState({ cities: response.data });
//         }
//         if (response.status === 404) {
//           throw new Error(response.message || "городов не существует");
//         }
//       })
//       .catch((error) => {
//         // handle error
//         console.log("error from json server", error);
//         this.setState({ error: error.message });
//       })
//       .then(() => {
//         // always executed
//         this.setState({ loading: false });
//       });
//   }

//   /**работаем с local Storage - записывать туда данные будем в методе  componentDidUpdate(), потому что
//    * тогда мы смодем влиять на значение cities:[] как из метода handleSubmit(), так и из метода handleRemove()
//    */
//   componentDidUpdate() {
//     //нужно привести значение к строке - поэтому делаем JSON.stringify(this.state.cities)
//     localStorage.setItem("cities", JSON.stringify(this.state.cities));
//   }

//   componentWillUnmount() {
//     console.log("componentWillUnmount()");
//     this.handleClearAll();
//   }

//   handleClearAll = () => {
//     console.log("handleClearAll");
//     localStorage.removeItem("cities");
//   };

//   //тут записываем значение value из формы в массив cities который хранится в state
//   handleSubmit = (city) => {
//     console.log("data", this.state.cities);
//     this.setState((prevState) => ({
//       cities: [
//         ...prevState.cities,
//         {
//           id: shortid.generate(),
//           name: city,
//         },
//       ],
//     }));
//   };

//   handleRemove = (id) => {
//     /**т.к. filter() создает новый массив, используем setState() напрямую, без setState(prevState)
//      * записываем в cities: все элементы массива, у которых нету заданного id
//      */
//     this.setState({
//       cities: this.state.cities.filter((city) => city.id !== id),
//     });

//     axios
//       .delete(`${BASE_URL}cities/${id}`)
//       .then((response) => {
//         if (response.status === 200) {
//           console.log(`city with  id ${id} has been deleted`);
//         }
//       })
//       .catch((error) => {});
//   };

//   hendleButtonClick = () => {
//     this.setState({ showed: !this.state.showed });
//   };

//   render() {
//     const { cities, showed, loading, error } = this.state;

//     return (
//       <div>
//         {/**cities.length&&<Title title="Города" /> не будет работать, нужно или
//          * cities.length>0&&<Title title="Города" /> или как внизу.
//          * если рендерится null, то вызывается componentWillUnmount()  */}
//         {cities.length ? <Title title="Города" /> : null}
//         {loading && <p>Города заргужаются...</p>}
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         {cities.map((city) => {
//           return (
//             /**создаем новый компонент - потому как если у нас, напр,500 городов - 500 раз создавать
//              * стрелочную функцию плохо. Этот компонент - прямоугольник как с выбором города, так и с
//              * выбором факультета */
//             <Card
//               key={city.id}
//               id={city.id}
//               name={city.name}
//               buttonName="Удалить"
//               handleClick={this.handleRemove}
//             />
//           );
//         })}
//         <br />
//         {cities.length > 5 && (
//           <Button
//             onClick={this.handleClearAll}
//             buttonName="Удалить все города"
//           />
//         )}
//         {showed && <Form onSubmit={this.handleSubmit} />}
//         <Button onClick={this.hendleButtonClick} buttonName="Добавить город" />
//       </div>
//     );
//   }
// }
// export { Section };

//================ХУКИ==================

// import { render } from "@testing-library/react";
import { useState, useEffect } from "react";
import shortid from "shortid";
import axios from "axios";
// const axios = require("axios");

import { Title } from "../Title/Title";
import { Card } from "../Card/Card";
import { Form } from "../Form/Form";
import { Button } from "../Button/Button";

const BASE_URL = "http://localhost:3000";

function Section() {
  const [showed, setShowed] = useState(false);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //Массив зависимотсей пусе - вызовется отлько один раз - аналог dimMount()
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/cities`)
      .then((response) => {
        // handle success
        if (response.status === 200) {
          setCities(response.data);
        }
        if (response.status === 404) {
          throw new Error(response.message || "городов не существует");
        }
      })
      .catch((error) => {
        // handle error
        console.log("error from json server", error);
        setError(error.message);
      })
      .then(() => {
        // always executed
        setLoading(false);
      });
  }, []);

  //если в массиве зависимостей стоят зависимотси- вызываются если эти зависимости изменяются - аналог didUpdate()
  //ставим cities - когда этот массив обьявляется, мы его обновляем и в localStorage

  //ТЕПЕРЬ ЭТОТ useEffect() не нужен - при обновлении cities в handleSubmit() страница перерендеривается

  //   useEffect(() => {
  //     console.log("useEffect in didUpdate()");
  //     localStorage.setItem("cities", JSON.stringify(cities));
  //   }, [cities]);

  //тут записываем значение value из формы в массив cities который хранится в state
  //   const handleSubmit = (city) => {
  //     console.log("data", cities);
  //     //у setCities() есть доступ к предидущему state, поэтому берем предидущий и распыляем туда новый
  //     setCities((prevCityes) => [
  //       ...prevCityes,
  //       { id: shortid.generate(), name: city },
  //     ]);
  //   };

  ///РАЗБОР КОДА - затятие 7 1:22:
  const handleSubmit = (city) => {
    const newCity = {
      id: shortid.generate(),
      name: city,
    };

    if (cities.some((c) => c.name === newCity.name)) {
      alert("Такой город уже существует! Введи новый!");
    } else {
      axios.post(`${BASE_URL}/cities`, newCity).then((response) => {
        console.log("response", response);
        if (response.status === 201) {
          setCities((prevCities) => [...prevCities, response.data]);
        }
      });
    }
  };

  const handleRemove = (id) => {
    setCities(cities.filter((city) => city.id !== id));

    axios
      .delete(`${BASE_URL}/cities/${id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log(`City with id ${id} has been successfully deleted`);
        }
      })
      .catch((error) => {});
  };

  const handleClearAll = () => {
    localStorage.removeItem("cities");
  };

  const hendleButtonClick = () => {
    setShowed(!showed);
  };

  console.log("Render");
  return (
    <div>
      {/**cities.length&&<Title title="Города" /> не будет работать, нужно или
       * cities.length>0&&<Title title="Города" /> или как внизу.
       * если рендерится null, то вызывается componentWillUnmount()  */}
      {cities.length ? <Title title="Города" /> : null}
      {loading && <p>Города заргужаются...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {cities.map((city) => {
        return (
          /**создаем новый компонент - потому как если у нас, напр,500 городов - 500 раз создавать
           * стрелочную функцию плохо. Этот компонент - прямоугольник как с выбором города, так и с
           * выбором факультета */
          <Card
            key={city.id}
            id={city.id}
            name={city.name}
            buttonName="Удалить"
            handleClick={handleRemove}
          />
        );
      })}
      <br />
      {cities.length > 5 && (
        <Button onClick={handleClearAll} buttonName="Удалить все города" />
      )}
      {showed && <Form onSubmit={handleSubmit} />}
      {/* <Button onClick={() => setShowed(!showed)} buttonName="Добавить город" /> */}
      <Button onClick={hendleButtonClick} buttonName="Добавить город" />
    </div>
  );
}
export { Section };
