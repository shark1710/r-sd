import './App.css';
import React, { Fragment} from 'react';
import Header from "./components/header/Header"
import Section1 from "./components/section1/Section1"


const App = () => {
  return (
    <Fragment>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      ...
      <SectionN/>
    </Fragment>
  )
}