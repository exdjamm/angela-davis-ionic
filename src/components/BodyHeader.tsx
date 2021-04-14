import { IonContent, IonImg, IonCol, IonRow, IonText, IonList, IonItem, IonListHeader, IonCard, } from "@ionic/react";
import React from "react";
import "./BodyHeader.css";

interface params{header_title:any, img_apresenta:any, className:any};

const BodyHeader : React.FC<params> = ({ header_title, img_apresenta, className }) =>{

	return (
		<IonRow className={`ion-justify-content-center ${className != undefined ? className : ''}`} >
            <IonCol id="project-apresentacao">                    
                <IonImg src={img_apresenta} id="img-apresentation"/>   
        
                <div id="project-title">
                    <h2 id="textInside">{header_title}</h2>
                </div>
                
            </IonCol>
        </IonRow>
	)
}

export default BodyHeader;
