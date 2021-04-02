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

    const [number, setNumber] = useState(window.innerWidth);
    setInterval(()=>setNumber(window.innerWidth),500);

    var x = 0;

    var createButtonNav = (buttonProps:ContainerProps) =>{
        return(
            <IonCol size="2">
                <IonButton fill="clear" expand="full" color={buttonProps.color} onClick={buttonProps.func}>{buttonProps.name}</IonButton>
            </IonCol>
        )
    }

    return (
        <IonGrid>
            <IonRow>
                <IonCol size={number > 900 ? "2":"8"} id="init">
                    <IonTitle>{getLanguage().header[headerPosition]}</IonTitle>
                    </IonCol>
                {options.map((buttonProps)=>{
                    if (number > 900){
                        return createButtonNav(buttonProps);
                    }
                        else if( x == 3){
                        return(
                            <IonButton id="left_" onClick={(e:any)=>setPop({showPop:true, event:e})}>
                                <IonIcon icon={menuOutline}/>
                            </IonButton>
                            )
                        }
                        x++;
                        return(null);
                })}
                <IonButton id="left" onClick={(e:any)=>setLang({showPop:true, event:e})}>
                    <IonIcon icon={globeOutline}></IonIcon>
                </IonButton>
            </IonRow>
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