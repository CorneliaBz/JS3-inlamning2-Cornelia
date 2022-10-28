import { Fragment, useState } from "react"
import Filter from "./components/Filter/Filter"
import Form from "./components/form/form"

//NOTE TO SELF, HÄR FILTRERAR DU OCKSÅ KNAPPARNA. FÖR DIN LISTA ÄR HÄR.
// gjorde i react-intro-6. TOGGLE
//Använd categori-namnet, skit i boolean


const App = () => {

  const [list, setList] = useState([])
  const [orgList, setOrgList] = useState([])
  const [category, setCategory] = useState([])

  const addNewItem = (formObject) => {
    setList(list => [...list, formObject])
    setOrgList(oeg => [...oeg, formObject])
    if (category.includes(formObject.productCategory)) {
      return;
    } else {
      setCategory(category => [...category, formObject.productCategory])
    }
  }

  const RenderData = () => {
    return (
      <ul className="itemContainer">
        {list.map((value, index) => {
          console.log(value);
          return (value.show &&
            <li key={index}>
              <p>{value.productCategory} </p>
              <h2>{value.productName} ({value.amount})</h2>
              <p>BBE: {value.date}</p>
            </li>
          )
        })}
      </ul>
    )
  }

  //Filtrera informationen
  //ALL Button hh.show = true on all
  const filterCategory = (category) => {

    const hh = orgList;
    for (let i = 0; i < hh.length; i++) {
      if (hh[i].productCategory === (category)) {
        hh[i].show = true;

      } else {
        hh[i].show = false;
      }
    }
    setList([...hh])
  }

  //all button onclick
  const showAll = (category) => {
    const hh = orgList;
    for (let i = 0; i < hh.length; i++) {
      hh[i].show = true;
    }
    setList([...hh])
  }


  const renderCategory = () => {
    return (
      <ul className="buttonContainer">
        {orgList.length > 0 && <button className="allButton" onClick={showAll}>ALL</button>}
        {category.map((value, index) => {
          return (
            <li key={index}>
              <Filter productCategory={value} filterCategory={filterCategory}></Filter>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <Fragment>
      <section>
        <div className="formDiv">
          <div></div>
          <Form addNewItem={addNewItem} />
        </div>
        {renderCategory()}
        <RenderData></RenderData>
      </section>
    </Fragment>
  )
}

export default App