import { IonContent, IonImg, IonCol, IonRow, IonText, IonList, IonItem, IonCard, IonGrid, IonAvatar, IonIcon, IonTitle, IonButton, IonPopover, IonHeader, IonFooter, } from "@ionic/react";
import { arrowForwardOutline, logoFacebook, logoGithub, logoInstagram } from "ionicons/icons";
import React, { useState } from "react";

import "./WhoBody.css";

interface params{
    lang:any,
};

const WhoBody : React.FC<params> = ({ lang }) =>{

    let Students = (link:any)=>{//function dos alunos do CreateButtons
        return(
            <IonButton href={link[0]} target="_blank">
                <IonIcon icon={logoGithub}/>
            </IonButton>
        )
    }
    let Teachers = (link:any)=>{ //function dos professores do CreateButtons
        return(
            <IonButton href={link[0]} target="_blank">
                {body.click}
            </IonButton>
        )
    }
    const body = lang;
    const [pop, setPop] = useState({open:false,e:undefined});
    const [content, useContent] = useState({header:"",content:[""],footer:"",links:[""],button:(link:any)=>{}});
    var SetTrue = (e:any, value:any) =>{
        // vai abrir o popOver
        useContent({
            header:body.more[value]['header'],
            content:body.more[value]['Objetivos'],
            footer:body.more[value]["Footer"],
            links:body.more[value]['links'],
            button:CreateButtons[value]
            });
        setPop({open:true,e:e});
    }
    var CreateButtons = {
        "NEABI":(link:any) =>{
            return (
                <>
                    <IonButton href={link[0]} target="_blank">
                        IFMS
                    </IonButton>
                    <IonButton href={link[1]} target="_blank">
                        <IonIcon icon={logoFacebook}/>
                    </IonButton>
                </>
        )},
        "M.Z.D":(link:any)=>{
            console.log(content.links)
            return (
                <>
                    {[logoInstagram,logoFacebook].map((elm,index)=>{
                        return(
                            <IonButton href={link[index]} target="_blank">
                                <IonIcon icon={elm}/>
                            </IonButton>
                            )
                        })
                    }
                </>
            )
        },
        //deve ter uma forma melhor de fazer isso, mas a pressa pra passar pro Jaffar não ficar com pouco tempo é muita
        "Fabio Faria":(link:any)=>{return Teachers(link)},
        "Guilherme Tomaselli":(link:any)=>{return Teachers(link)},
        "Rafael Souza":(link:any)=>{return Teachers(link)},
        "Êxodo Jaffar":(link:any)=>{return Students(link)},
        "João Lucas":(link:any)=>{return Students(link)}
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
                    <br/>
                    {content.button(content.links)}
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
