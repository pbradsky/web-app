import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Container from 'styled/Container';

import * as ROUTES from 'constants/routes';

const PrivacyPage = () => (
  <Container>
    <Card>
      <Card.Body>
        <Card.Title className='text-center'>Jurne, Inc. Privacy Policy</Card.Title>
        <hr />
        <Card.Text>Last Updated: 12/23/2019</Card.Text>
        <Card.Text><strong>Introduction</strong></Card.Text>
        <Card.Text>
          Jurne, Inc. (<strong>“Jurne,” “we,” “our,” and/or “us”</strong>) values the privacy of individuals who use our website, the Jurne Web Application, Virtual Contracting Services, and related services (collectively, our <strong>“Services”</strong>). This privacy policy (the <strong>“Privacy Policy”</strong>) explains how we collect, use, and share information from users of our Services (<strong>“Users”</strong>). By using our Services, you agree to the collection, use, disclosure, and procedures this Privacy Policy describes. Beyond the Privacy Policy, your use of our Services is also subject to our <Link to={ROUTES.TERMS}>Terms of Service</Link>.
        </Card.Text>
        <Card.Text><strong>Information We Collect</strong></Card.Text>
        <Card.Text>
          We may collect a variety of information from or about you or your devices from various sources, as described below.
        </Card.Text>
        <Card.Text>
          If you do not provide your information when requested, you may not be able to use our Services if that information is necessary to provide you with our Services or if we are legally required to collect it.
        </Card.Text>
        <Card.Text>
          <ol type='A'>
            <li>
              <strong>Information You Provide to Us.</strong>
              <ul type='none'>
                <li className='mt-2 mb-2'>
                  <strong>Registration and Profile Information.</strong> When you sign up for an account or use our Services to schedule a test drive, we will ask you for your name, physical address, email address, telephone number, date of birth, and driver’s license number. When you schedule a test drive, we will also ask for an uploaded photo of your driver’s license and proof of insurance.  If you sign up using a Google or Facebook account, we will also receive information from their services such as your name, email address, gender, date of birth, profile photo, and friends.
                </li>
                <li className='mt-2 mb-2'>
                  <strong>Communications.</strong> If you contact us directly, we may receive additional information about you. For example, when you contact us for support, we will receive your name, email address, phone number, and the contents of your support issue along with any other information you chose to provide. If you subscribe to our marketing communications, we will collect certain information from you such as your email address. When we send you emails, we may track whether you open them to learn how to deliver a better customer experience and improve our Services.
                </li>
                <li className='mt-2 mb-2'>
                  <strong>Careers.</strong> If you decide that you wish to apply for a job with us, you may submit your contact information and your resume online. We will collect the information you choose to provide on your resume, such as your education and employment experience. You may also apply through certain third-party websites. If you do so, we will collect the information you make available to us through those websites.
                </li>
              </ul>
            </li>
            <li>
              <strong>Information We Collect When You Use our Services.</strong>
              <ul type='none'>
                <li className='mt-2 mb-2'>
                  <strong>Location Information.</strong> When you use our Services, if you allow us, we will receive your precise location information. We may also collect the precise location of your device when our Services are running in the foreground or background or when the app is closed. We use your location information to help connect you with dealerships in your area.  We will also use your location information to track the location of the vehicles.  We may also infer your general location information, for example by using your internet protocol (IP) address.
                </li>
                <li className='mt-2 mb-2'>
                  <strong>Device Information.</strong> We receive information about the device and software you use to access our Services, including IP address, web browser type, operating system version, phone carrier and manufacturer, application installations, device identifiers, geolocation information, mobile advertising identifiers, and push notification tokens.
                </li>
                <li className='mt-2 mb-2'>
                  <strong>Usage Information.</strong> To help us understand how you use our Services and to help us improve them, we automatically receive information about your interactions with them, like the pages or other content you view, the searches you conduct, the length of time you spend on a page,  objects such as hyperlinks you click on,  and the dates and times of your visits.
                </li>
                <li className='mt-2 mb-2'>
                  <strong>Information from Cookies and Similar Technologies.</strong> We and our third-party partners may collect information using cookies, pixel tags, or similar technologies. Our third-party partners, such as analytics and advertising partners, may use these technologies to collect information about your online activities over time and across different services. Cookies are small text files containing a string of alphanumeric characters. We may use both session cookies and persistent cookies. A session cookie disappears after you close your browser. A persistent cookie remains after you close your browser and may be used by your browser on subsequent visits to our Services.
                </li>
                <li className='mt-2 mb-2'>
                 Please review your web browser’s “Help” file to learn the proper way to modify your cookie settings. Please note that if you delete or choose not to accept cookies from the Service, you may not be able to utilize the features of the Service to their fullest potential.
                </li>
              </ul>
            </li>
            <li>
              <strong>Information We Receive from Third Parties.</strong>
              <ul type='none'>
                <li className='mt-2 mb-2'>
                  <strong>Information from third party services.</strong> If you choose to link our Services to a third-party account, we may receive information about you, including your profile information, photo, and your use of the third-party account. If you wish to limit the information available to us, you should visit the privacy settings of your third-party accounts to learn about your options.
                </li>
                <li className='mt-2 mb-2'>
                  <strong>Other third parties.</strong> We may receive additional information about you from third parties such as data or marketing partners and combine it with other information we have about you.
                </li>
              </ul>
            </li>
          </ol>
        </Card.Text>
        <Card.Text><strong>How We Use the Information We Collect</strong></Card.Text>
        <Card.Text>
          We use the information we collect:
          <ul>
            <li>To provide, maintain, improve, and enhance our Services;</li>
            <li>To personalize your experience on our Services such as by providing tailored content and recommendations;</li>
            <li>To understand and analyze how you use our Services and develop new products, services, features, and functionality;</li>
            <li>To communicate with you, provide you with updates and other information relating to our Services, provide information that you request, respond to comments and questions, and otherwise provide customer support;</li>
            <li>To update your status on your social networks, to send messages on your behalf to your social networks, and to provide other features and services to you;</li>
            <li>To facilitate the connection of third-party services or applications, such as social networks;</li>
            <li>To schedule your test drive with a dealership(s);</li>
            <li>To track the locations of vehicles;</li>
            <li>For marketing and advertising purposes, such as developing and providing promotional and advertising materials that may be relevant, valuable or otherwise of interest to you;</li>
            <li>For marketing, research, and analytical use by dealerships;</li>
            <li>To generate and disclose anonymized or aggregated data for marketing, research, and other business purposes;</li>
            <li>To send you push notifications;</li>
            <li>To find and prevent fraud, and respond to trust and safety issues that may arise;</li>
            <li>For compliance purposes, including enforcing our Terms of Service or other legal rights, or as may be required by applicable laws and regulations or requested by any judicial process or governmental agency; and</li>
            <li>For other purposes for which we provide specific notice at the time the information is collected.</li>
          </ul>
        </Card.Text>
        <Card.Text><strong>How We Share the Information We Collect</strong></Card.Text>
        <Card.Text>
          We do not share or otherwise disclose information we collect from or about you except as described below or otherwise disclosed to you at the time of the collection.
          <ul type='none'>
            <li className='mt-2 mb-2'>
              <strong>Affiliates.</strong> We may share any information we receive with our affiliates for any of the purposes described in this Privacy Policy.
            </li>
            <li className='mt-2 mb-2'>
              <strong>Vendors and Service Providers.</strong> We may share any information we receive with vendors and service providers retained in connection with the provision of our Services.
            </li>
            <li className='mt-2 mb-2'>
              <strong>Third Party App Integrations.</strong> If you connect a third-party application to our Services, we may share information such as the fact that you used our Services with that third-party.
            </li>
            <li className='mt-2 mb-2'>
              <strong>Social Networks and Other Online Services.</strong> Our Services may allow you to, upon your direction, share information with social networking services, such as Twitter, Facebook and Instagram. You understand and agree that the use of your information by any social networking websites will be governed by the privacy policies of these third-party platforms and your settings on that platform. We encourage you to review their privacy policies.
            </li>
            <li className='mt-2 mb-2'>
              <strong>Marketing.</strong> When you schedule a test drive, we will share your information with dealerships who may use it for direct marketing purposes.
            </li>
            <li className='mt-2 mb-2'>
              <strong>Analytics Partners.</strong> We may use analytics services such as Google Analytics to collect and process certain analytics data. These services may also collect information about your use of other websites, apps, and online resources to help us understand how you use our Services and to help us improve them, we automatically receive information about your interactions with our Services like the pages or other content you view, the searches you conduct, and the dates and times of your visits.
            </li>
            <li className='mt-2 mb-2'>
              <strong>Advertising Partners.</strong> We work with third party advertising partners to show you ads that we think may interest you. Some of our advertising partners are members of the <a href='http://optout.networkadvertising.org/?c=1#!/' target='_blank' rel="noopener noreferrer">Network Advertising Initiative</a> or the <a href='http://optout.aboutads.info/?c=2&lang=EN' target='_blank' rel="noopener noreferrer">Digital Advertising Alliance</a>. If you do not wish to receive personalized ads, please visit their opt-out pages to learn about how you may opt out of receiving web-based personalized ads from member companies. You can access any settings offered by your mobile operating system to limit ad tracking, or you can install the AppChoices mobile app to learn more about how you may opt out of personalized ads in mobile apps.
            </li>
            <li className='mt-2 mb-2'>
              <strong>As Required by Law and Similar Disclosures.</strong> We may access, preserve, and disclose your information if we believe doing so is required or appropriate to: (a) comply with law enforcement requests and legal process, such as a court order or subpoena; (b) respond to your requests; or (c) protect your, our, or others’ rights, property, or safety. For the avoidance of doubt, the disclosure of your information may occur if you send any objectionable content on or through our Services.
            </li>
            <li className='mt-2 mb-2'>
              <strong>Merger, Sale, or Other Asset Transfers.</strong> We may transfer your information to service providers, advisors, potential transactional partners, or other third parties in connection with the consideration, negotiation, or completion of a corporate transaction in which we are acquired by or merged with another company or we sell, liquidate, or transfer all or a portion of our assets. The use of your information following any of these events will be governed by the provisions of this Privacy Policy in effect at the time the applicable information was collected.
            </li>
            <li className='mt-2 mb-2'>
              <strong>Consent.</strong> We may also disclose your information with your permission.
            </li>
          </ul>
        </Card.Text>
        <Card.Text><strong>Your Choices</strong></Card.Text>
        <Card.Text>
          <ul type='none'>
            <li className='mt-2 mb-2'>
              <strong>Location Information.</strong> You can prevent your device from sharing precise location information at any time through your device’s operating system settings. However, location is core to our Services and without it, we may not be able to provide you results of dealerships or allow you to schedule a test drive through our Services.
            </li>
            <li className='mt-2 mb-2'>
              <strong>Marketing Communications.</strong> You can unsubscribe from our promotional emails via the link provided in the emails. Even if you opt-out of receiving promotional messages from us, you will continue to receive administrative messages from us.
            </li>
            <li className='mt-2 mb-2'>
              <strong>Do Not Track.</strong> There is no accepted standard on how to respond to Do Not Track signals, and we do not respond to such signals.
            </li>
            <li className='mt-2 mb-2'>
              If you choose not to provide us with information we collect, some features of our Services may not work as intended.
            </li>
          </ul>
        </Card.Text>
        <Card.Text><strong>Third Parties</strong></Card.Text>
        <Card.Text>
          Our Services may contain links to other websites, products, or services that we do not own or operate.  We are not responsible for the privacy practices of these third parties. Please be aware that this Privacy Policy does not apply to your activities on these third-party services or any information you disclose to these third parties. We encourage you to read their privacy policies before providing any information to them.
        </Card.Text>
        <Card.Text><strong>Security</strong></Card.Text>
        <Card.Text>
          We make reasonable efforts to protect your information by using physical and electronic safeguards designed to improve the security of the information we maintain. However, as no electronic transmission or storage of information can be entirely secure, we can make no guarantees as to the security or privacy of your information.
        </Card.Text>

        <Card.Text><strong>Children’s Privacy</strong></Card.Text>
        <Card.Text>
          We do not knowingly collect, maintain, or use personal information from children under 13 years of age, and no part of our Services are directed to children. If you learn that a child has provided us with personal information in violation of this Privacy Policy, then you may alert us at david@thejurne.com.
        </Card.Text>
        <Card.Text><strong>Your California Privacy Rights</strong></Card.Text>
        <Card.Text>
          If you reside in California and have provided your personal information to us, you may request information once per calendar year about our disclosures of certain categories of personal information to third parties for their direct marketing purposes.  Such requests must be submitted to us in writing at the following email address: david@thejurne.com.
        </Card.Text>
        <Card.Text><strong>International Visitors</strong></Card.Text>
        <Card.Text>
          Our Services are hosted in the United States and intended for visitors located within the United States. If you choose to use our Services from the European Union or other regions of the world with laws governing data collection and use that may differ from U.S. law, then please note that you are transferring your personal information outside of those regions to the United States for storage and processing. Also, we may transfer your data from the U.S. to other countries or regions in connection with storage and processing of data, fulfilling your requests, and operating the Services. By providing any information, including personal information, on or to our Services, you consent to such transfer, storage, and processing.
        </Card.Text>
        <Card.Text><strong>Update Your Information or Pose a Question</strong></Card.Text>
        <Card.Text>
          You can update your account and profile information delete your account through your profile settings. If you have questions about your privacy on our Services or this privacy policy, please contact us at david@thejurne.com.
        </Card.Text>
        <Card.Text><strong>Changes to this Privacy Policy</strong></Card.Text>
        <Card.Text>
          We will post any adjustments to the Privacy Policy on this page, and the revised version will be effective when it is posted. If we materially change the ways in which we use or share personal information previously collected from you through our Services we will notify you through our Services, by email, or other communication.
        </Card.Text>
        <Card.Text><strong>Contact Information</strong></Card.Text>
        <Card.Text>
          If you have any questions, comments, or concerns about our processing activities, please email us at david@thejurne.com or write to us at 1901 148th St. SE Mill Creek, WA 98012.
        </Card.Text>
      </Card.Body>
    </Card>
  </Container>
);

export default PrivacyPage;