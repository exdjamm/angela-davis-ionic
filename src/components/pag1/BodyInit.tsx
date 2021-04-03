import { IonCard, IonContent, IonImg, IonCol, IonRow, IonThumbnail, IonText } from "@ionic/react";
import "./BodyInit.css";

interface params{lang:string[]};

const BodyInit : React.FC<params> = (lang) =>{

    return(
        <IonContent >
            <IonRow className="ion-justify-content-center">
                <IonCol id="changingMax">
                    <IonCard>
                        <IonThumbnail id="Thumbnail">
                         <IonImg src={"./img/Apresenta.png"} id="imgIon"/>   
                        </IonThumbnail>
                            <div id="handsome">
                                <h2 id="textInside">Angela Davis, uma breve biografia de uma grande Mulher:</h2>
                            </div>
                    </IonCard>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-start">
                <IonCol id="columnText">

                </IonCol>
            </IonRow>
        </IonContent>
    )
}

export default BodyInit;