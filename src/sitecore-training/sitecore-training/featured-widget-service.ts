export class FeatureWidgetService {
    getFeatures():any {
        var features= [
                        { "title": "Sitecore Srevices & Development", "imageSrc": "http://i0.wp.com/www.sitecore-training.com/wp-content/uploads/2014/02/time1.png?resize=150%2C150","summary":"Lorem ipsum dolor sit amet, consecteturccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","link":"http://www.google.com", "readmore":"readmore"},
                         { "title": "Sitecore Srevices", "imageSrc": "http://i0.wp.com/www.sitecore-training.com/wp-content/uploads/2014/02/time1.png?resize=150%2C150","summary":"Lorem ipsum dolor sit amet, consecteturccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","link":"http://www.google.com", "readmore":"readmore"},
                          { "title": "Sitecore  Development", "imageSrc": "http://i0.wp.com/www.sitecore-training.com/wp-content/uploads/2014/02/time1.png?resize=150%2C150","summary":"Lorem ipsum dolor sit amet, consecteturccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","link":"http://www.google.com", "readmore":"readmore"}
                       ];

      return features;
    }
    getBanner():any{
        var bannerContent={"title":"Banner  title sitecore training","imageSrc": "http://sitecore-training.com/wp-content/uploads/2014/10/Sitecore-Class-Room-Training.jpg","summary":"Sitecore Training will provide you with the much needed skills to master the tools & concepts of Sitecore. Let's begin the learning as we have made it affordable for you.", "link":"http://www.google.com","readmore":"Read more"};
        return bannerContent;
    }
    getExplore():any{
        var explore={"title":"Customized Training Course Sitecore Developers, Administrators & Marketers", "summary":"Sitecore Enablement, Best of breed training for your team, productive teams, quality output","link":"http://www.google.com", "linkTitle":"Explore"}
        return explore;
    }

    getQuotes():any{
        var quotes = [{"summary":"With 20 years of experience in Architecture, i learnt so much from this training, they answered all the questions patiently, hats off!","author":"Project Manager"},
        {"summary":"I just did not only learn Sitecore but learnt an important skill in IT \"Learn to Learn\". Everything is an object. Object browser is your best friend.","author":"Author Name"}];
        return quotes;
    }
    getQuoteTitle():any{
        var quoteTitle = {"title":"What Our Clients Say!"}
        return quoteTitle;
    }
    getResentPosts():any{
        var resentPosts = [
                        { "title": "Sitecore Srevices & Development", "link":"http://www.google.com"},
                         { "title": "Sitecore Srevices",  "link":"http://www.google.com" },
                          { "title": "Sitecore  Development", "link":"http://www.google.com"}
                       ];
                       return resentPosts;
    }
    getResentPostTitle():any{
        var resentPostTitle = {"title":"Resent Posts"}
        return resentPostTitle;
    }

    getContactUs():any{
        var contactUs = {"address":"C-185, 3rd Floor, Madhu Vihar,Near Bhaskaracharya College of Applied Sciences Gate,New Delhi-110059", "email":"info@sitecore-training.com","phoneNumber":"+918287913389"};
        return contactUs;
    }
   
   getSocials():any{
       var socials = [{"imgSrc":"http://www.sitecore-training.com/wp-content/uploads/2015/05/like-sitecore-training-india-facebook.png", "link":"http://www.google.com"},{"imgSrc":"http://www.sitecore-training.com/wp-content/uploads/2015/05/like-sitecore-training-india-facebook.png", "link":"http://www.google.com"},{"imgSrc":"http://www.sitecore-training.com/wp-content/uploads/2015/05/like-sitecore-training-india-facebook.png", "link":"http://www.google.com"},{"imgSrc":"http://www.sitecore-training.com/wp-content/uploads/2015/05/like-sitecore-training-india-facebook.png", "link":"http://www.google.com"},{"imgSrc":"http://www.sitecore-training.com/wp-content/uploads/2015/05/like-sitecore-training-india-facebook.png", "link":"http://www.google.com"}];
       return socials;
   }

   getMessage():any{
       var message = {"summary":"We are simply the #1 in Sitecore Training CEP & CXP, our courses are technically designed with Sitecore content management engine in mind that energize the whole CMS work flow. Learn in full potential including Administration, Development, CEP, DMS, MVC, Business, Sales, Content Author, HTML Developer, Advanced User, Security and become certified."};
       return message;
   }
}