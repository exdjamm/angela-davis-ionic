import { IonContent, IonImg, IonCol, IonRow, IonText, IonCard, IonFab, IonFabButton, IonIcon, } from "@ionic/react";
import { help } from "ionicons/icons";
import BodyHeader from "../BodyHeader";
import React, { useState } from "react";
import "./BodyAngDav.css";

interface params{lang:string[]};

const BodyAngDav : React.FC<params> = ({ lang }) =>{
    const body = lang

    const [helpi, setHelpi] = useState(true);
    return(
        <IonContent >
            {/*Apresentação*/}
            <BodyHeader 
                img_apresenta="./img/AD.jfif" 
                header_title={body[0]} className="header-image"/>

            {/*Conteudo*/}
            <div id="content"className="justify-text">
                {lang.map((elm,index)=>{
                    if(index === 0) return;
                    if (index === 8){
                        return(
                            <>
                            <IonCard className="cardText">
                                <IonText className="text-sla-a" color="dark">
                                    {elm}
                                </IonText>
                            </IonCard>
                            <br/><br/>
                            <IonRow className="ion-justify-content-center">
                                <IonImg src="./img/Procurada.png" id="wanted"/>
                                <br/>
                            </IonRow>
                            </>
                        );
                    }
                    if(index%2 === 0){
                        return(
                            <>
                            <IonCard className="cardText">
                                <IonText className="text-sla-a" color="dark">{elm}</IonText>
                            </IonCard><br/>
                            </>
                        );
                    }
                    return(
                        <>
                        <IonText className="titleCommum" color={"danger"}>
                            {elm}
                        </IonText><br/>
                        </>
                    )
                })}
            </div>

                <IonFab id="fixing" vertical="center" horizontal="end">
                    <IonFabButton>
                        <IonIcon icon={help}></IonIcon>
                    </IonFabButton>
                </IonFab>
        </IonContent>
    )
}

export default BodyAngDav;