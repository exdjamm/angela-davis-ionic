import { IonContent, IonImg, IonCol, IonRow, IonText, IonCard, IonFab, IonFabButton, IonIcon, IonPopover, IonTitle, } from "@ionic/react";
import { help } from "ionicons/icons";
import BodyHeader from "../BodyHeader";
import React, { useState } from "react";
import "./BodyAngDav.css";

interface cards{
    title:string,
    text:string
}
interface params{
    aviso:cards,
    lang:any
}

const BodyAngDav : React.FC<params> = ( lang ) =>{
    const body = lang.lang;

    const [helpi, setHelpi] = useState(false);
    return(
        <IonContent >
            {/*Apresentação*/}
            <BodyHeader
                img_apresenta="./img/AD.jfif"
                header_title={body[0]} className="header-image"/>

            {/*Conteudo*/}
            <div id="content"className="justify-text">
                {body.map((elm:any,index:any)=>{
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
                    <IonFabButton onClick={()=>setHelpi(true)}>
                        <IonIcon icon={help}/>
                    </IonFabButton>
                </IonFab>
                <IonPopover isOpen={helpi} onDidDismiss={()=>setHelpi(false)}>
                    <IonTitle>
                        {lang.aviso.title}
                    </IonTitle>
                    <IonText >
                        <p>
                            {lang.aviso.text}
                        </p>
                    </IonText>
                </IonPopover>
        </IonContent>
    )
}

export default BodyAngDav;