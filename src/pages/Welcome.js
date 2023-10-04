import { useState } from "react";
import "./styles/welcome.css";
import Screen from "./component/Screen";
import AddCourseFrom from "./component/AddCourseFrom";
export default function Welcome() {

  return (
    <>

      <section className="section">
        <div className="container">
          <div className="row mt-3">
            <div className="col text-center content">
           <Screen />
            </div>
          </div>
         
        </div>
      </section>
    </>
  );
}
