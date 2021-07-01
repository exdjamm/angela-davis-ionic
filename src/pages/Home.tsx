import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

//#region Imports components
import HeaderInit from "../components/HeaderInit";
import BodyInit from "../components/Home/BodyInit";
import FooterInit from "../components/Home/FooterInit";
import { useParams } from 'react-router';
import {default as portuguese} from '../components/language/pt-br.json';
import {default as english} from '../components/language/en-usa.json';
//#endregion
 


const Home: React.FC = () => {
  const {lang} = useParams< {lang:string;} >();
  var language = lang === "pt-br" ? portuguese : english;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar >
          <HeaderInit value={language.home.header}/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Angela Davis - main</IonTitle>
          </IonToolbar>
        </IonHeader>
        <BodyInit lang={language.home.body}/>
      </IonContent>
      <IonFooter color={"primary"}>
          <FooterInit />
      </IonFooter>
    </IonPage>
  );
};

export default Home;