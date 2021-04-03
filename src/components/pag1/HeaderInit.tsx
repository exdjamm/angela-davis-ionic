import { IonTitle, IonButton, IonRow, IonCol, IonGrid, IonPopover, IonIcon, IonCard, IonImg, IonThumbnail } from '@ionic/react';
import { useState } from 'react';
import "./HeaderInit.css";
import { menuOutline, globeOutline } from 'ionicons/icons';
import {default as language} from "./language.json";


interface ContainerProps { name:String, color:string, func:Function };
interface languages {name:string, description:String, src:string}


const HeaderInit: React.FC = () =>{

    const [ option, setOption] = useState("Portuguese");

    let getLanguage = () =>{
        return option == "Portuguese"? language.portuguese : language.english;
    };

    const languagers : languages[] =[{name:"Portuguese",description:"Mude a língua para Pt-Br",src:language.portuguese.srcImg},{name:"English",description:"Change the language to En-USA",src:language.english.srcImg}]

    const options: ContainerProps[] = 
    [
        {
            name: getLanguage().header[1],
            color:"warning",
            func: ()=>{setHeader(1)}
        },
        {
            name:"Angela Davis",
            color:"danger",
            func: ()=>{}
        },
        {
            name:getLanguage().header[2],
            color:"warning",
            func: ()=>{setHeader(2)}
        },
        {
            name:getLanguage().header[3],
            color:"warning",
            func: ()=>{setHeader(3)}
        }
    ];

    const [lang, setLang] = useState({showPop : false, event:undefined});
    const [headerPosition, setHeader] = useState(0);
    const [popLanguageSelect, setPop] = useState({showPop : false, event:undefined});

    var createButtonNav = (buttonProps:ContainerProps) =>{
        return(
            <IonButton fill="clear" color={buttonProps.color} onClick={()=>buttonProps.func()}>{buttonProps.name}</IonButton>
        )
    }

    return (
        <IonGrid>
            <IonTitle id="title">{getLanguage().header[headerPosition]}</IonTitle>
            {options.map((buttonProps)=>{                   
                    return createButtonNav(buttonProps);
            })}
            <IonButton id="left" onClick={(e:any)=>setLang({showPop:true, event:e})}>
                <IonIcon icon={globeOutline}></IonIcon>
            </IonButton>
            <IonPopover isOpen={popLanguageSelect.showPop} event={popLanguageSelect.event} onDidDismiss={()=>setPop({showPop:false,event:undefined})}>
                {options.map((buttonProps=>{
                    return createButtonNav(buttonProps);
                }))}
            </IonPopover>
            <IonPopover isOpen={lang.showPop} event={lang.event} onDidDismiss={()=>setLang({showPop:false,event:undefined})}>
                {languagers.map((selectLanguageProps)=>{
                    return(
                        <IonCard button={true} onClick={()=>{
                            setLang({showPop:false,event:undefined});
                            setOption(selectLanguageProps.name);
                        }} ><IonThumbnail id="img"><IonImg src={selectLanguageProps.src}></IonImg></IonThumbnail> {selectLanguageProps.description}</IonCard>
                    )
                })}
                </IonPopover>
        </IonGrid>
    );
};

export default HeaderInit;