import { IonTitle, IonButton, IonGrid, IonPopover, IonIcon, IonCard, IonImg, IonThumbnail, IonButtons, IonMenuButton } from '@ionic/react';
import { useState } from 'react';
import "./HeaderInit.css";
import { globeOutline } from 'ionicons/icons';
import {default as language} from "./language.json";

interface languages {name:any, description:String, src:string};
interface params {value:String, setValue:Function};


const HeaderInit: React.FC<params> = ({value, setValue}) =>{

    const languagers : languages[] =[{name:language.portuguese,description:"Mude a língua para Pt-Br",src:language.portuguese.srcImg},{name:language.english,description:"Change the language to En-USA",src:language.english.srcImg}]

    const [lang, setLang] = useState({showPop : false, event:undefined});

    return (
        <IonGrid>
            <IonButtons><IonMenuButton/></IonButtons>
            <IonTitle id="title">{value}</IonTitle>
            <IonButton id="left" onClick={(e:any)=>setLang({showPop:true, event:e})}>
                <IonIcon icon={globeOutline}></IonIcon>
            </IonButton>
            <IonPopover isOpen={lang.showPop} event={lang.event} onDidDismiss={()=>setLang({showPop:false,event:undefined})}>
                {languagers.map((selectLanguageProps)=>{
                    return(
                        <IonCard button={true} onClick={()=>{
                            setLang({showPop:false,event:undefined});
                            setValue(selectLanguageProps.name);
                        }} ><IonThumbnail id="img"><IonImg src={selectLanguageProps.src}></IonImg></IonThumbnail> {selectLanguageProps.description}</IonCard>
                    )
                })}
                </IonPopover>
        </IonGrid>
    );
};

export {}
export default HeaderInit;