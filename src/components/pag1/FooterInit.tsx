import "./FooterInit.css";
interface footer{values:string[]}
const FooterInit : React.FC<footer> = ({values}) =>{
    return(
        <>{values[0]}
        <br/> 
       {values[1]}
        </>
    )
}

export default FooterInit;