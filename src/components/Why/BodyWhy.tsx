import { IonContent, IonImg, IonCol, IonRow, IonText, IonList, IonItem, IonListHeader, IonCard, IonTitle, IonToast, IonIcon, IonButton, } from "@ionic/react";
import { checkmarkOutline } from "ionicons/icons";
import React, { useState } from "react";

import "./BodyWhy.css";

interface params{
    lang:any,
};

interface bodyI{
    header_title: string,
    content: string[],
    [key:string]: any;

};

const BodyWhy : React.FC<params> = ({ lang }) =>{

    const body:bodyI = lang;
    return(
        <IonContent >
            <div id="whyMainTitle">
              {body.bigTitle}
            </div>

            <div id="whyContent">
                

                    <div id="imgWhy">
                        <img id="imageWhy" src="./img/Why.jfif"/>
                    </div>
                    <div id="dLine">
                        <IonTitle id="whyTitle">
                            {body.title}
                            </IonTitle>
                        <IonCard id="IonCardRight">
                            {body.text.map((elm:any) => {
                                return (
                                    <div className="paragraph">
                                        <IonText className="whyText" color="dark">
                                            {elm}
                                        </IonText>
                                        <br/>
                                    </div >
                                    )
                            })}
                        </IonCard>
                        </div>
                    <div id="toast">
                        {/* menssagem é o body.bottom e o botão é o body.toast */}
                        <IonText>
                            {body.bottom}
                            </IonText>
                        <IonIcon icon={checkmarkOutline}/>
                        </div>
            </div>

        </IonContent>
    )
}

export default BodyWhy;