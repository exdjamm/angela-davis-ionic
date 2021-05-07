import { IonContent, IonImg, IonCol, IonRow, IonText, IonList, IonItem, IonCard, IonGrid, IonAvatar, IonIcon, IonTitle, IonButton, IonPopover, IonHeader, IonFooter, } from "@ionic/react";
import { arrowForwardOutline, logoFacebook } from "ionicons/icons";
import React, { useState } from "react";

import "./WhoBody.css";

interface params{
    lang:any,
};

const WhoBody : React.FC<params> = ({ lang }) =>{

    const body = lang;
    const [pop, setPop] = useState({open:false,e:undefined});
    const [content, useContent] = useState({header:"",content:[""],footer:"",links:[""]});
    var SetTrue = (e:any, value:any) =>{
        // vai abrir o popOver
        useContent({
            header:body.more[value]['header'],
            content:body.more[value]['Objetivos'],
            footer:body.more[value]["Footer"],
            links:body.more[value]["links"]
        });
        setPop({open:true,e:e});
    }
    var CreateButtons = {"NEABI":() =>{
        return (
            <>
                <IonButton href={content.links[0]}>
                    IFMS
                </IonButton>
                <IonButton href={content.links[1]}>
                <IonIcon icon={logoFacebook}/>
                </IonButton>
            </>
    )},
    "":()=>{}

}

    var createrPop = () =>{
        //vai criar o conteudo do popOver
        return (
            <>
                <IonHeader>
                     {content.header}
                    </IonHeader>
                <IonContent>
                    <br/>
                    {content.content.map((elm)=>{
                        return (
                            <>
                            {"- "+ elm}
                            <br/><br/>
                            </>
                            );
                    })}
                    </IonContent>
                <IonFooter>
                    {content.footer}
                </IonFooter>
                </>
        )
    }


    return(
        <IonContent >
            {/*Conteudo*/}
            <div id="content">
                <IonGrid>
                    {body.describe.map((elm:string,index:number)=>{
                        return(
                            <>
                                <IonList className="itensWe">
                                    <IonRow>
                                        {/* imagem */}
                                        <IonAvatar className="AvatarUs">
                                            <IonImg src={body.imgs[index]}></IonImg>
                                            <IonCard className="NomesAvatar" color="danger" button={true} onClick={(e:any)=>SetTrue(e,body.names[index])}>{body.names[index]}</IonCard>
                                        </IonAvatar>
                                        <IonIcon icon={arrowForwardOutline} className="arrowItem"/>
                                        {/* texto */}
                                        <div className="textDescribe">
                                            <IonText>
                                                {elm}
                                            </IonText>
                                        </div>
                                    </IonRow>
                                </IonList>
                                <br/>
                            </>
                        )
                    })}
                </IonGrid>
            </div>
            <IonPopover isOpen={pop.open} event={pop.e} onDidDismiss={()=>setPop({open:false,e:undefined})}>
                {createrPop()}
            </IonPopover>
        </IonContent>
    )
}

export default WhoBody;
