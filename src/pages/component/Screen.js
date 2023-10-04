import { useState } from "react";
import { Link } from "react-router-dom";

export default function Screen() {
    const  handlogOut = ()=>{
        localStorage.removeItem("user");
        setUser(null);
      
      }
        const getData = () => {
          const userdata = localStorage.getItem("user");
          return JSON.parse(userdata);
        };
        const [ user, setUser ] = useState(getData());
    return <>
         {user !== null? (
              <>
              <h1>
                Welcome <span>{user && user.name}</span>
              </h1>
              <h3>
                username <span>{user && user.username}</span>
              </h3>
             
              <button className="btn btn-secondary btn-lg" onClick={handlogOut}> log Out</button>
              <Link className=" m-2 btn btn-success btn-lg" to={'/courses'}> Add Coures</Link>
              </>
            ):(
              <>
              <h1>
                Welcome <span>Guest</span>
              </h1>
              <Link className="btn btn-success btn-lg" to={'/login'}> logIn</Link>
              </>
            )}
    </>
};
