import SubHeader from "./SubHeader"
function Header(props){
    return(
        <>
        <h1>agaram</h1>
        <SubHeader fname={props.name}/>
        <button onClick={()=>props.newname("welcome to agram software academy")}>changename</button>
        </>
    )
}


export default Header