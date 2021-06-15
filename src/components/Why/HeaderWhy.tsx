import { IonCard, IonCol, IonRow, IonTitle} from "@ionic/react";
import React from "react";
import "./HeaderWhy.css";

interface params{header_title:any, className:any};

const HeaderWhy : React.FC<params> = ({ header_title, className }) =>{

	return (
		<IonRow className={`ion-justify-content-center ${className != undefined ? className : ''}`} >
               <IonCard id="titleCardWhy">
                    <IonTitle color="dark" id="titleWhy">
                        {header_title}
                        </IonTitle>
               </IonCard>
        </IonRow>
	)
}

export default HeaderWhy;