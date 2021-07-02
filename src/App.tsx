import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Who from './pages/Who';
import AngDav from './pages/AngDav';
import Why from './pages/Why';
import Ctt from './pages/Contact';

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

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main" when="(min-width:1000000)">
          <Menu/>
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/pt-br/home"/>
            </Route>
            <Route path="/:lang/ref">
              <Home/>
            </Route>
            <Route path="/:lang/AngelaDavis" exact={true}>
              <AngDav/>
            </Route>
            <Route path="/:lang/We" exact={true}>
              <Who/>
            </Route>
            <Route path="/:lang/home" exact={true}>
              <Why/>
            </Route>
            <Route path="/:lang/Contact" exact={true}>
              <Ctt/>
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;