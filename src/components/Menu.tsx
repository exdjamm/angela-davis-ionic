import {  IonContent,  IonIcon,  IonItem,  IonLabel,  IonList,  IonListHeader,  IonMenu,  IonMenuToggle} from '@ionic/react';
import {default as lang} from "./language.json";
import { useLocation } from 'react-router-dom';
import { femaleOutline, femaleSharp, homeOutline, homeSharp,  paperPlaneOutline, paperPlaneSharp, peopleOutline, peopleSharp } from 'ionicons/icons';
import './Menu.css';
import {language} from '../pages/Home';
import { useState } from 'react';



interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

interface language{lang:string[], menu:string}

const Menu: React.FC<language> = ({lang,menu}) => {
  const location = useLocation();
  var x = 0;
  const appPages: AppPage[] = [
  {
    title: lang[0],
    url: '/page/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: lang[1],
    url: '',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: "Angela Davis",
    url: '/page/AngelaDavis',
    iosIcon: femaleOutline,
    mdIcon: femaleSharp
  },
  {
    title: lang[2],
    url: '/page/We',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },
  {
    title: lang[3],
    url: '/page/Contact',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  }
];
  return (
    <IonMenu contentId="main"  type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>{menu}</IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
