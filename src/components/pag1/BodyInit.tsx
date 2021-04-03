import { IonCard, IonCardContent, IonCardHeader, IonContent, IonGrid, IonImg, IonCol, IonRow, IonTitle, IonThumbnail, IonText } from "@ionic/react";
import "./BodyInit.css";

const BodyInit : React.FC = () =>{
    return(
        <IonContent >
            <IonRow className="ion-justify-content-center">
                <IonCol id="changingMax">
                    <IonCard>
                        <IonThumbnail id="Thumbnail">
                            <IonImg src={"./img/Apresenta.png"}/>
                        </IonThumbnail>
                    </IonCard>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-start">
                <IonCol sizeLg="2" sizeSm="3" sizeMd="3" sizeXs="5" id="auxiliaryBox">
                    <IonCard>
                        <IonText color="dark" className="auxiliaryText">1° lei de murphy</IonText>
                    </IonCard>
                </IonCol>
                <IonCol id="columnText">
                    <h2 id="align">Angela Davis, uma breve biografia de uma grande Mulher:</h2>
                </IonCol>
            </IonRow>
        </IonContent>
    )
}

export default BodyInit;