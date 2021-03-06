import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import SubItem from 'styled/List';

import * as ROUTES from 'constants/routes';

const agreeTextTOS = (
  <Card.Text>
    I agree to the Jurne <Link to={ROUTES.TERMS} style={{textDecoration: 'none'}}>Terms of Service</Link> and <Link to={ROUTES.PRIVACY} style={{textDecoration: 'none'}}>Privacy Policy</Link>.
  </Card.Text>
);

const TermsPage = () => (
  <Container>
    <Card className='mt-4 mb-4'>
      <Card.Body>
        <Card.Title className='text-center'>Jurne, Inc. Terms of Service</Card.Title>
        <hr />
        <Card.Text>Last Updated: 12/13/2019</Card.Text>
        <Card.Text>Welcome, and thank you for your interest in Jurne, Inc.
          (“<strong>Jurne</strong>,” “<strong>we</strong>,” or “<strong>us</strong>”)
          and our website at thejurne.com, along with our related websites, networks,
          applications, mobile applications, and other services provided by us
          (collectively, the “<strong>Service</strong>”). These Terms of Service are a legally binding
          contract between you and Jurne regarding your use of the Service.
        </Card.Text>
        <Card.Text className='text-center'><strong>PLEASE READ THE FOLLOWING TERMS CAREFULLY.</strong></Card.Text>
        <Card.Text><strong>BY CLICKING </strong>“<strong>I ACCEPT,</strong>”<strong> OR BY DOWNLOADING, INSTALLING,
          OR OTHERWISE ACCESSING OR USING THE SERVICE,</strong>
          YOU AGREE THAT YOU HAVE READ AND UNDERSTOOD, AND, AS A CONDITION TO YOUR USE OF THE SERVICE,
          YOU AGREE TO BE BOUND BY, THE FOLLOWING TERMS AND CONDITIONS, INCLUDING JURNE’S PRIVACY POLICY
          (TOGETHER, THESE “<strong>TERMS</strong>”). IF YOU ARE NOT ELIGIBLE, OR DO NOT AGREE TO THE TERMS,
          THEN YOU DO NOT HAVE OUR PERMISSION TO USE THE SERVICE. YOUR USE OF THE SERVICE, AND JURNE’S PROVISION
          OF THE SERVICE TO YOU, CONSTITUTES AN AGREEMENT BY JURNE AND BY YOU TO BE BOUND BY THESE TERMS.
        </Card.Text>
        <Card.Text>
          <strong>ARBITRATION NOTICE.</strong> Except for certain kinds of disputes described in Section
          15, you agree that disputes arising under these Terms will be resolved by binding, individual
          arbitration, and BY ACCEPTING THESE TERMS, YOU AND JURNE ARE EACH WAIVING THE RIGHT TO A TRIAL
          BY JURY OR TO PARTICIPATE IN ANY CLASS ACTION OR REPRESENTATIVE PROCEEDING. YOU AGREE TO
          GIVE UP YOUR RIGHT TO GO TO COURT to assert or defend your rights under this contract (except
          for matters that may be taken to small claims court). Your rights will be determined by a
          NEUTRAL ARBITRATOR and NOT a judge or jury. (See Section 15.)
        </Card.Text>
        <Card.Text>
          <strong>ELECTRONIC SIGNATURES.</strong> By agreeing to these Terms, you consent to signing certain
          legal documents electronically, as further described in Section 6.
        </Card.Text>
        <ul className='pl-3' type='none'>
          <li className='mb-2 mt-2'>
            <strong>1. Jurne Service Overview.</strong> We offer a platform that is free for consumers who would
            like to test drive a car (the “<strong>Test Drive</strong>”) at one of our partner dealerships (the “<strong>Dealership</strong>”)
            to fill out the necessary paperwork online (the “<strong>Test Drive Application</strong>”). In other words, we are an
            intermediary streamlining the initial interactions between you and the Dealership.
          </li>
          <li className='mb-2 mt-2'>
            <strong>2. Eligibility.</strong> You must be at least 18 years old and have a valid driver’s
            license to use the Service. Depending on the Dealership, you may be required to provide additional
            information such as proof of insurance to complete a Test Drive Application. By agreeing to these
            Terms, you represent and warrant to us that: (a) you are at least 18 years old; (b) you have a
            valid driver’s license; (c) you have not previously been suspended or removed from the Service; and
            (d) your registration and your use of the Service is in compliance with any and all applicable laws
            and regulations. If you are an entity, organization, or company, the individual accepting these
            Terms on your behalf represents and warrants that they have authority to bind you to these Terms
            and you agree to be bound by these Terms.
          </li>
          <li className='mb-2 mt-2'>
            <strong>3. Accounts and Registration.</strong> To access most features of the Service, you must register
            for an account. When you register for an account, you may be required to provide us with some
            information about yourself, such as your name, email address, phone number, or other contact
            information, and your date of birth. You agree that the information you provide to us is accurate and
            that you will keep it accurate and up-to-date at all times. When you register, you will be asked to
            provide a password. You are solely responsible for maintaining the confidentiality of your account
            and password, and you accept responsibility for all activities that occur under your account. If you
            believe that your account is no longer secure, then you must immediately notify us at david@thejurne.com.
          </li>
            <li className='mb-2 mt-2'>
              <strong>4. Licenses</strong>
              <ul type='none' className='p-0 m-0'>
                <SubItem prefix='4.1'>
                  <strong>Limited License.</strong> Subject to your complete and ongoing compliance with these Terms, Jurne grants
                  you, solely for your personal, non-commercial use, a limited, non-exclusive, non-transferable,
                  non-sublicensable, revocable license to: (a) install and use one object code copy of any mobile
                  application associated with the Service obtained from a legitimate marketplace (whether installed
                  by you or pre-installed on your mobile device by the device manufacturer) on a mobile device that
                  you own or control; and (b) access and use the Service.
                </SubItem>
                <SubItem prefix='4.2'>
                  <strong>License Restrictions.</strong> Except and solely to the extent such a restriction is impermissible under
                  applicable law, you may not: (a) reproduce, distribute, publicly display, or publicly perform the
                  Service; (b) make modifications to the Service; or (c) interfere with or circumvent any feature of
                  the Service, including any security or access control mechanism. If you are prohibited under
                  applicable law from using the Service, you may not use it.
                </SubItem>
                <SubItem prefix='4.3'>
                  <strong>Feedback.</strong> If you choose to provide input and suggestions regarding problems with or proposed
                  modifications or improvements to the Service (“<strong>Feedback</strong>”), then you hereby grant Jurne an
                  unrestricted, perpetual, irrevocable, non-exclusive, fully-paid, royalty-free right to exploit the
                  Feedback in any manner and for any purpose, including to improve the Service and create other
                  products and services.
                </SubItem>
              </ul>
            </li>
            <li className='mb-2 mt-2'>
              <strong>5. Ownership; Proprietary Rights.</strong> The Service is owned and operated by Jurne. The
              visual interfaces, graphics, design, compilation, information, data, computer code (including
              source code or object code), products, software, services, and all other elements of the Service
              (“<strong>Materials</strong>”) provided by Jurne are protected by intellectual property and other laws. All Materials
              included in the Service are the property of Jurne or its third party licensors. Except as expressly
              authorized by Jurne, you may not make use of the Materials. Jurne reserves all rights to the Materials
              not granted expressly in these Terms.
            </li>
            <li className='mb-2 mt-2'>
              <strong>6. Consent to E-Signatures.</strong> By signing and submitting a Test Drive Application on the
              Service, you consent to signing the Test Drive Application electronically and to have Jurne collect,
              retain, and provide your e-signature to the Dealership for the sole purpose of providing the Service.
              You represent and warrant that you would only sign the Test Drive Application on your own behalf
              (or, on behalf of the organization for which you are authorized to sign).
            </li>
            <li className='mb-2 mt-2'>
              <strong>7. Third Party Terms</strong>
              <ul type='none' className='p-0 m-0'>
                <SubItem prefix='7.1'>
                  <strong>Third Party Services and Linked Websites.</strong> Jurne may provide tools through the Service
                  that enable you to export information to third party services. By using one of these tools,
                  you agree that Jurne may transfer that information to the applicable third party service. Third
                  party services are not under Jurne’s control, and, to the fullest extent permitted by law, Jurne
                  is not responsible for any third party service’s use of your exported information. The Service
                  may also contain links to third party websites, such as websites of the Dealerships. Linked
                  websites are not under Jurne’s control, and Jurne is not responsible for their content.
                </SubItem>
                <SubItem prefix='7.2'>
                  <strong>Third Party Software.</strong> The Service may include or incorporate third
                  party software components that are generally available free of charge under licenses granting
                  recipients broad rights to copy, modify, and distribute those components (“<strong>Third Party
                  Components</strong>”). Although the Service is provided to you subject to these Terms, nothing in these
                  Terms prevents, restricts, or is intended to prevent or restrict you from obtaining Third Party
                  Components under the applicable third party licenses or to limit your use of Third Party
                  Components under those third party licenses.
                </SubItem>
              </ul>
            </li>
            <li className='mb-2 mt-2'>
              <strong>8. Communications.</strong>
              <ul type='none' className='p-0 m-0'>
                <SubItem prefix='8.1'>
                  <strong>Push Notifications.</strong> When you install our app on your mobile device,
                  you agree to receive push notifications, which are messages an app sends you on your mobile
                  device when the app is not on. You can turn off notifications by visiting your mobile device’s
                  “settings” page.
                </SubItem>
                <SubItem prefix='8.2'>
                  <strong>Email.</strong> We will send you emails to notify you when your account is created,
                  to send you a link to recover your account password, or to answer your questions. We may send
                  you emails concerning our products and services, as well as those of third parties. You may opt
                  out of promotional emails by following the unsubscribe instructions in the promotional email itself.
                </SubItem>
              </ul>
            </li>
            <li className='mb-2 mt-2'>
              <strong>9. Prohibited Conduct.</strong> BY USING THE SERVICE YOU AGREE NOT TO:
              <ul type='none' className='p-0 m-0'>
                <SubItem prefix='a.'>
                  use the Service for any illegal purpose or in violation of any local, state, national, or
                  international law;
                </SubItem>
                <SubItem prefix='b.'>
                  violate, or encourage others to violate, any right of a third party, including by infringing
                  or misappropriating any third party intellectual property right;
                </SubItem>
                <SubItem prefix='c.'>
                  interfere with security-related features of the Service, including by: (i) disabling or
                  circumventing features that prevent or limit use or copying of any content; or (ii) reverse
                  engineering or otherwise attempting to discover the source code of any portion of the Service
                  except to the extent that the activity is expressly permitted by applicable law;
                </SubItem>
                <SubItem prefix='d.'>
                  interfere with the operation of the Service or any user’s enjoyment of the Service, including
                  by: (i) uploading or otherwise disseminating any virus, adware, spyware, worm, or other
                  malicious code; (ii) collecting personal information about another user or third party without
                  consent; or (iii) interfering with or disrupting any network, equipment, or server connected
                  to or used to provide the Service;
                </SubItem>
                <SubItem prefix='e.'>
                  perform any fraudulent activity including impersonating any person or entity, claiming a false
                  affiliation, accessing any other Service account without permission, or falsifying your age
                  or date of birth;
                </SubItem>
                <SubItem prefix='f.'>
                  sell or otherwise transfer the access granted under these Terms or any Materials (as defined
                  in Section 5) or any right or ability to view, access, or use any Materials; or
                </SubItem>
                <SubItem prefix='g.'>
                  attempt to do any of the acts described in this Section 9 or assist or permit any person in
                  engaging in any of the acts described in this Section 9.
                </SubItem>
              </ul>
            </li>
            <li className='mb-2 mt-2'>
              <strong>10. Modification of these Terms.</strong> We reserve the right to change these Terms on a
              going-forward basis at any time upon 7 days’ notice. Please check these Terms periodically for
              changes. If a change to these Terms materially modifies your rights or obligations, we may require
              that you accept the modified Terms in order to continue to use the Service. Material modifications
              are effective upon your acceptance of the modified Terms. Immaterial modifications are effective
              upon publication. Except as expressly permitted in this Section 10, these Terms may be amended only
              by a written agreement signed by authorized representatives of the parties to these Terms. Disputes
              arising under these Terms will be resolved in accordance with the version of these Terms that was
              in effect at the time the dispute arose.
            </li>
            <li className='mb-2 mt-2'>
              <strong>11. Term, Termination and Modification of the Service</strong>
              <ul type='none' className='p-0 m-0'>
                <SubItem prefix='11.1'>
                  <strong>Term.</strong> These Terms are effective beginning when you accept the Terms or
                  first download, install, access, or use the Service, and ending when terminated as described in
                  Section 11.2.
                </SubItem>
                <SubItem prefix='11.2'>
                  <strong>Termination.</strong> If you violate any provision of these Terms, your
                  authorization to access the Service and these Terms automatically terminate. In addition,
                  Jurne may, at its sole discretion, terminate these Terms or your account on the Service, or
                  suspend or terminate your access to the Service, at any time for any reason or no reason, with
                  or without notice. You may terminate your account and these Terms at any time by contacting
                  customer service at David@thejurne.com.
                </SubItem>
                <SubItem prefix='11.3'>
                  <strong>Effect of Termination.</strong> Upon termination of these Terms: (a) your license
                  rights will terminate and you must immediately cease all use of the Service; and (b) you will
                  no longer be authorized to access your account or the Service. Sections [4.3, 5, 11.3, 12, 13,
                  14, 15, 16 and 17] will survive.
                </SubItem>
                <SubItem prefix='11.4'>
                  <strong>Modification of the Service.</strong> Jurne reserves the right to modify or
                  discontinue the Service at any time (including by limiting or discontinuing certain features
                  of the Service), temporarily or permanently, without notice to you. Jurne will have no liability
                  for any change to the Service or any suspension or termination of your access to or use of the
                  Service.
                </SubItem>
              </ul>
            </li>
            <li className='mb-2 mt-2'>
              <strong>12. Indemnity.</strong> To the fullest extent permitted by law, you are responsible for your
              use of the Service, and you will defend and indemnify Jurne and its officers, directors, employees,
              consultants, affiliates, subsidiaries and agents (together, the “Jurne Entities”) from and against
              every claim brought by a third party, and any related liability, damage, loss, and expense, including
              reasonable attorneys’ fees and costs, arising out of or connected with: (a) your unauthorized use of,
              or misuse of, the Service; (b) your violation of any portion of these Terms, any representation,
              warranty, or agreement referenced in these Terms, or any applicable law or regulation; (c) your
              violation of any third party right, including any intellectual property right or publicity,
              confidentiality, other property, or privacy right; or (d) any dispute or issue between you and any
              third party. We reserve the right, at our own expense, to assume the exclusive defense and control
              of any matter otherwise subject to indemnification by you (without limiting your indemnification
              obligations with respect to that matter), and in that case, you agree to cooperate with our defense
              of those claims.

            </li>
            <li className='mb-2 mt-2'>
              <strong>13. Disclaimers; No Warranties</strong>
              <p>
                THE TEST DRIVE APPLICATIONS AND ANY AND ALL OTHER AGREEMENTS THAT YOU MAY ENTER INTO WITH A
                DEALERSHIP FOR PURPOSES OF THE TEST DRIVE OR THE ENSUING RENTAL OR PURCHASE OF A VEHICLE OR
                OTHERWISE (TOGETHER, THE “DEALERSHIP AGREEMENTS”) ARE SOLELY BETWEEN YOU AND THE DEALERSHIP.
                JURNE IS NOT A PARTY TO ANY OF THE DEALERSHIP AGREEMENTS, AND ANY LIABILITY THAT ARISES FROM
                THEM LIES BETWEEN YOU AND THE DEALERSHIP. BY PROVIDING THE SERVICE AND MAKING AVAILABLE INFORMATION
                ABOUT THE TEST DRIVE AND THE DEALERSHIPS, JURNE DOES NOT MAKE ANY REPRESENTATION OR WARRANTY WITH
                RESPECT TO ANY TEST DRIVE, DEALERSHIP, OR DEALERSHIP AGREEMENTS. FURTHER, NO ADVICE OR INFORMATION,
                WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM THE SERVICE OR JURNE ENTITIES OR ANY MATERIALS OR
                CONTENT AVAILABLE THROUGH THE SERVICE WILL CREATE ANY WARRANTY REGARDING ANY OF THE JURNE ENTITIES
                OR THE SERVICE THAT IS NOT EXPRESSLY STATED IN THESE TERMS. WE ARE NOT RESPONSIBLE FOR ANY DAMAGE
                THAT MAY RESULT FROM THE SERVICE AND YOUR DEALING WITH ANY OTHER SERVICE USER OR WITH ANY
                DEALERSHIP. YOU UNDERSTAND AND AGREE THAT YOU USE ANY PORTION OF THE SERVICE AT YOUR OWN DISCRETION
                AND RISK, AND THAT WE ARE NOT RESPONSIBLE FOR ANY DAMAGE TO YOUR PROPERTY (INCLUDING YOUR COMPUTER
                SYSTEM OR MOBILE DEVICE USED IN CONNECTION WITH THE SERVICE) OR ANY LOSS OF DATA, INCLUDING ANY
                INFORMATION YOU PROVIDE TO JURNE OR THE DEALERSHIP.
              </p>
              <p>
                THE SERVICE AND ALL MATERIALS AND CONTENT AVAILABLE THROUGH THE SERVICE ARE PROVIDED “AS IS” AND
                ON AN “AS AVAILABLE” BASIS. JURNE DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED,
                RELATING TO THE SERVICE AND ALL MATERIALS AND CONTENT AVAILABLE THROUGH THE SERVICE, INCLUDING:
                (A) ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET
                ENJOYMENT, OR NON-INFRINGEMENT; AND (B) ANY WARRANTY ARISING OUT OF COURSE OF DEALING, USAGE,
                OR TRADE. JURNE DOES NOT WARRANT THAT THE SERVICE OR ANY PORTION OF THE SERVICE, OR ANY MATERIALS
                OR CONTENT OFFERED THROUGH THE SERVICE, WILL BE ACCURATE, UNINTERRUPTED, SECURE, OR FREE OF ERRORS,
                VIRUSES, OR OTHER HARMFUL COMPONENTS, AND JURNE DOES NOT WARRANT THAT ANY OF THOSE ISSUES WILL BE
                CORRECTED. YOU ENTER INTO DEALERSHIP AGREEMENTS AND TAKE TEST DRIVES AT YOUR OWN RISK.
              </p>
              <p>
                THE LIMITATIONS, EXCLUSIONS AND DISCLAIMERS IN THIS SECTION APPLY TO THE FULLEST EXTENT PERMITTED
                BY LAW. Jurne does not disclaim any warranty or other right that Jurne is prohibited from
                disclaiming under applicable law.
              </p>
            </li>
            <li className='mb-2 mt-2'>
              <strong>14. Limitation of Liability</strong>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE JURNE ENTITIES BE LIABLE TO YOU FOR
                ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES (INCLUDING DAMAGES FOR LOSS
                OF PROFITS, GOODWILL, OR ANY OTHER INTANGIBLE LOSS) ARISING OUT OF OR RELATING TO YOUR ACCESS TO
                OR USE OF, OR YOUR INABILITY TO ACCESS OR USE, THE SERVICE OR ANY MATERIALS OR CONTENT ON THE
                SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER
                LEGAL THEORY, AND WHETHER OR NOT ANY JURNE ENTITY HAS BEEN INFORMED OF THE POSSIBILITY OF DAMAGE.
              </p>
              <p>
                EXCEPT AS PROVIDED IN SECTION 15.5 AND TO THE FULLEST EXTENT PERMITTED BY LAW, THE AGGREGATE
                LIABILITY OF THE JURNE ENTITIES TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE USE OF
                OR ANY INABILITY TO USE ANY PORTION OF THE SERVICE OR OTHERWISE UNDER THESE TERMS, WHETHER IN
                CONTRACT, TORT, OR OTHERWISE, IS LIMITED TO $100.
              </p>
              <p>
                EACH PROVISION OF THESE TERMS THAT PROVIDES FOR A LIMITATION OF LIABILITY, DISCLAIMER OF
                WARRANTIES, OR EXCLUSION OF DAMAGES IS INTENDED TO AND DOES ALLOCATE THE RISKS BETWEEN THE
                PARTIES UNDER THESE TERMS. THIS ALLOCATION IS AN ESSENTIAL ELEMENT OF THE BASIS OF THE BARGAIN
                BETWEEN THE PARTIES. EACH OF THESE PROVISIONS IS SEVERABLE AND INDEPENDENT OF ALL OTHER PROVISIONS
                OF THESE TERMS. THE LIMITATIONS IN THIS SECTION 14 WILL APPLY EVEN IF ANY LIMITED REMEDY FAILS OF
                ITS ESSENTIAL PURPOSE.
              </p>
            </li>
            <li className='mb-2 mt-2'>
              <strong>15. Dispute Resolution and Arbitration</strong>
              <ul type='none' className='p-0 m-0'>
                <SubItem prefix='15.1'>
                  <strong>Generally.</strong> In the interest of resolving disputes between you and Jurne
                  in the most expedient and cost effective manner, and except as described in Section 15.2 and
                  15.3, you and Jurne agree that every dispute arising in connection with these Terms will be
                  resolved by binding arbitration. Arbitration is less formal than a lawsuit in court. Arbitration
                  uses a neutral arbitrator instead of a judge or jury, may allow for more limited discovery than
                  in court, and can be subject to very limited review by courts. Arbitrators can award the same
                  damages and relief that a court can award. This agreement to arbitrate disputes includes all
                  claims arising out of or relating to any aspect of these Terms, whether based in contract, tort,
                  statute, fraud, misrepresentation, or any other legal theory, and regardless of whether a claim
                  arises during or after the termination of these Terms. YOU UNDERSTAND AND AGREE THAT, BY ENTERING
                  INTO THESE TERMS, YOU AND JURNE ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE
                  IN A CLASS ACTION.
                </SubItem>
                <SubItem prefix='15.2'>
                  <strong>Exceptions.</strong> Despite the provisions of Section 15.1, nothing in these Terms
                  will be deemed to waive, preclude, or otherwise limit the right of either party to: (a) bring an
                  individual action in small claims court; (b) pursue an enforcement action through the applicable
                  federal, state, or local agency if that action is available; (c) seek injunctive relief in a court
                  of law in aid of arbitration; or (d) to file suit in a court of law to address an intellectual
                  property infringement claim.
                </SubItem>
                <SubItem prefix='15.3'>
                  <strong>Opt-Out.</strong> If you do not wish to resolve disputes by binding arbitration,
                  you may opt out of the provisions of this Section 15 within 30 days after the date that you agree
                  to these Terms by sending a letter to Jurne, Inc., Attention: Legal Department – Arbitration
                  Opt-Out, 1901 148th St. SE, Mill Creek, WA 98012, that specifies: your full legal name, the email
                  address associated with your account on the Service, and a statement that you wish to opt out of
                  arbitration (“<strong>Opt-Out Notice</strong>”). Once Jurne receives your Opt-Out Notice, this
                  Section 15 will be void and any action arising out of these Terms will be resolved as set forth
                  in Section 16.2. The remaining provisions of these Terms will not be affected by your Opt-Out Notice.
                </SubItem>
                <SubItem prefix='15.4'>
                  <strong>Arbitrator.</strong> Any arbitration between you and Jurne will be settled under the
                  Federal Arbitration Act and administered by the American Arbitration Association
                  (“<strong>AAA</strong>”) under its Consumer Arbitration Rules (collectively,
                  “<strong>AAA Rules</strong>”) as modified by these Terms. The AAA Rules and filing forms are
                  available online at <a href='https://www.adr.org'>www.adr.org</a>, by calling the AAA at
                  1-800-778-7879, or by contacting Jurne. The arbitrator has exclusive authority to resolve any
                  dispute relating to the interpretation, applicability, or enforceability of this binding arbitration
                  agreement.
                </SubItem>
                <SubItem prefix='15.5'>
                  <strong>Notice of Arbitration; Process.</strong> A party who intends to seek arbitration must
                  first send a written notice of the dispute to the other party by certified U.S. Mail or by Federal
                  Express (signature required) or, only if that other party has not provided a current physical
                  address, then by electronic mail (“<strong>Notice of Arbitration</strong>”). Jurne’s address for
                  Notice is: Jurne, Inc., 1901 148th St. SE, Mill Creek, WA 98012. The Notice of Arbitration must:
                  (a) describe the nature and basis of the claim or dispute; and (b) set forth the specific relief sought
                  (“<strong>Demand</strong>”). The parties will make good faith efforts to resolve the claim directly,
                  but if the parties do not reach an agreement to do so within 30 days after the Notice of Arbitration is received, you or Jurne
                  may commence an arbitration proceeding. All arbitration proceedings between the parties will be
                  confidential unless otherwise agreed by the parties in writing. During the arbitration, the amount
                  of any settlement offer made by you or Jurne must not be disclosed to the arbitrator until after the
                  arbitrator makes a final decision and award, if any. If the arbitrator awards you an amount higher
                  than the last written settlement amount offered by Jurne in settlement of the dispute prior to the
                  award, Jurne will pay to you the higher of: (i) the amount awarded by the arbitrator; or (ii) $10,000.
                </SubItem>
                <SubItem prefix='15.6'>
                  <strong>Fees.</strong> If you commence arbitration in accordance with these Terms, Jurne will
                  reimburse you for your payment of the filing fee, unless your claim is for more than $10,000, in
                  which case the payment of any fees will be decided by the AAA Rules. Any arbitration hearing will
                  take place at a location to be agreed upon in King County, Washington, but if the claim is for
                  $10,000 or less, you may choose whether the arbitration will be conducted: (a) solely on the basis of
                  documents submitted to the arbitrator; (b) through a non-appearance based telephone hearing; or (c)
                  by an in-person hearing as established by the AAA Rules in the county (or parish) of your billing
                  address. If the arbitrator finds that either the substance of your claim or the relief sought in the
                  Demand is frivolous or brought for an improper purpose (as measured by the standards set forth in
                  Federal Rule of Civil Procedure 11(b)), then the payment of all fees will be governed by the AAA
                  Rules. In that case, you agree to reimburse Jurne for all monies previously disbursed by it that
                  are otherwise your obligation to pay under the AAA Rules. Regardless of the manner in which the
                  arbitration is conducted, the arbitrator must issue a reasoned written decision sufficient to explain
                  the essential findings and conclusions on which the decision and award, if any, are based. The
                  arbitrator may make rulings and resolve disputes as to the payment and reimbursement of fees or
                  expenses at any time during the proceeding and upon request from either party made within 14 days
                  of the arbitrator’s ruling on the merits.
                </SubItem>
                <SubItem prefix='15.7'>
                  <strong>No Class Actions.</strong> YOU AND JURNE AGREE THAT EACH MAY BRING CLAIMS AGAINST
                  THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY
                  PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. Further, unless both you and Jurne agree otherwise,
                  the arbitrator may not consolidate more than one person’s claims, and may not otherwise preside
                  over any form of a representative or class proceeding.
                </SubItem>
                <SubItem prefix='15.8'>
                  <strong>Modifications to this Arbitration Provision.</strong> If Jurne makes any future change
                  to this arbitration provision, other than a change to Jurne’s address for Notice of Arbitration,
                  you may reject the change by sending us written notice within 30 days of the change to Jurne’s address
                  for Notice of Arbitration, in which case your account with Jurne will be immediately terminated and this
                  arbitration provision, as in effect immediately prior to the changes you rejected will survive.
                </SubItem>
                <SubItem prefix='15.9'>
                  <strong>Enforceability.</strong> If Section 15.7 or the entirety of this Section 15 is found
                  to be unenforceable, or if Jurne receives an Opt-Out Notice from you, then the entirety of this
                  Section 15 will be null and void and, in that case, exclusive jurisdiction and venue described in
                  Section 16.2 will govern any action arising out of or related to these Terms.
                </SubItem>
              </ul>
            </li>
            <li className='mb-2 mt-2'>
              <strong>16. Miscellaneous</strong>
              <ul type='none' className='p-0 m-0'>
                <SubItem prefix='16.1'>
                  <strong>General Terms.</strong> These Terms, together with the Privacy Policy and any
                  other agreements expressly incorporated by reference into these Terms, are the entire and
                  exclusive understanding and agreement between you and Jurne regarding your use of the Service.
                  You may not assign or transfer these Terms or your rights under these Terms, in whole or in part,
                  by operation of law or otherwise, without our prior written consent. We may assign these Terms at
                  any time without notice or consent. These Terms are between you and Jurne (or its assigns), and
                  there are no intended third party beneficiaries under these Terms. The failure to require performance
                  of any provision will not affect our right to require performance at any other time after that, nor
                  will a waiver by us of any breach or default of these Terms, or any provision of these Terms, be a
                  waiver of any subsequent breach or default or a waiver of the provision itself. Use of section
                  headers in these Terms is for convenience only and will not have any impact on the interpretation
                  of any provision. Throughout these Terms the use of the word “including” means “including but not
                  limited to”. If any part of these Terms is held to be invalid or unenforceable, the unenforceable
                  part will be given effect to the greatest extent possible, and the remaining parts will remain in
                  full force and effect.
                </SubItem>
                <SubItem prefix='16.2'>
                  <strong>Governing Law.</strong> These Terms are governed by the laws of the State of Washington
                  without regard to conflict of law principles. You and Jurne submit to the personal and exclusive
                  jurisdiction of the state courts and federal courts located within King County, Washington for
                  resolution of any lawsuit or court proceeding permitted under these Terms. We operate the Service
                  from our offices in Washington, and we make no representation that Materials included in the Service
                  are appropriate or available for use in other locations.

                </SubItem>
                <SubItem prefix='16.3'>
                  <strong>Privacy Policy.</strong> Please read the
                  Jurne <Link to={ROUTES.PRIVACY}>Privacy Policy</Link> carefully for information relating to our
                  collection, use, storage, disclosure of your personal information. The Jurne Privacy Policy is
                  incorporated by this reference into, and made a part of, these Terms.
                </SubItem>
                <SubItem prefix='16.4'>
                  <strong>Additional Terms.</strong> Your use of the Service is subject to all additional
                  terms, policies, rules, or guidelines applicable to the Service or certain features of the
                  Service that we may post on or link to from the Service (the “Additional Terms”). All Additional
                  Terms are incorporated by this reference into, and made a part of, these Terms. For clarity,
                  any terms in the Test Drive Applications or any other Dealership Agreements are not part of
                  these Terms.
                </SubItem>
                <SubItem prefix='16.5'>
                  <strong>Consent to Electronic Communications.</strong> By using the Service, you consent
                  to receiving certain electronic communications from us as further described in our Privacy
                  Policy. Please read our Privacy Policy to learn more about our electronic communications
                  practices. You agree that any notices, agreements, disclosures, or other communications that
                  we send to you electronically will satisfy any legal communication requirements, including that
                  those communications be in writing.
                </SubItem>
                <SubItem prefix='16.6'>
                  <strong>Contact Information.</strong> The Service is offered by Jurne, Inc., located at
                  1901 148th St. SE, Mill Creek, WA 98012. You may contact us by sending correspondence to that
                  address or by emailing us at David@thejurne.com.
                </SubItem>
                <SubItem prefix='16.7'>
                  <strong>Notice to California Residents.</strong> If you are a California resident, under
                  California Civil Code Section 1789.3, you may contact the Complaint Assistance Unit of the
                  Division of Consumer Services of the California Department of Consumer Affairs in writing at
                  1625 N. Market Blvd., Suite S-202, Sacramento, California 95834, or by telephone at (800) 952-5210
                  in order to resolve a complaint regarding the Service or to receive further information regarding
                  use of the Service.
                </SubItem>
                <SubItem prefix='16.8'>
                  <strong>No Support.</strong> We are under no obligation to provide support for the Service.
                  In instances where we may offer support, the support will be subject to published policies.
                </SubItem>
                <SubItem prefix='16.9'>
                  <strong>International Use.</strong> The Service is intended for visitors located within
                  the United States. We make no representation that the Service is appropriate or available for
                  use outside of the United States. Access to the Service from countries or territories or by
                  individuals where such access is illegal is prohibited.
                </SubItem>
              </ul>
            </li>
            <li className='mb-2 mt-2'>
              <strong>17. Notice Regarding Apple.</strong> This Section 17 only applies to the extent you are using
              our mobile application on an iOS device. You acknowledge that these Terms are between you and
              Jurne only, not with Apple Inc. (“<strong>Apple</strong>”), and Apple is not responsible for the Service or the
              content thereof. Apple has no obligation to furnish any maintenance and support services with
              respect to the Service. If the Service fails to conform to any applicable warranty, you may notify
              Apple and Apple will refund any applicable purchase price for the mobile application to you; and,
              to the maximum extent permitted by applicable law, Apple has no other warranty obligation with
              respect to the Service. Apple is not responsible for addressing any claims by you or any third
              party relating to the Service or your possession and/or use of the Service, including: (a) product
              liability claims; (b) any claim that the Service fails to conform to any applicable legal or
              regulatory requirement; or (c) claims arising under consumer protection or similar legislation.
              Apple is not responsible for the investigation, defense, settlement and discharge of any third
              party claim that the Service and/or your possession and use of the Service infringe a third party’s
              intellectual property rights. You agree to comply with any applicable third party terms when using
              the Service. Apple and Apple’s subsidiaries are third party beneficiaries of these Terms, and upon
              your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the
              right) to enforce these Terms against you as a third party beneficiary of these Terms. You hereby
              represent and warrant that: (i) you are not located in a country that is subject to a U.S. Government
              embargo, or that has been designated by the U.S. Government as a “terrorist supporting” country;
              and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties.
            </li>
        </ul>
      </Card.Body>
    </Card>
  </Container>
);

export { agreeTextTOS };
export default TermsPage;