import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './who.css';

//#region Imports components
import HeaderInit from "../components/HeaderInit";
import WhoBody from "../components/Who/WhoBody";
import FooterInit from "../components/Home/FooterInit";
import { useParams } from 'react-router';
import {default as portuguese} from '../components/language/pt-br.json';
import {default as english} from '../components/language/en-usa.json';
//#endregion



const Who: React.FC = () => {
  const {lang} = useParams< {lang:string;} >();
  var language = lang === "pt-br" ? portuguese : english;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar >
          <HeaderInit value={language.Who.Header}/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Angela Davis - We</IonTitle>
          </IonToolbar>
        </IonHeader>
        <WhoBody lang={language.Who.Body}/>
      </IonContent>
      <IonFooter color={"primary"}>
          <FooterInit />
      </IonFooter>
    </IonPage>
  );
};

export default Who;