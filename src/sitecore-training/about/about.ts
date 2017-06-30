import {Component} from '@angular/core';
import {FeatureWidgetService} from '../sitecore-training/featured-widget-service';

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.html',
  styleUrls: ['about.css'],
  providers:[FeatureWidgetService],
})
export class AboutDemo {
  sitecoreTrainings:any;
  constructor(featureWidgetService:FeatureWidgetService){
    this.sitecoreTrainings=featureWidgetService.getFeatures();
  }
}
