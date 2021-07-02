import { IonButton, IonIcon } from "@ionic/react";
import { logoGithub } from "ionicons/icons";
import "./FooterInit.css";



const FooterInit : React.FC = () =>{
    return(
        <IonButton href="https://www.github.com/exodojaffar/angela-davis-ionic/" target="_blank">
            <IonIcon icon={logoGithub}>
                </IonIcon>
        </IonButton>
    )
}

export default FooterInit;