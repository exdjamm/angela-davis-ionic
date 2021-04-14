import { IonIcon } from "@ionic/react";
import { warningOutline } from "ionicons/icons";
import "./FooterInit.css";
interface footer{values:string[]}
const FooterInit : React.FC<footer> = ({values}) =>{
    return(
        <><IonIcon icon={warningOutline}></IonIcon>
        {values[0]}
        <br/> 
       {values[1]}
        </>
    )
}

export default FooterInit;