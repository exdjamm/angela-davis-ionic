import { IonContent, IonImg, IonCol, IonRow, IonText, IonList, IonItem, IonListHeader, IonCard, } from "@ionic/react";
import React from "react";
import "./BodyHeader.css";

interface params{header_title:string[]};

const BodyHeader : React.FC<params> = ({ header_title, img_apresenta }) =>{

	return (
		<IonRow className="ion-justify-content-center">
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