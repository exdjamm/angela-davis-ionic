import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

//#region Imports components
import HeaderInit from "../components/HeaderInit";
import { BodyCtt } from "../components/Ctt/BodyCtt";
import FooterInit from "../components/Home/FooterInit";
import { useParams } from 'react-router';
import {default as portuguese} from '../components/language/pt-br.json';
import {default as english} from '../components/language/en-usa.json';
//#endregion



const Ctt: React.FC = () => {
  const {lang} = useParams< {lang:string;} >();
  var language = lang === "pt-br" ? portuguese : english;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar >
          <HeaderInit value={language.ctt.header}/>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Angela Davis - CTT</IonTitle>
          </IonToolbar>
        </IonHeader>

        <BodyCtt lang={language.ctt.body}/>

      </IonContent>

      <IonFooter color={"primary"}>
          <FooterInit/>
      </IonFooter>

    </IonPage>
  );
};

export default Ctt;