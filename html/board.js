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
            <!-- Investor relation Section
            –––––––––––––––––––––––––––––––––––––––––––––––––– -->  
         <div id="about-main">
            <div class="story-container">
               <div class="need-for-dx-container">
                  <h1 class="text-center"> Investor Relations</h1>
                  <div class="container-board">
                     <div class="accordion">
                        <div class="accordion-item">
                           <button id="accordion-button-1" aria-expanded="false"><span class="accordion-title" onclick="toggleArticle()">CHARTER OF THE NOMINATING/CORPORATE GOVERNANCE
                           COMMITTEE OF THE BOARD OF DIRECTORS</span><span class="icon" aria-hidden="true" onclick="toggleArticle()"></span></button>
                           <div id="article" style="display: none;" >
                              <h3>1. Purpose</h3>
                              <p>The Nominating/Corporate Governance Committee (the “Committee”) of Singularity
                                 Future Technology Ltd. (the “Company”) is appointed by the Board of Directors to: 
                              </p>
                              <ul>
                                 <li>
                                    <p>Assist the Board in identifying individuals qualified to become Board members
                                       and recommending to the Board the director nominees for each annual meeting of
                                       shareholders;
                                    </p>
                                 </li>
                                 <li>
                                    <p>Recommend to the Board Corporate Governance Principles applicable to the
                                       Company;
                                    </p>
                                 </li>
                                 <li>
                                    <p>Lead the Board in its annual review of the performance of the Board and its
                                       committees; and
                                    </p>
                                 </li>
                                 <li>
                                    <p>Recommend to the Board director nominees for each committee.</p>
                                 </li>
                              </ul>
                              <h3>2. Composition</h3>
                              <p>The Committee shall be comprised of no less than three directors, the exact number to be
                                 determined by the Board of Directors. Each Committee member shall meet the independence
                                 requirements of the Securities and Exchange Commission (“SEC”) and the NASDAQ Stock
                                 Market LLC (“NASDAQ”), as from time to time in effect,
                              </p>
                              <p>In addition, each member of the Committee shall be free from any relationship that, in the
                                 opinion of the Board of Directors, would interfere with the exercise of his or her independent
                                 judgment as a member of the Committee.
                              </p>
                              <p>
                                 The members of the Committee shall be appointed and removed by the Board. The
                                 members of the Committee shall designate a chairman.
                              </p>
                              <h3>3. Committee Authority and Responsibilities</h3>
                              <p>The Committee shall meet at least one (1) time annually and more frequently if
                                 circumstances dictate or if the Committee so determines. The Committee shall also meet at least
                                 annually with the executive officers of the Company and other members of management in
                                 separate executive sessions to discuss any matters that the Committee or any of these persons
                                 believe should be discussed privately. The Committee shall set its own rules of procedure and
                                 may delegate authority to subcommittees of its members. The Committee shall keep minutes of
                                 its activities.
                              </p>
                              <h3>4. Tracking Technologies and Cookies</h3>
                              <ol>
                                 <li>The Committee shall conduct its activities in accordance with the policies and
                                    principles set forth in the Company’s Corporate Governance Principles.
                                 </li>
                                 <li>The Committee shall develop criteria for selection of members of the Board and
                                    its committees. The Committee shall review with the Board, on an annual basis,
                                    the requisite skills and characteristics of new Board members as well as the
                                    composition of the Board as a whole. This assessment shall include each
                                    member’s qualification as independent, as well as consideration of diversity, age,
                                    skills and experience in the context of the needs of the Board.
                                 </li>
                                 <li>
                                    The Committee shall actively seek individuals qualified to become Board
                                    members for recommendation to the Board. The Committee shall have the sole
                                    authority, at the Company’s expense, to retain and terminate any search firm to be
                                    used to identify director candidates and shall have sole authority to approve the
                                    search firm’s fees and other retention terms.
                                 </li>
                                 <li>
                                    The Committee shall evaluate the performance of individual directors each year.
                                 </li>
                                 <li>
                                    The Committee shall conduct a director orientation program for new and
                                    continuing directors in accordance with Section 6 of the Company’s Corporate
                                    Governance Principles.
                                 </li>
                                 <li>
                                    The Committee shall name a chairman who shall preside at all meetings of the
                                    Committee.
                                 </li>
                                 <li>
                                    The Committee shall report to the Board at least annually and more frequently as
                                    circumstances dictate.
                                 </li>
                                 <li>
                                    The Committee shall have the authority to obtain advice and assistance from
                                    legal, accounting or other advisors at the Company’s expense.
                                 </li>
                                 <li>
                                    The Committee shall review and re-assess the adequacy of this Charter and the
                                    Company’s Corporate Governance Principles annually and recommend any
                                    proposed changes to the Board for approval.
                                 </li>
                                 <li>
                                    The Committee shall also have such additional authority to assume additional
                                    responsibilities and take additional actions as may be delegated to it by the Board
                                    of Directors.
                                 </li>
                              </ol>
                              <h3>5. Annual Performance Evaluation</h3>
                              <p>The Committee shall conduct an annual self-evaluation to determine whether it is
                                 functioning effectively. The Committee shall solicit comments from all directors and report
                                 annually to the Board with an assessment of the Committee’s performance. This assessment
                                 shall be discussed with the full Board following the end of each fiscal year. This assessment
                                 shall focus on the Committee’s contribution to the Company and specifically focus on areas in
                                 which the Board or management believes the Committee could improve.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div class="accordion">
                        <div class="accordion-item">
                           <button id="accordion-button-1" aria-expanded="false"><span class="accordion-title" onclick="toggleArticle2()">CODE OF BUSINESS CONDUCTAND ETHICS
                           </span><span class="icon" aria-hidden="true" onclick="toggleArticle2()"></span></button>
                           <div id="article2" style="display: none;" >
                                 <p>
                                    This Code of Business Conduct and Ethics covers a wide range of business practices and
                                    procedures. It does not cover every issue that may arise, but it sets out basic principles to guide the
                                    employees of Singularity Future Technology, Ltd. and its subsidiaries (the “Company”). All of our
                                    employees must conduct themselves in accordance with these principles and seek to avoid even the
                                    appearance of improper behavior. The Company’s agents and representatives, including consultants
                                    and directors, to the extent practicable, shall also follow this Code.
                                 </p>
                                 <p>
                                    This Code is in addition to and supplements the other policies and procedures which have been
                                    implemented by the Company. If a law conflicts with a policy in this Code, you must comply with the
                                    law; however, if a local custom or policy conflicts with this Code, you must comply with the Code. If
                                    you have any questions about a conflict, you should ask your supervisor how to handle the situation.
                                 </p>
                                 <p>
                                    All claims of violations of this Code will be investigated by appropriate personnel. Those who violate
                                    the standards in this Code will be subject to disciplinary action. If you are in a situation that you
                                    believe may violate or lead to a violation of this Code, follow the guidelines described in Section 14
                                    of this Code.
                                 </p>
                                 <ol>
                                    <li>
                                       <strong>Compliance with Laws, Rules and Regulations</strong>
                                       <p>
                                          Obeying the law, both in letter and in spirit, is the foundation on which this Company’s ethical
                                          standards are built. All employees must respect and obey the laws of all jurisdictions in which
                                          the Company operates. Any employee who is unsure about any aspect of these laws should
                                          seek advice from supervisors, managers or other appropriate personnel.
                                       </p>
                                    </li>
                                    <li>
                                       <strong>Record-Keeping</strong>
                                       <p>
                                          Accuracy and reliability in the preparation of all business records is critically important to the
                                          Company’s decision-making process and to the proper discharge of its financial, legal, and
                                          reporting obligations. All of the Company’s books, records, accounts and financial statements
                                          shall be maintained in reasonable detail, shall appropriately reflect the Company’s transactions
                                          and shall conform both to applicable legal requirements and to the Company’s system of internal controls. Unrecorded or “off the books” funds or assets shall not be maintained unless permitted
                                          by applicable law or regulation.
                                       </p>
                                       <p>
                                          Many employees regularly incur business expenses, which must be documented and recorded
                                          accurately. If you are not sure whether a certain expense is appropriate, consult the policy or ask
                                          your supervisor.
                                       </p>
                                       <p>
                                          Business records and communications often become public, and we should avoid exaggeration,
                                          derogatory remarks, guesswork, or inappropriate characterizations of people and companies
                                          that can be misunderstood. This applies equally to e-mail, internal memos and formal reports.
                                          Records shall always be retained or destroyed according to the Company’s record retention
                                          policies.
                                       </p>
                                    </li>
                                    <li>
                                       <strong>Conflicts of Interest and Related Party Transactions</strong>
                                       <p>
                                          A “conflict of interest” exists when a person’s private interest interferes in any way with the
                                          interests of the Company. A conflict situation can arise when an employee, officer or director
                                          takes actions or has interests that may make it difficult to perform his or her Company work
                                          objectively and effectively. Conflicts of interest may also arise when an employee, officer or
                                          director, or members of his or her family, receives improper personal benefits as a result of his or
                                          her position in the Company. Loans to, or guarantees of obligations of, employees and their
                                          family members may create conflicts of interest. Loans to, or guarantees of obligations of,
                                          directors, executive officers and their family members are prohibited.
                                       </p>
                                       <p>
                                          A conflict of interest almost always exists when a Company employee works concurrently for a
                                          competitor, customer or supplier. You are not allowed to work for a competitor as a consultant or
                                          board member. The best policy is to avoid any direct or indirect business connection with the
                                          Company’s competitors, customers or suppliers, except on the Company’s behalf.
                                       </p>
                                       <p>
                                          A conflict of interest may occur when an employee of the Company has an ownership or
                                          financial interest in another business organization that is doing business with the Company.
                                          These transactions between the Company and the other organization are characterized as
                                          related party transactions. While not all related party transactions are improper, the Company
                                          must be aware of the details of each such transaction so that it can make a judgment as to the
                                          appropriateness of the transaction. If you or a family member have any ownership or financial
                                          interest in another organization that conducts business or seeks to conduct business with the
                                          Company, you must report the situation to the Chief Executive Officer (“CEO”) and cooperate with the legal staff by providing all relevant facts. The CEO will determine whether or not the
                                          related party transaction is a conflict of interest.
                                       </p>
                                       <p>
                                          Conflicts of interest are prohibited as a matter of Company policy, except under guidelines
                                          approved by the Board of Directors. Conflicts of interest may not always be clear, so if you have
                                          a question, you should consult with higher levels of management or the Company’s CEO. Any
                                          employee, officer or director who becomes aware of a conflict or potential conflict shall bring it to
                                          the attention of a supervisor, manager or other appropriate personnel or consult the procedures
                                          described in Section 14 of this Code.
                                       </p>
                                    </li>
                                    <li>
                                       <strong>Confidentiality</strong>
                                       <p>
                                          Employees must maintain the confidentiality of confidential information entrusted to them by the
                                          Company or its customers, except when disclosure is authorized by the CEO or legally
                                          mandated. Even within the Company, you should disclose confidential information only to those
                                          employees who need to know the information. Confidential information includes all non-public
                                          information that might be of use to competitors, or harmful to the Company or its customers, if
                                          disclosed. It also includes information that suppliers and customers have entrusted to us. The
                                          obligation to preserve confidential information continues even after employment ends.
                                       </p>
                                    </li>
                                    <li>
                                       <strong>Insider Trading</strong>
                                       <p>
                                          Employees who have access to confidential information are not permitted to use or share that
                                          information for stock trading purposes or for any other purpose except the conduct of the
                                          Company’s business. All non-public information about the Company shall be considered
                                          confidential information. To use non-public information for personal financial benefit or to “tip” others who might make an investment decision on the basis of this information is not only
                                          unethical but also illegal. If you have any questions, you should consult the Company’s CEO.
                                       </p>
                                    </li>
                                    <li>
                                       <strong>Corporate Opportunities</strong>
                                       <p>
                                          Employees, officers and directors are prohibited from taking for themselves personally
                                          opportunities that are discovered through the use of corporate property, information or position
                                          without the consent of the Board of Directors. No employee shall use corporate property,
                                          information, or position for improper personal gain, and no employee shall compete with the
                                          Company directly or indirectly. Employees, officers and directors owe a duty to the Company to
                                          advance its legitimate interests when the opportunity to do so arises.
                                       </p>
                                    </li>
                                    <li>
                                       <strong>Competition and Fair Dealing</strong>
                                       <p>
                                          The Company seeks to outperform its competition fairly and honestly. The Company seeks
                                          competitive advantages through superior performance, never through unethical or illegal
                                          business practices. Stealing proprietary information, possessing trade secret information that
                                          was obtained without the owner’s consent, or inducing such disclosures by past or present
                                          employees of other companies is prohibited. Each employee shall endeavor to respect the rights
                                          of and deal fairly with the Company’s customers, suppliers, competitors and employees. No
                                          employee shall take unfair advantage of anyone through manipulation, concealment, abuse of
                                          privileged information, misrepresentation of material facts, or any other intentional unfair-dealing
                                          practice.
                                       </p>
                                       <p>
                                          The purpose of business entertainment and gifts in a commercial setting is to create good will
                                          and sound working relationships, not to gain unfair advantage with customers. No gift or
                                          entertainment shall ever be offered, given, provided or accepted by any Company employee,
                                          family member of an employee or agent unless it:
                                       </p>
                                       <ul>
                                          <li>
                                             is not a cash gift,
                                          </li>
                                          <li>
                                             is consistent with customary business practices,
                                          </li>
                                          <li>
                                             is not excessive in value,
                                          </li>
                                          <li>
                                             cannot be construed as a bribe or payoff, and
                                          </li>
                                          <li>
                                             does not violate any laws or regulations.
                                          </li>
                                       </ul>
                                    </li>
                                    <li>
                                       <strong>Discrimination and Harassment</strong>
                                       <p>
                                          The diversity of the Company’s employees is a tremendous asset. The Company is firmly
                                          committed to providing equal opportunity in all aspects of employment and shall not tolerate any
                                          illegal discrimination or harassment or any kind. Examples include derogatory comments based
                                          on racial, gender, religious, or ethnic characteristics and unwelcome sexual advances.
                                       </p>
                                    </li>
                                    <li>
                                       <strong>Health and Safety</strong>
                                       <p>
                                          The Company strives to provide each employee with a safe and healthful work environment.
                                          Each employee has the responsibility for maintaining a safe and healthful workplace for all
                                          employees by following safety and health rules and practices and reporting accidents, injuries
                                          and unsafe equipment, practices or conditions.
                                       </p>
                                       <p>Violence and threatening behavior are not permitted. Employees must report to work in condition
                                          to perform their duties, free from the influence of alcohol or illegal drugs. The use of alcohol or
                                          illegal drugs in the workplace is not tolerated.
                                       </p>
                                    </li>
                                    <li>
                                       <strong>Protection and Proper Use of Company Assets</strong>
                                       <p>
                                          All employees shall endeavor to protect the Company’s assets and ensure their efficient use.
                                          Theft, carelessness and waste have a direct impact on the Company’s profitability. All Company
                                          assets should be used for legitimate business purposes. Any suspected incident of theft,
                                          carelessness, or waste of or with Company assets shall be immediately reported for
                                          investigation. Company equipment shall not be used for non-Company business, although
                                          incidental personal use may be permitted by your supervisor.
                                       </p>
                                       <p>
                                          The obligation of employees to protect the Company’s assets includes its proprietary information. Proprietary information includes intellectual property such as trade secrets, patents, trademarks, and copyrights, as well as business, marketing and service plans, databases, records, salary
                                          information and any unpublished financial data and reports. Unauthorized use or distribution of
                                          this information would violate Company policy. It could also be illegal and result in civil and/or
                                          criminal penalties.
                                       </p>
                                    </li>
                                    <li>
                                       <strong>Accounting and Related Matters</strong>
                                       <p>
                                          All employees participate, in some measure, in the gathering of information made available to
                                          the Company’s accounting department for use in the Company’s financial reports and other
                                          information required to be publicly disclosed by the Securities and Exchange Commission and
                                          the NASDAQ Stock Market LLC. Each employee should endeavor to ensure that such
                                          information is accurate and complete in all material respects through full compliance with the
                                          Company’s accounting requirements, internal disclosure and accounting controls and audits.
                                       </p>
                                    </li>
                                    <li>
                                       <strong>Waivers of the Code of Business Conduct and Ethics</strong>
                                       <p>
                                          Any waiver of this Code for executive officers or directors may be made only by the Corporate
                                          Governance Committee of the Board and shall be promptly disclosed as required by law or stock
                                          exchange regulation.
                                       </p>
                                    </li>
                                    <li>
                                       <strong>Administration of Code</strong>
                                       <p>
                                          This Code shall be administered by the Company’s CEO, who shall act as the Corporate
                                          Compliance Officer of the Company, Company employees are encouraged to seek guidance
                                          regarding the application or interpretation of this Code from the CEO and are expected to
                                          cooperate fully in any investigation of any potential violation of this Code.
                                       </p>
                                    </li>
                                    <li>
                                       <strong>Reporting Violations; Compliance Procedures</strong>
                                       <p>
                                          All employees shall work to ensure prompt and consistent action against violations of this Code.
                                          However, in some situations it is difficult to know right from wrong. Since no one can anticipate
                                          every situation that will arise, it is important to have a way to approach a new question or
                                          problem. These are the steps to keep in mind:
                                       </p>
                                       <ul>
                                          <li>
                                             <strong>Make sure you have all the facts.</strong>In order to reach the right solutions, you must be as
                                             fully informed as possible.
                                          </li>
                                          <li>
                                             <strong>Ask yourself: What specifically am I being asked to do? Does it seem or
                                             improper?</strong> This will enable you to focus on the specific question you are faced with and
                                             the alternatives you have. Use your judgment and common sense; if something seems
                                             unethical or improper, it probably is.
                                          </li>
                                          <li>
                                             <strong>Clarify your responsibility and role.</strong> In most situations there is shared responsibility. Are
                                             your colleagues informed? It may help to get others involved and discuss the problem.
                                          </li>
                                          <li>
                                             <strong>Discuss the problem with your supervisor. </strong>You are encouraged to talk to your supervisor
                                             about any issues concerning illegal, unethical or improper behavior and when in doubt
                                             about the best course of action in a particular situation. This is the basic guidance for all
                                             situations. In many cases your supervisor will be more knowledgeable about the
                                             question, and will appreciate being brought into the decision-making process.
                                             Remember it is your supervisor’s responsibility to help solve problems.
                                          </li>
                                          <li>
                                             <strong>Report serious violations to the Company’s CEO.</strong> You should report serious violations
                                             that have not been properly addressed by your supervisor or other resources of the
                                             Company to the CEO. However, if it is not appropriate to discuss an issue with the CEO,
                                             or if you believe that the CEO has not properly addressed the violations, you may contact
                                             any independent director of the Board of Directors. In the rare case that you become
                                             aware of a material legal violation or a breach of fiduciary duty by an employee of the
                                             Company, address your concerns to: Nominating/Corporate Governance Committee
                                             Chairman, Singularity Future Technology, Ltd. 98 Cutter Mill Rd Suite 322, Great Neck, NY 11021.
                                          </li>
                                          <li>
                                             <strong>Reporting of accounting issues.</strong> If you are aware of an issue concerning accounting,
                                             auditing or the Company’s internal accounting controls, address your concerns with the
                                             Company’s internal audit function or to the CEO. In the event that you believe that the
                                             Company has not properly responded to the issue, you may address your concerns to:
                                             Audit Committee Chairman, Singularity Future Technology, Ltd. 98 Cutter Mill Rd Suite 322, Great Neck, NY 11021.
                                          </li>
                                          <li>
                                             <strong>You may report any possible violation in confidence and without fear of retaliation. </strong>If
                                             your situation requires that your identity be kept secret, your anonymity will be protected
                                             and you will be guaranteed confidentiality in the handling of your claim. It is the policy of
                                             the Company not to allow retaliation for reports of misconduct by others made in good
                                             faith by employees. Employees are expected to cooperate in internal investigations of
                                             misconduct.
                                          </li>
                                          <li>
                                             <strong>Always ask first, act later:</strong>If you are unsure of, what to do in any situation, seek guidance
                                             before you act.
                                          </li>
                                       </ul>
                                    </li>
                                 </ol>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div id="about-main">
         <div class="story-container">
            <div class="need-for-dx-container">
               <!-- Board Section
                  –––––––––––––––––––––––––––––––––––––––––––––––––– -->  
               <section id="workforce">
                  <div class="row">
                     <h4> WORKFORCE</h4>
                     <div class="block"></div>
                  </div>
                  <div class="container">
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
               </section>
            </div>
         </div>
      </div>
         <!-------------Footer markups--------------->
         <div class="column-12 column-xs-12 column-sm-12 tab"style="margin-top:-100px">
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
         <script src="js/board.js" type="text/javascript"></script>
      </body>
      </body>
   </html>
   `;
