import { IonContent, IonImg, IonCol, IonRow, IonText, IonList, IonItem, IonListHeader, IonCard, } from "@ionic/react";
import React from "react";
import BodyHeader from "../BodyHeader";

import "./BodyInit.css";

interface params{lang:string[]};

const BodyInit : React.FC<params> = ({ lang }) =>{

    const body = lang

    return(
        <IonContent >
            {/*Apresentação*/}
            <BodyHeader 
                img_apresenta="./img/Apresenta.png" 
                header_title={body['header_title']} 
                className='' />

            {/*Conteudo*/}
            <div id="content">
                <IonRow className="ion-justify-content-start">
                    <IonCol id="columnText">

                        <h2 class="textCommum">
                            Sobre o projeto
                        </h2>
                        <IonRow>
                            <IonCol size='8'>
                            <p>
                                {body.content[0]}
                            </p>
                            <p>
                                {body.content[1]}
                            </p>
                            </IonCol>

                            <IonCol size='3'>
                                <img id="side-img" src="./img/Apresenta.png"/>
                            </IonCol>
                        </IonRow>

                        <h3 class="titleListSub">
                            {body.content[2]}
                        </h3>

                        <IonList>
                            {
                                [body.content[3],body.content[4],body.content[5]].map(
                                    (elm, index,key)=>{
                                        return(
                                            <IonItem routerDirection="none" lines="inset" detail={false}>
                                                {elm}
                                            </IonItem>
                                        )
                                    }
                                )
                            }

                            <IonItem className="bgColorGray" routerDirection="none" lines="inset" detail={false}>
                                {body.content[6]}
                            </IonItem>

                        </IonList>

                        <IonText className="titleListSub">
                            {body.content[7]}
                        </IonText>

                        <IonRow>
                            {
                                [
                                    {one:body.content[8],link:"./img/brasilescola.png",nome:"Brasil Escola"},
                                    {one:body.content[9],link:"./img/hypeness.png",nome:"Hypeness"},
                                    {one:body.content[10],link:"./img/geledes.png",nome:"Porta Geledés."}
                                ].map(
                                    (elm)=>{
                                        return(
                                            <IonCol>
                                                <IonCard target="_blank" button={true} href={elm.one} id={"cardFinal"}>
                                                    <nav className={elm.nome}>
                                                        <IonImg id="fixingImage"  src={elm.link}>{elm.nome}</IonImg>
                                                    </nav>
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
