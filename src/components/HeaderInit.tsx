import { IonTitle, IonButton, IonGrid, IonRow, IonPopover, IonIcon, IonCard, IonImg, IonThumbnail, IonButtons, IonMenuButton } from '@ionic/react';
import { useState } from 'react';
import "./HeaderInit.css";
import { globeOutline } from 'ionicons/icons';
import { useLocation } from 'react-router';

interface languages {name:any, description:String, src:string};
interface params {value:String};


const HeaderInit: React.FC<params> = ({value}) =>{
    const location = "/" + useLocation().pathname.split('/')[2];

    const languagers : languages[] =[{name:"pt-br",description:"Mude a língua para Pt-Br",src:"./img/pt-br.png"},
    {name:"en-usa",description:"Change the language to En-USA",src:"./img/en-usa.png"}]

    const [lang, setLang] = useState({showPop : false, event:undefined});

    return (
        <IonGrid>
            <IonRow>
                <IonButtons>
                    <IonMenuButton/>
                </IonButtons>

                <IonTitle id="title">
                   {value}
                </IonTitle>

                <IonButton id="left" onClick={(e:any)=>setLang({showPop:true, event:e})}>
                    <IonIcon icon={globeOutline}></IonIcon>
                </IonButton>

                <IonPopover 
                isOpen={lang.showPop} 
                event={lang.event} 
                onDidDismiss={()=>setLang({showPop:false,event:undefined})}>

                    {
                        languagers.map(
                            (selectLanguageProps)=>{
                                return(
                                    <IonCard 
                                    button={true} 
                                    href={'/'+selectLanguageProps.name+location}
                                   >
                                        <IonThumbnail id="img">
                                            <IonImg src={selectLanguageProps.src}></IonImg>
                                        </IonThumbnail> 

                                    {selectLanguageProps.description}

                                    </IonCard>
                                )
                            }
                        )
                    }

                </IonPopover>
            </IonRow>
        </IonGrid>
    );
};

export {}
export default HeaderInit;