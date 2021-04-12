import { IonContent, IonImg, IonCol, IonRow, } from "@ionic/react";
import "./BodyInit.css";

interface params{lang:string[]};

const BodyInit : React.FC<params> = ({ lang }) =>{

    return(
        <IonContent >
            {/*Apresentação*/}
            <IonRow className="ion-justify-content-center">
                <IonCol id="project-apresentacao">                    
                    <IonImg src={"./img/Apresenta.png"} id="img-apresentation"/>   
            
                    <div id="project-title">
                        <h2 id="textInside">{lang[0]}</h2>
                    </div>
                    
                </IonCol>
            </IonRow>

            {/*Conteudo*/}
            <IonRow className="ion-justify-content-start">
                <IonCol id="columnText">

                </IonCol>
            </IonRow>
            
        </IonContent>
    )
}

export default BodyInit;