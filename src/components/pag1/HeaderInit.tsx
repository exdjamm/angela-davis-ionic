import { IonTitle, IonButton, IonRow, IonCol, IonGrid, IonPopover, IonIcon, IonCard, IonImg, IonThumbnail } from '@ionic/react';
import { useState } from 'react';
import "./HeaderInit.css";
import { menuOutline, globeOutline } from 'ionicons/icons';
import {default as language} from "./language.json";


interface ContainerProps { name:String, color:string, func:Function };
interface languages {name:string, description:String, src:string}


const HeaderInit: React.FC = () =>{

    const [ option, setOption] = useState("Portuguese");

    let giver = () =>{
        return option == "Portuguese"? language.portuguese : language.english;
    };
    const languagers : languages[] =[{name:"Portuguese",description:"Mude a língua para Pt-Br",src:language.portuguese.srcImg},{name:"English",description:"Change the language to En-USA",src:language.english.srcImg}]
    const options: ContainerProps[] = 
    [
        {
            name: giver().header[1],
            color:"warning",
            func: ()=>{}
        },
        {
            name:"Angela Davis",
            color:"danger",
            func: ()=>{}
        },
        {
            name:giver().header[2],
            color:"warning",
            func: ()=>{}
        },
        {
            name:giver().header[3],
            color:"warning",
            func: ()=>{}
        }
    ];

    const [lang, setLang] = useState({showPop : false, event:undefined});
    const [pop, setPop] = useState({showPop : false, event:undefined});
    const [number, setNumber] = useState(window.innerWidth);
    setInterval(()=>setNumber(window.innerWidth),500);
    var x = 0;
    var retornar = (el:ContainerProps) =>{
        return(
            <IonCol size="2">
                <IonButton fill="clear" expand="full" color={el.color} onClick={()=>console.log(el.name)}>{el.name}</IonButton>
            </IonCol>
        )
    }
    return (
        <IonGrid>
            <IonRow>
                <IonCol size={number > 900 ? "2":"8"} id="init">
                    <IonTitle>{giver().header[0]}</IonTitle>
                    </IonCol>
                {options.map((el)=>{
                    if (number > 900){
                        return retornar(el);
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
            <IonPopover isOpen={pop.showPop} event={pop.event} onDidDismiss={()=>setPop({showPop:false,event:undefined})}>
                {options.map((el=>{
                    return retornar(el);
                }))}
            </IonPopover>
            <IonPopover isOpen={lang.showPop} event={lang.event} onDidDismiss={()=>setLang({showPop:false,event:undefined})}>
                {languagers.map((el)=>{
                    return(
                        <IonCard button={true} onClick={()=>{
                            setLang({showPop:false,event:undefined});
                            setOption(el.name);
                        }} ><IonThumbnail id="img"><IonImg src={el.src}></IonImg></IonThumbnail> {el.description}</IonCard>
                    )
                })}
                </IonPopover>
        </IonGrid>
    );
};

export default HeaderInit;