import React, {useEffect, useState} from 'react';
import WeatherController from './WeatherApp/WeatherController';
import logo from './logo.svg';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);
  // const [obj, setObj] = useState({num: 0, oldState: null});
  // const [input, setInput] = useState({userName: '', phoneNum: "123-123-1234", address: null});
  // const [bigList, setBigList] = useState([]);
  // const [displayMeBaby, setDisplayMeBaby] = useState(false);
  // const [webState, setWebState] = useState({});

  // useEffect(() => {
  //     const getStuff = async () => {
  //       // https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0
  //       const resp = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  //       const webState = await resp.json();
  //       setWebState(webState);
  //     };
  //     getStuff();

  //   setBigList([
  //     {
  //       Title: 'Title 1',
  //       description: 'description',
  //       userName: 'aayay4533',
  //       id: Math.floor(Math.random()*100000)
  //     },
  //     {
  //       Title: 'Title 1',
  //       description: 'description',
  //       userName: 'aayay4533',
  //       id: Math.floor(Math.random()*100000)
  //     },
  //     {
  //       Title: 'Title 1',
  //       description: 'description',
  //       userName: 'aayay4533',
  //       id: Math.floor(Math.random()*100000)
  //     },
  //     {
  //       Title: 'Title 1',
  //       description: 'description',
  //       userName: 'aayay4533',
  //       id: Math.floor(Math.random()*100000)
  //     },
  //     {
  //       Title: 'Title 1',
  //       description: 'description',
  //       userName: 'aayay4533',
  //       id: Math.floor(Math.random()*100000)
  //     },
  //     {
  //       Title: 'Title 1',
  //       description: 'description',
  //       userName: 'aayay4533',
  //       id: Math.floor(Math.random()*100000)
  //     },
  //     {
  //       Title: 'Title 1',
  //       description: 'description',
  //       userName: 'aayay4533',
  //       id: Math.floor(Math.random()*100000)
  //     },
  //     {
  //       Title: 'Title 1',
  //       description: 'description',
  //       userName: 'aayay4533',
  //       id: Math.floor(Math.random()*100000)
  //     },
  //     {
  //       Title: 'Title 1',
  //       description: 'description',
  //       userName: 'aayay4533',
  //       id: Math.floor(Math.random()*100000)
  //     }
  //   ]);
  // }, []);

  // const clickHandler = () => {
  //   setCount((prev) => {
  //     console.log("Num PreviousState: " + prev);
  //     return prev + 1
  //   });
  // }

  // const clickHandler2 = () => {
  //   const rando = Math.random()*100;
  //   setObj((prev) => ({num: rando, oldState: prev}));
  // }

  // const onChangeHandler = (e) => {
  //   setInput((person) => {
  //     console.log(person)
  //     return {
  //         ...person,
  //         userName: e.target.value
  //       }
  //     }
  //   )
  // }

  // const clickMeBaby = () => {
  //   setDisplayMeBaby((prev) => !prev)
  // }

  // const listyList = bigList.map(listVal => <MyCardDataController key={listVal.id} props={listVal} props={webState}/>)

  return (
    <>
    <WeatherController/>
    {/* <h3>{count}</h3>
    <h5>{JSON.stringify(obj)}</h5>

    <button onClick={clickHandler}>Increment</button>
    <button onClick={clickHandler2}>Change Obj</button>
    <h5>{input.userName}</h5>
    <input onChange={onChangeHandler} value={input.userName}/>
    <MyCard>
      <h1>Custom Card BOYO!</h1>
      <img src="https://placekitten.com/200/287" />
    </MyCard>

    {listyList} */}

    
    </>
  );
}


// CARD DATA CONTROLLER
const MyCardDataController = (props) => {
  const [show, setShow] = useState(false);

  const changeWebDataHandler = () => {
    const newData = null;

  }

  const showHideHandler = () => {
    setShow((prev) => !prev)
  }

  return (
    <MyCard>
      <MyCardLayout title={props.Title} description={props.description} show={show} showHideHandler={showHideHandler}/>
      <h4>Web State</h4>
      <pre>{JSON.stringify(props.webState[0], null, 4)}</pre>
      <button onClick={changeWebDataHandler}>Change Web Data</button>
    </MyCard>)
  
}

// OPINIONATED CARD LAYOUT
const MyCardLayout = ({title, description, show, showHideHandler}) => {
  return (
      <>
        <h4>{title}</h4>
        <p>{description}</p>
        <h4>{show ? 'show' : 'hidden'}</h4>
        <button onClick={showHideHandler}>Click Me Baby, One More Time!</button>
      </>
  )
}


// CARD COMPONENT
const MyCard = (props) => {
  return (
  <div className="cardiB">
    {props.children}
  </div>)
}

export default App;


