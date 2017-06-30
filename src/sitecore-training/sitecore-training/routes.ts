import {Routes} from '@angular/router';
import {Home} from './sitecore-training';
import { AboutDemo} from '../about/about';

export const SITECORE_TRAINING_ROUTES: Routes = [
  {path: '', component: Home},
  {path: 'about', component: AboutDemo}
];
