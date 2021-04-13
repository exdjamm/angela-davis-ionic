import { IonContent, IonImg, IonCol, IonRow, IonText, IonCard, IonFab, IonFabButton, IonIcon, } from "@ionic/react";
import { help } from "ionicons/icons";
import React, { useState } from "react";
import "./BodyAngDav.css";

interface params{lang:string[]};

const BodyAngDav : React.FC<params> = ({ lang }) =>{
    const [helpi, setHelpi] = useState(true);
    return(
        <IonContent >
            {/*Apresentação*/}
            <IonRow className="ion-justify-content-center">
                <IonCol id="project-apresentacao">                    
                    <IonImg src={"./img/AD.jfif"} id="img-apresentation"/>   
            
                    <div id="project-title">
                        <h2 id="textInside">{lang[0]}</h2>
                    </div>
                    
                </IonCol>
            </IonRow>

            {/*Conteudo*/}
            <div id="content">
                {lang.map((elm,index)=>{
                    if(index === 0) return;
                    if (index === 8){
                        return(
                            <>
                                <IonCard id="cardText"><IonText id="textCommum" color="dark">{elm}</IonText></IonCard><br/><br/>
                                <IonRow className="ion-justify-content-center"><IonImg src="./img/Procurada.png" id="wanted"/><br/></IonRow>
                            </>
                        );
                    }
                    if(index%2 === 0){
                        return(
                            <><IonCard id="cardText"><IonText id="textCommum" color="dark">{elm}</IonText></IonCard><br/></>
                        );
                    }
                    return(
                        <><IonText id="titleCommum" color={"danger"}>{elm}</IonText><br/></>
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