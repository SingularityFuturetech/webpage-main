module.exports = () => `
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team</title>
      <!------------Responsive css file------------->         
      <link href="css/responsive.css" rel="stylesheet" type="text/css">
      <!-------------Magnific popup css file------------->
      <link href="css/magnific-popup.css" rel="stylesheet" type="text/css">
      <!-------------Magnific popup css file------------->        
      <link href="css/owl.carousel.min.css" rel="stylesheet" type="text/css">
      <link href="css/owl.theme.default.min.css" rel="stylesheet" type="text/css">
      <!-------------Font Awesome cdn files------------->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
      <!-------------Font Awesome cdn ends------------->
      <!-- Latest compiled and minified CSS -->
      <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">
      <!-------------Animate css file------------->
      <link href="css/animate.css" type="text/css" rel="stylesheet">
      <!-------------Google font------------->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Hahmlet:wght@900&family=JetBrains+Mono&display=swap" rel="stylesheet">
      <!-- jQuery library -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <!-------------Owl Carousel Js file------------->
      <script src="js/owl.carousel.min.js" type="text/javascript"></script>  
      <!-------------Magnific popup Js file------------->
      <script src="js/jquery.magnific-popup.min.js" type="text/javascript"></script>
      <!-- Latest compiled JavaScript -->
      <script src="js/bootstrap.min.js" type="text/javascript"></script>
      <script>
         // setTimeout(() => window.open('Popit1.html','_blank'), 1000);
         function basicPopup(url) {
             popupWindow = window.open(url,'popUpWindow','height=800,width=700,left=500,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes')
         }
         
         function basicPopup1(url) {
             popupWindow = window.open(url,'popUpWindow','height=800,width=700,left=500,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes')
         }
         
         function basicPopup2(url) {
             popupWindow = window.open(url,'popUpWindow','height=800,width=700,left=500,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes')
         }
         
         function basicPopup3(url) {
             popupWindow = window.open(url,'popUpWindow','height=800,width=700,left=500,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes')
         }
      </script>
      <link rel="stylesheet" href="style.css">
      <link rel="shortcut icon" href="img/favicon.ico">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">
   </head>
   <html>
      <body>
      <nav class="navbar navbar-default navbar-fixed-top" id="navbar" role="navigation">
      <div class="container">
         <div class="navbar-header">
            <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse" role="button">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
            <a href="/" class="navbar-brand" id="logo"> <img src="img/logo.png" alt="" class="logo" style="width: 202px; height: 45px; margin-top:-13px;" ></a>
         </div>
         <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right js-nav">
               <li><a href="/about" class="hover-underline-animation">ABOUT US</a></li>
               <li><a href="/service" class="hover-underline-animation">PRODUCT & SERVICES</a></li>
               <li><a href="/news" class="hover-underline-animation">NEWS</a></li>
               <li><a href="/contact" class="hover-underline-animation">CONTACT US</a></li>
               <li><a href="https://www.thorminers.com/" class="contact">THOR MINER</a></li>
            </ul>
         </div>
      </div>
   </nav>
     <!-- Header Section
–––––––––––––––––––––––––––––––––––––––––––––––––– -->

<!--<header id="header_team">
  <div class="title_team">
    <div><span class="typcn typcn-heart-outline icon heading"></span></div>
    <h1 class="heading"> We’re moving forward, together.</h1>
    <a class="smoothscroll" href="#workforce">
    <div class="mouse">
      <div class="wheel"></div>
    </div>
    </a> </div>
  <a class="smoothscroll" href="#workforce">
  <div class="scroll-down"></div>
  </a> </header>

 Team Section
–––––––––––––––––––––––––––––––––––––––––––––––––– -->  
<!--<section id="team">
   <div class="container">
      <div class="row">
         <h1>Meet the Team</h1>
         <div class="block"></div>
      </div>
      <div class="row">
         <div class="three columns">
            <h4>LEO.J</h4>
            <p>Chief Executive Officer</p>
            <span class="typcn typcn-social-facebook-circular icon"></span><span class="typcn typcn-social-instagram-circular icon"></span><span class="typcn typcn-social-google-plus-circular icon"></span><span class="typcn typcn-social-linkedin-circular icon"></span> 
         </div>
         <div class="three columns">
            <h4>TINA.P</h4>
            <p>Chief Financial Officer</p>
            <span class="typcn typcn-social-facebook-circular icon"></span><span class="typcn typcn-social-instagram-circular icon"></span><span class="typcn typcn-social-google-plus-circular icon"></span><span class="typcn typcn-social-linkedin-circular icon"></span> 
         </div>
         <div class="three columns">
            <h4>ANGELA.S</h4>
            <p>Chief Operating Officer</p>
            <span class="typcn typcn-social-facebook-circular icon"></span><span class="typcn typcn-social-instagram-circular icon"></span><span class="typcn typcn-social-google-plus-circular icon"></span><span class="typcn typcn-social-linkedin-circular icon"></span> 
         </div>
         <div class="three columns">
            <h4>VICTOR.Q</h4>
            <p>Chief Technology Officer</p>
            <span class="typcn typcn-social-facebook-circular icon"></span><span class="typcn typcn-social-instagram-circular icon"></span><span class="typcn typcn-social-google-plus-circular icon"></span><span class="typcn typcn-social-linkedin-circular icon"></span> 
         </div>
      </div>
   </div>
</section> -->
<!-- Skills Section
–––––––––––––––––––––––––––––––––––––––––––––––––– -->  
<section id="workforce" style="margin-top:160px">
   <div class="container">
      <div class="row">
         <h1 style="margin-top:60px">Workforce</h1>
         <div class="block"></div>
      </div>
      <h4>2022</h4>
      </div>
      <section id="skills">
   <div class="container">
      <div class="text-center">
         <h2>Board Diversity Matrix</h2>
         <div class="table-responsive-sm">
            <table class="table table-hover table-bordered table-striped ">
               <thead>
                  <tr  class="table-primary">
                     <td colspan="8" class="table-primary" align="left">As of August 3, 2022<br></td>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td colspan="4" align="left">Total Number of Directors</td>
                     <td colspan="4">5</td>
                  </tr>
                  <tr>
                     <td colspan="4" align="left"><b>Part I: Gender Identity</b></td>
                     <td><b>Female</b><br></td>
                     <td><b>Male</b></td>
                     <td><b>Non-Binary</b></td>
                     <td><b>Did Not<br>Disclose<br>Gender<br></b></td>
                  </tr>
                  <tr>
                     <td colspan="4" align="left">Directors</td>
                     <td>0</td>
                     <td>5</td>
                     <td>0</td>
                     <td>0</td>
                  </tr>
                  <tr>
                     <td colspan="8" align="left"><b>Part II: Demographic Background</b></td>
                  </tr>
                  <tr>
                     <td colspan="4" align="left">African American or Black<br></td>
                     <td>0</td>
                     <td>0</td>
                     <td>0</td>
                     <td>0</td>
                  </tr>
                  <tr>
                     <td colspan="4" align="left">Alaskan Native or American Indian</td>
                     <td>0</td>
                     <td>0</td>
                     <td>0</td>
                     <td>0</td>
                  </tr>
                  <tr>
                     <td colspan="4" align="left">Asian</td>
                     <td>0</td>
                     <td>4</td>
                     <td>0</td>
                     <td>0</td>
                  </tr>
                  <tr>
                     <td colspan="4" align="left">Hispanic or Latinx</td>
                     <td>0</td>
                     <td>0</td>
                     <td>0</td>
                     <td>0</td>
                  </tr>
                  <tr>
                     <td colspan="4" align="left">Native Hawaiian or Pacific Islander</td>
                     <td>0</td>
                     <td>0</td>
                     <td>0</td>
                     <td>0</td>
                  </tr>
                  <tr>
                     <td colspan="4" align="left">White</td>
                     <td>0</td>
                     <td>1</td>
                     <td>0</td>
                     <td>0</td>
                  </tr>
                  <tr>
                     <td colspan="4" align="left">Two or More Races or Ethnicities</td>
                     <td>0</td>
                     <td>0</td>
                     <td>0</td>
                     <td>0</td>
                  </tr>
                  <tr>
                     <td colspan="4" align="left">LGBTQ+</td>
                     <td colspan="4">0</td>
                  </tr>
                  <tr>
                     <td colspan="4" align="left">Did Not Disclose Demographic Background<br></td>
                     <td colspan="4">0</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</section>
 <!--    <section id="skills">
            <div class="board_members">
               <p class="my-4" >
               <div class="column-6 column-xs-12 column-sm-12 tab">
                  <section id="bdmp" class="board_members">
                     <h1>Global Gender</h1>
                     <div style="position:relative">
                        <div class="c100 p80 big">
                           <span class="font-family-Avenir font-size-super">80% Male</span>
                           <span class="font-family-Avenir font-size-super" style="margin-top:30px">20% Female</span>
                           <div class="slice">
                              <div class="bar"></div>
                              <div class="fill"></div>
                           </div>
                           <p class="complete-text font-family-primary font-weight-regular"></p>
                        </div>
                     </div>
                  </section>
               </div>
            </div>
            <div class="board_members">
            <div class="column-6 column-xs-12 column-sm-12 tab">
               <div class="percentage_content">
                  <section id="bdmp" class="board_members" style="margin-top:20px">
                     <h2>U.S. Race and Ethnicity</h2>
                     <b>African American or Black 0%</b>
                     <div class="health">
                        <span class="progress-bar" style="width: 0%;">
                        <span class="shade warm"></span>
                        </span>    
                     </div>
                     <b>Alaskan Native or American Indian 0%</b>
                     <div class="health">
                        <span class="progress-bar" style="width: 0%;">
                        <span class="shade warm"></span>
                        </span>    
                     </div>
                     <b>Asian 80%</b>
                     <div class="health">
                        <span class="progress-bar" style="width: 80%;">
                        <span class="shade warm"></span>
                        </span>    
                     </div>
                     <b>Hispanic or Latinx 0%</b>
                     <div class="health">
                        <span class="progress-bar" style="width:0%;">
                        <span class="shade warm"></span>
                        </span>    
                     </div>
                     <b>Native Hawaiian or Pacific Islander 0%</b>
                     <div class="health">
                        <span class="progress-bar" style="width:0%;">
                        <span class="shade warm"></span>
                        </span>    
                     </div>
                     <b>White 20%</b>
                     <div class="health">
                        <span class="progress-bar" style="width: 20%;">
                        <span class="shade warm"></span>
                        </span>    
                     </div>
                     <b>Two or More Races or Ethnicities 0%</b>
                     <div class="health">
                        <span class="progress-bar" style="width: 0%;">
                        <span class="shade warm"></span>
                        </span>    
                     </div>
                     <b>LGBTQ+ 0%</b>
                     <div class="health">
                        <span class="progress-bar" style="width: 0%;">
                        <span class="shade warm"></span>
                        </span>    
                     </div>
                     <b>Did Not Disclose Demographic Background 0%</b>
                     <div class="health">
                        <span class="progress-bar" style="width: 0%;">
                        <span class="shade warm"></span>
                        </span>    
                     </div>
                  </section>
               </div>
            </div>
         </div>
      </section>
   </div>
</section>  -->  
<!-- Testimonials Section
–––––––––––––––––––––––––––––––––––––––––––––––––– -->  
<!-------------Footer markups--------------->
<div class="column-12 column-xs-12 column-sm-12 tab">
<footer class="footer">
   <div class="footer__addr">
      <h1 class="footer__logo"><img src="img/logo2.png" class="logo" style="width: 202px; height: 50px;"></h1>
      <h2>Contact</h2>
      <address>
         98 Cuttermill Road,
         Great Neck Plaza, New York 11021<br>
         <a class="footer__btn" href="mailto:inquiry@singularity.us">Email Us</a>
      </address>
   </div>
   <ul class="footer__nav">
      <li class="nav__item nav__item--extra">
         <ul class="nav__ul nav__ul--extra">
         <h2 class="nav__title">Know us more</h2>
            <li>
               <a href="/service">Product and Services</a>
            </li>
            <li>
               <a href="/team">Team</a>
            </li>
            <li>
               <a href="/contact">Contact Us</a>
            </li>
         </ul>
      </li>
      <li class="nav__item">
         <ul class="nav__ul">
         <h2 class="nav__title">Legal</h2>
            <li>
               <a href="/privacypolicy">Privacy Policy</a>
            </li>
            <li>
            <a href="/terms">Terms of Use</a>
         </li>
         </ul>
      </li>
   </ul>
   <div class="legal">
      <p>&copy; 2022 Singularity Future Technology Ltd. All rights reserved.</p>
   </div>
</footer>
</div>
      <script src="js/jquery.ripples-min.js" type="text/javascript"></script>  
      <script src="js/typed.min.js" type="text/javascript"></script>
      <script src="js/jquery.waypoints.min.js" type="text/javascript"></script>
      <script src="js/jquery.counterup.min.js" type="text/javascript"></script>           
      <script src="/js/main.js" type="text/javascript"></script>
      <script src="js/smoothscroll.js" type="text/javascript"></script>
      <script src="js/jquery.easing.1.3.js" type="text/javascript"></script>
      <script src="js/wow.min.js" type="text/javascript"></script>
      <script src="js/team.js" type="text/javascript"></script>
      </body>
   </html>
   `;
