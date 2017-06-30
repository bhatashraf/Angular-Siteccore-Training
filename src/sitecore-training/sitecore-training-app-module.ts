import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {SitecoreTrainingApp, Home} from './sitecore-training/sitecore-training';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '@angular2-material/all';
import {SITECORE_TRAINING_ROUTES} from './sitecore-training/routes';
import {AboutDemo} from './about/about';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(SITECORE_TRAINING_ROUTES),
    MaterialModule.forRoot(),
  ],
  declarations: [
      Home,
      SitecoreTrainingApp, 
      AboutDemo,   
  ],
  entryComponents: [
      SitecoreTrainingApp, 
  ],
})

export class SitecoreTrainingModule {
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
      this._appRef.bootstrap(SitecoreTrainingApp);
  }
}
