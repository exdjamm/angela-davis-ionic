import { IonContent, IonImg, IonCol, IonRow, IonText, IonList, IonItem, IonListHeader, IonCard, } from "@ionic/react";
import React from "react";
import HeaderWhy from "./HeaderWhy";

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

    const body:bodyI = lang

    return(
        <IonContent >
            {/*Apresentação*/}
            <HeaderWhy
                header_title={body[0]}
                className='' />

            {/*Conteudo*/}
            <div id="whyContent">
                <IonCard id="paraText">
                    <div id="contraText">
                        <IonText color="dark">
                           {body[1]}
                        </IonText>
                    </div>
                </IonCard>
                <div >
                    <IonCard id="paraImg">
                        <div id="contraImg">
                            <img id="image" src="./img/Why.jfif"/>
                        </div>
                    </IonCard>
                </div>
            </div>

        </IonContent>
    )
}

export default BodyWhy;