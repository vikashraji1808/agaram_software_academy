import SubHeader from "./SubHeader"
function Header(props){
    return(
        <>
        <h1>agaram</h1>
        <SubHeader fname={props.name}/>
        </>
    )
}


export default Header