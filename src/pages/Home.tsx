import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { useState } from 'react';

//#region Imports components
import HeaderInit from "../components/HeaderInit";
import BodyInit from "../components/Home/BodyInit";
import FooterInit from "../components/Home/FooterInit";
import {default as lang} from "../components/language.json";
//#endregion
 
var language = lang.portuguese;
interface path {header:string[],body:string[],footer:string[]};
interface lang {path:path, setLang:Function}

const Home: React.FC<lang> = ({path, setLang}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <HeaderInit value={path.header[0]} setValue={setLang}/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Angela Davis - main</IonTitle>
          </IonToolbar>
        </IonHeader>
        <BodyInit lang={path.body}/>
      </IonContent>
      <IonFooter>
          <FooterInit values={path.footer}/>
      </IonFooter>
    </IonPage>
  );
};

export {language};
export default Home;