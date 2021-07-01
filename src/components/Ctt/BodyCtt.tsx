import { IonButton, IonCard, IonContent, IonIcon, IonInput, IonTextarea, } from "@ionic/react";
import { sendOutline } from "ionicons/icons";
import React, { useState } from "react";

import "./BodyCtt.css";

interface params{
    lang:any,
}


const BodyCtt : React.FC<params> = ({ lang }) =>{
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [msg, setMsg] = useState<string>("");

    const body = lang;
    const classN = "inputForm"
    const inputClass = "inputForm sc-ion-input-md-h sc-ion-input-md-s md hydrated";
    const textAreaClass = "inputForm sc-ion-textarea-md-h sc-ion-textarea-md-s md hydrated";

    //#region ações gatilho
    let blur = (e:any, classToName:any) =>{
        // reconstruindo o input pq ele se quebra todo no onBLur por alguma
        // particularidade q eu fiz de errado (acho), mas é isso
        e.currentTarget.className = classToName;
        e.currentTarget.autofocus = true;
        e.currentTarget.placeholder = e.currentTarget.placeholder;
    }

    let focus = (e:any)=>{
        e.currentTarget.className +=" clicked";
    }

    let updateData = (e:any,setter:any) =>{
        setter(e.detail.value!);
    }
    let sendData = (name:any, email:any, msg:any) =>{
        if(name && email){
            msg = (msg)? msg : "no msg";
            let op = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify({
                    "nome": name,
                    "email": email,
                    "msg": msg
                })
            }
            fetch("http://backend-dw2.herokuapp.com/save", op)
            .then(response=>{
                response.json().then(elm=>{
                    console.log(elm);
                })
            })
        }else{
            alert();
        }
    }
    //#endregion

    return(
        <IonContent >
            <div id="whyMainTitle">
              {body.title}
            </div>
            <div id="cttContent" className="form">
                <IonCard class="line_form">
                    <IonInput value={name} type="text" placeholder={body.placeholders.name} className={classN} onFocus={focus} onBlur={(e)=>blur(e,inputClass)} onIonChange={(e)=>{updateData(e,setName)}} autofocus={true}/>
                </IonCard>
                <IonCard class="line_form">
                    <IonInput value={email} type="email" placeholder={body.placeholders.email} className={classN} onFocus={focus} onBlur={(e)=>blur(e,inputClass)} onIonChange={(e)=>{updateData(e,setEmail)}}/>
                </IonCard>
                <IonCard class="line_form" id="textArea">
                    <IonTextarea value={msg} placeholder={body.placeholders.msg} className={classN} onFocus={focus} onBlur={(e)=>blur(e,textAreaClass)} onIonChange={(e)=>{updateData(e,setMsg)}} spellcheck={true} id="inputArea"/>
                </IonCard>
                <div id="alerting">
                    {body.alert}
                    </div>
                <IonButton id="send" onClick={()=>{sendData(name, email, msg)}} color="danger">
                    <IonIcon icon={sendOutline}/>
                    </IonButton>
            </div>
        </IonContent>
    )
}

export {BodyCtt};