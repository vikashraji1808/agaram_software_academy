import SubHeader from "./SubHeader"
import { Outlet, Link } from "react-router-dom";

function Header(props){
    return(
        <>
            <nav>
          <ul>
            <li>
              <Link to={`/`}>home page</Link>
            </li>
            <li>
              <Link to={`/login`}>login page</Link>
            </li>
            <li>
              <Link to={`/user`}>user page</Link>
            </li>
            <li>
              <Link to={`/todos`}>todos page</Link>
            </li>
          </ul>
        </nav>
        <h1>welcome to agaram software academy</h1>
        {/* <h1>agaram</h1>
        <SubHeader fname={props.name}/>
        <button onClick={()=>props.newname("welcome to agram software academy")}>changename</button> */}

        </>
    )
}


export default Header