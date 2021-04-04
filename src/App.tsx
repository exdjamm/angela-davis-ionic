import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import {default as lang} from "./components/language.json";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useState } from 'react';


const App: React.FC = () => {
  const [language, setLanguage] = useState(lang.portuguese);
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main" when="(min-width:1000000)">
          <Menu lang={language.header} menu={language.menu}/>
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/Home"/>
            </Route>
            <Route path="/page/Home" exact={true}>
              <Home path={language} setLang={setLanguage}/>
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
