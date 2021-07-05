import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './AngDav.css';

//#region Imports components
import HeaderInit from "../components/HeaderInit";
import BodyAngDav from "../components/AngDav/BodyAngDav";
import FooterInit from "../components/Home/FooterInit";
import { useParams } from 'react-router';
import {default as portuguese} from '../components/language/pt-br.json';
import {default as english} from '../components/language/en-usa.json';
//#endregion
 


const AngDav: React.FC = () => {
  const {lang} = useParams< {lang:string;} >();
  var language = lang === "pt-br" ? portuguese : english;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar >
          <HeaderInit value={language.AD.header}/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Angela Davis - angDac</IonTitle>
          </IonToolbar>
        </IonHeader>
        <BodyAngDav aviso={language.AD.body.aviso} lang={language.AD.body.text}/>
      </IonContent>
      <IonFooter color={"primary"}>
          <FooterInit />
      </IonFooter>
    </IonPage>
  );
};

export default AngDav;