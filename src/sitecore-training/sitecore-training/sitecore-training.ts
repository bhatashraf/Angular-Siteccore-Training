import {Component, ViewEncapsulation} from '@angular/core';
import {FeatureWidgetService} from './featured-widget-service';

@Component({
  selector: 'home',
  //templateUrl is pending: markup is being rendering when put in separate file
  template: `  

<!--Banner -->
  <md-card>
        <img md-card-image src="{{banner.imageSrc}}">
        <md-card-title>{{banner.title}}</md-card-title>
        <md-card-content>
            <p>{{banner.summary}}</p>
        </md-card-content>
        <md-card-actions align="end">
            <a href="{{banner.link}}" md-button color="primary">{{banner.readmore}}</a>
        </md-card-actions>
    </md-card>
<div class="clearfix"></div>
<!-- Featured widget -->
  <div class="cardlist" flex="100%" class="col-md-12">
        <div class="demo-card-container col-lg-4 col-md-4 col-sm-6 col-xs-12 marginbottom" *ngFor="let feature of features">
              <md-card layout="column" class="content-center">
                      <img src="{{feature.imageSrc}}">
                      <h3><a href="{{feature.link}}">{{feature.title}}</a></h3>
                      <md-card-content>
                          <p>{{feature.summary}}</p>
                      </md-card-content>
                      <a href="{{features.link}}">Read more</a>
              </md-card>             
          </div>   
    </div>
<div class="clearfix"></div>
    <!-- Explore widget --> 
      <md-card class="col-md-12">
      <div class="col-md-8">
        <md-card-title>{{explore.title}}</md-card-title>
        <md-card-content>
            <p>{{explore.summary}}</p>
        </md-card-content>
        </div>
        <md-card-actions align="end" class="col-md-4">
            <a href="{{explore.link}}" md-button color="primary">{{explore.linkTitle}}</a>
        </md-card-actions>
     </md-card>
<div class="clearfix"></div>
<!-- about and quote widgets -->
    <div clas="col-md-12">
    <!-- about us -->
         <md-card class="col-md-6">
                      <img src="http://i2.wp.com/www.sitecore-training.com/wp-content/uploads/2014/02/portfolio-05.jpg?resize=500%2C300">
                      <h3>{{features[0].title}}</h3>
                      <md-card-content>
                          <p>{{features[0].summary}}</p>
                      </md-card-content>
                      <a href="{{features[0].link}}">Read more</a>
        </md-card>

    <!-- quote -->
    <md-card-title>{{quoteWidgetTitle.title}}</md-card-title>
       <md-card class="col-md-6" *ngFor="let quote of quotes">                 
                      <md-card-content>
                          <p>{{quote.summary}}</p>
                      </md-card-content>
                     <h4>{{quote.author}}</h4>
        </md-card>
    </div>
    
    <!-- resent posts -->
    <div class="col-md-6">
        <md-card-title>{{resentPostsWigetTitle.title}}</md-card-title>
        <ul>
            <li *ngFor="let post of resentPosts">
                <a href="{{post.link}}">{{post.title}}</a>
                </li>
        </ul>
   </div>

   <!-- footer -->
   <footer class="col-md-12 footerBackgroundColor" >

   <!-- footer column 1 -->
    <div class="col-md-3">

    <!-- sitecore class training --> 
      <div>
            <md-card-title>{{resentPostsWigetTitle.title}}</md-card-title>
            <ul>
                <li *ngFor="let post of resentPosts">
                    <a href="{{post.link}}">{{post.title}}</a>
                </li>
            </ul>
        </div>  

     <!-- sitecore Online training --> 
      <div>
            <md-card-title>{{resentPostsWigetTitle.title}}</md-card-title>
            <ul>
                <li *ngFor="let post of resentPosts">
                    <a href="{{post.link}}">{{post.title}}</a>
                </li>
            </ul>
        </div>

     <!-- Who is talking --> 
        <div>
            <md-card-title>{{resentPostsWigetTitle.title}}</md-card-title>
            <ul>
                <li *ngFor="let post of resentPosts">
                    <a href="{{post.link}}">{{post.title}}</a>
                </li>
            </ul>
        </div>
    </div>

    <!-- column second -->
    <div class="col-md-3">

     <!-- sitecore  training in india --> 
       <div>
            <md-card-title>{{resentPostsWigetTitle.title}}</md-card-title>
            <ul>
                <li *ngFor="let post of resentPosts">
                    <a href="{{post.link}}">{{post.title}}</a>
                </li>
                <li *ngFor="let post of resentPosts">
                    <a href="{{post.link}}">{{post.title}}</a>
                </li>
            </ul>
        </div>

    </div>

    <!-- column third -->
    <div class="col-md-3">

     <!-- subscribe for new courses --> 
       <md-card-title>{{resentPostsWigetTitle.title}}</md-card-title>
       <form>
       <div class="form-group">
          <label for="name">Name</label>
          <input id="name" class="form-control" type="text"  required>

  <!--  <div [hidden]
         class="alert alert-danger">
         Name is required
     </div> -->

       </div>
       <div class="form-group">
         <label for="email">*Email</label>
         <input id="email" class="form-control" type="text" required>
       </div>
      <button type="submit" class="btn btn-default"> Subscribe </button>
       </form>
    </div>


<!-- column 4th -->
<div class="col-md-3">
 
<!-- contact us -->
<div>
  <md-card-title>Contact Us</md-card-title>

    {{contactUs.address}}
    <br/>  <br/>
    Email: {{contactUs.email}}
    <br/>  <br/>
    Phone: {{contactUs.phoneNumber}}
</div>

<!-- Socials  -->
<div>
  <md-card-title>Contact with us</md-card-title>
   <ul>          
               <a  *ngFor="let social of socials" href="{{social.link}}">
               <img src="{{social.imgSrc}}">
               </a>          
   </ul>
</div>

<div>
 <md-card-title>#1 in Sitecore Course</md-card-title>
   <md-card-content>
          <p>{{message.summary}}</p>
    </md-card-content>
</div>

</div>
   </footer>
      `,
      providers:[FeatureWidgetService]
})
export class Home {  
    features:any;
    banner:any;
    explore:any;
    quotes:any;
    quoteWidgetTitle:any;
    resentPostsWigetTitle:any;
    resentPosts:any;
    contactUs:any;
    socials:any;
    message:any;
    constructor(featureWidgetService:FeatureWidgetService){
        this.features=featureWidgetService.getFeatures();
        this.banner=featureWidgetService.getBanner();
        this.explore= featureWidgetService.getExplore();
        this.quotes=featureWidgetService.getQuotes();
        this.quoteWidgetTitle= featureWidgetService.getQuoteTitle();
        this.resentPostsWigetTitle=featureWidgetService.getResentPostTitle();
        this.resentPosts=featureWidgetService.getResentPosts();
        this.contactUs=featureWidgetService.getContactUs();
        this.socials=featureWidgetService.getSocials();
        this.message=featureWidgetService.getMessage();
    }
}

@Component({
  moduleId: module.id,
  selector: 'sitecore-training',
  providers: [FeatureWidgetService],
  templateUrl: 'sitecore-training.html',
  styleUrls: ['sitecore-training.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SitecoreTrainingApp {
    contactUs:any;
    socials:any;
    message:any;
    constructor(featureWidgetService:FeatureWidgetService){
        this.contactUs=featureWidgetService.getContactUs();
        this.socials=featureWidgetService.getSocials();
        this.message= featureWidgetService.getMessage();
    }
}
