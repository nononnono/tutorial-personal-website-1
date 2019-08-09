import React from "react"
import Contact from '../components/contact';
import "../css/index.css";
import * as Info from '../info';
import MainPhoto from '../images/mainphoto.jpg';

const IndexPage = () => {
  return (

    <div class="index-content">

      <div class="short-biography">
        <img id = "user-image" src= {MainPhoto} />
        <h1>I'm {Info.FullName}</h1>
        <h2>A {Info.JobTitle} at <a href={Info.CompanyWebsite}>{Info.CompanyName}</a></h2>
      </div>

      <Contact />

    </div>

  )
}

export default IndexPage

//Created by Zach Hall, https://github.com/ZachJHall
