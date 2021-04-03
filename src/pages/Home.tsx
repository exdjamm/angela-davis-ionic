import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

//#region Imports components
import HeaderInit from "../components/pag1/HeaderInit";
import BodyInit from "../components/pag1/BodyInit";
import FooterInit from "../components/pag1/FooterInit";
//#endregion
  
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <HeaderInit/>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Angela Davis - main</IonTitle>
          </IonToolbar>
        </IonHeader>
        <BodyInit/>
        
      </IonContent>
      <IonFooter>
          <FooterInit/>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
