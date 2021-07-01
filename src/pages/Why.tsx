import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Why.css';

//#region Imports components
import HeaderInit from "../components/HeaderInit";
import BodyWhy from "../components/Why/BodyWhy";
import FooterInit from "../components/Home/FooterInit";
import { useParams } from 'react-router';
import {default as portuguese} from '../components/language/pt-br.json';
import {default as english} from '../components/language/en-usa.json';
//#endregion



const Why: React.FC = () => {
  const {lang} = useParams< {lang:string;} >();
  var language = lang === "pt-br" ? portuguese : english;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar >
          <HeaderInit value={language.Why.header}/>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Angela Davis - Why</IonTitle>
          </IonToolbar>
        </IonHeader>

        <BodyWhy lang={language.Why.body}/>

      </IonContent>

      <IonFooter color={"primary"}>
          <FooterInit/>
      </IonFooter>

    </IonPage>
  );
};

export default Why;