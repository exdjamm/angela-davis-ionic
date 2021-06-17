import {  IonContent,  IonIcon,  IonItem,  IonLabel,  IonList,  IonListHeader,  IonMenu,  IonMenuToggle} from '@ionic/react';
import { useLocation } from 'react-router-dom';
import { femaleOutline, femaleSharp, homeOutline, homeSharp,  paperPlaneOutline, paperPlaneSharp, peopleOutline, peopleSharp } from 'ionicons/icons';
import './Menu.css';
import {default as portuguese} from '../components/language/pt-br.json';
import {default as english} from '../components/language/en-usa.json';


interface AppPage {
  name:string;
  url: string | undefined;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const Menu: React.FC = () => {
  const location = useLocation();
  const lang = location.pathname.split('/')[1];
  console.log(lang)
  var language = lang === "pt-br" ? portuguese : english;

  const appPages: AppPage[] = [
  {
    name:"home",
    title: language.menu[0],
    url: '/'+lang+'/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    name:"why",
    title: language.menu[1],
    url: '/'+lang+'/why',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    name:"AngelaDavis",
    title: "Angela Davis",
    url: '/'+lang+'/AngelaDavis',
    iosIcon: femaleOutline,
    mdIcon: femaleSharp
  },
  {
    name:"We",
    title: language.menu[3],
    url: '/'+lang+'/We',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp
  },
  {
    name:"contact",
    title: language.menu[4],
    url: '/'+lang+'/Contact',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  }
];
  return (
    <IonMenu contentId="main"  type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>{language.headerMenu}</IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname.indexOf(appPage.name) !== -1 ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
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
