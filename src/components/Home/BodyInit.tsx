import { IonContent, IonImg, IonCol, IonRow, IonText, IonList, IonItem, IonListHeader, IonCard, } from "@ionic/react";
import React from "react";
import "./BodyInit.css";

interface params{lang:string[]};

const BodyInit : React.FC<params> = ({ lang }) =>{

    return(
        <IonContent >
            {/*Apresentação*/}
            <IonRow className="ion-justify-content-center">
                <IonCol id="project-apresentacao">                    
                    <IonImg src={"./img/Apresenta.png"} id="img-apresentation"/>   
            
                    <div id="project-title">
                        <h2 id="textInside">{lang[0]}</h2>
                    </div>
                    
                </IonCol>
            </IonRow>

            {/*Conteudo*/}
            <div id="content">
                <IonRow className="ion-justify-content-start">
                    <IonCol id="columnText">
                        <IonText id="textCommum">{lang[1]}</IonText><br/><br/>
                        <IonList>
                            <IonListHeader id="titleListSub">{lang[2]}</IonListHeader>
                            {[lang[3],lang[4],lang[5]].map(
                                (elm, index,key)=>{return(
                                    <IonItem routerDirection="none" lines="inset" detail={false}>
                                        {elm}
                                    </IonItem>
                            )})} <br/>
                            {lang[6]}
                        </IonList><br/>
                        <IonText id="textCommum">{lang[7]}</IonText>
                        <IonRow>
                        {
                        [
                            {one:lang[8],link:"./img/brasilescola.png",nome:"Brasil Escola"},
                            {one:lang[9],link:"./img/hypeness.png",nome:"Hypeness"},
                            {one:lang[10],link:"./img/geledes.png",nome:"Porta Geledés."}].map(
                                (elm)=>{
                                    return(
                                    <IonCol>
                                        <IonCard target="_blank" button={true} href={elm.one} id={"cardFinal"}>
                                            <nav className={elm.nome}><IonImg id="fixingImage"  src={elm.link}>{elm.nome}</IonImg></nav>
                                        </IonCard>
                                    </IonCol>
                                    )
                                }
                            )
                        }
                        </IonRow>
                    </IonCol>
                </IonRow>
            </div>

        </IonContent>
    )
}

export default BodyInit;