// import React, { Component } from 'react';
// import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation, FullpageContext} from '@ap.cx/react-fullpage';
// import Menu from "./Menu";
// import * as config from "../config";

// class Main extends Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <React.StrictMode>

//         <Fullpage>
//           <div className="header">
//             <div className="logo">
//               SAMASHTI
//             </div>
//             <div className="navigation">
//               <Menu menuItems = {config.menu}/>
//             </div>
//           </div>
//           <FullpageNavigation/>

//           <FullPageSections>

//             <FullpageSection style={{
//               backgroundColor: '#164A41',
//               color: '#05293B',
//             }}>
//               <div>

//                 Samashti foundation is a not-for-profit social cause organization started for two main reasons. First, to transition farmers to Sustainable Organic Farming and second, to increase the overall livelihood of farmers.
//                 We aim to achieve these goals by raising funds on a village by village basis to create village level and farmer level infrastructure required for Organic Farming, in collaboration with grassroot level organizations like BERU Community that are working directly with farmers.
//                 Furthermore, we plan to enable an ecosystem of farm inputs, access to government subsidies and implementing technology for farm management by collaborating with various stake holders thereby making transition and organic farming sustainable

//                 Vision:
//                 To transform farmers to be self-sufficient while practicing sustainable ways of farming and increase their income.  Samashti will help in raising funds for these transformations as a social trust.

//                 Our Impact Parners
//                 Grassroot level Organizations
//                 BERU

//                 Manure:
//                 Technology
//                 Equipment
//                 Seed


//               </div>
//             </FullpageSection>

//             <FullpageSection style={{
//               backgroundColor: '#F5F4F2',
//               color: '#05293B',
//             }}>
//               <div>
//                 Adopting a village and their farmers
//                 ------------
//                 Assessing the requirements
//                 -----------
//                 Raising fund through individual contributions, CSR funding, community collaboration, Bank tieups for loans, fund raising through p2p platforms and other business collaborations
//                 ----------
//                 Utilizing the funds at the village level over a period of time
//                 ---------
//                 Simultaneously enable technology to improve ease of farming
//                 -----------
//                 Implement various means to measure improvement and productivity of Organic Farming
//                 ---------
//                 Creating sustainable model for the longer run
//                 --------
//                 Move out of the village to next village for the same transition

//                 Why Organic Farming?

//                 What is the Mission of Samashti?
//                 To Facilitate funding for easy transition to Organic Farming
//                 •	To facilitate fund raising required to make the village self-sufficient with all the infrastructure required to conduct organic farming.
//                 •	We plan to enable an ecosystem of farm inputs for smooth transition of farmers through collaboration with various suppliers and service providers.
//                 •	To raise funds for training the farmers for easy transition.
//                 •	To make the farmers feel proud of their profession and enable them to become contributors for creating future organic farmers for our beautiful India.
//                 •	To enable them to upgrade their earnings and livelihood to live comfortably and to create more employment opportunities for other residents of the village
//                 •	Empower women in the household to become entrepreneurs in rearing livestock and other allied agricultural activities to support their livelihood. Also train them to develop alternate skills to support their livelihood.
//                 •	Create Farmprenuers who are passionate about creating an impact in this field.
//                 In a nutshell, the village and farmers will be adopted and will be assisted through funding for sustainable organic farming and to improve farmers livelihood.


//               </div>
//             </FullpageSection >

//             <FullpageSection style={{
//               backgroundColor: '#4D774E',
//               color: '#05293B',
//             }}>
//               <div>

//                 Our projects
//                 Sustainable Organic Farming Transition projects
//                 Grassroot Organization _ BERU
//                 •	 Nijjiyappana doddi village – Ramanagaram
//                 •	Project report
//                 •	DONATE
//                 •	Items wise or your choice contribution


//                 REWARD:
//                 Upto Rs. 5000 Thank you card
//                 Rs. 5000 - Rs. 10000 – 1 time harvest up to Rs. 500
//                 Rs. 10000- Rs. 20000 – 3 times harvest in a year of Rs. 500 each
//                 Above Rs. 20,000 – visito the farm and stay in our community center


//               </div>
//             </FullpageSection>

//             <FullpageSection style={{
//               backgroundColor: '#9DC88D',
//               color: '#05293B'
//             }}>
//               Women help groups
//               Women self-employment
//               Self-help groups
//               Farmpreneurs – Incubation

//             </FullpageSection>

//           <FullpageSection style={{
//             backgroundColor: '#FFFFFF',
//             color: '#05293B',
//           }}>
//             We are passionate young at heart entrepreneurs, Engineers, Farmers and Volunteers from various backgrounds who have taken up this cause after seeing the struggle of farmers during COVID and want to make a difference in their lives.  Also the extensive use of pesticides and fertilizers made us think about slowly transitioning farmers to sustainable growing methods.
//             As we are all aware, agriculture and farming constitute 20% percent of our GDP.  Our nation’s development lies in the villages and if people in the villages are happy then the development that happens around it will be sustainable and we can mitigate the problem of mass migration to cities or urban areas.
//             Lack of Organic Farming knowledge, basic know how, assistance and initial help are all missing for many farmers and we at Samashti want to address this problem and would want to collectively work with several players in the market to facilitate bringing the required help for the farmers.
//             Samashti was started during COVID seeing the struggles of the farmers trying to live through this tough time with regard to finance, loans, supply chain, better pricing.
//             Samashti’s aim is to work collectively with all the relevant sections of society that will make farmers’ life easy, sustainable and will make them proud of their profession.
//             Farming is a very low paying job for many marginal farmers. It is also very difficult profession because of various factors like weather, soil, irrigation, labour, market access and better price for their produce.  This is causing a lot of the younger generation to migrate to urban areas looking for better life. Also, following organic practice is very difficult because of pest and other problems, so they opt for inorganic way of farming by which they erode the soil fertility causing harm in the longer run.

//             Samashti wants to change that perspective and wants to make farmer feel proud of their profession and also want them to happily convert to organic farming with ease.
//             Samashti’s vision is to transform every village into a self-sustainable village in the near future.
//             As the name suggests, Samashti means collective existence.  To start with, we have adopted a small village () a and the farmers in that village and we plan do the transition farmers in that village toward sustainable organic farming.

//             We have started our work by collaborating with BERU (Back to Roots), a community organization which has been working with several farmers from that village for the past 2 years.
//             BERU is run by three young vibrant farmer entrepreneurs who left their plush IT jobs and settled in that village. They have been helping farmers to convert to organic farmers by teaching them the knowhow, and creating market access for their product at better price. Due to shortage of funds and other logistics, it is taking longer than expected and now Samashti is helping them by raising funds.

//           </FullpageSection>

//             <FullpageSection style={{
//               backgroundColor: '#F1B24A',
//               color: '#05293B',
//             }}>
//               <div>
//                 Bank
//                 Gov agency
//                 CSR partners


//                 Contact US
//                 SAMASHTI FOUNDATION
//                 Registered Office: 22, Embassy Tranqui, Apt#403, 8th Main 3rd Block, Koramangala, Bangalore
//                 Email: samashtifoundation@yahoo.com, Samashti.india@gmail.com
//                 Phone: 9663973295, 9663879295
//                 Facebook: @Samashtifoundation

//                 Media

//                 Gallery and Youtube videos

//                 Volunteers

//               </div>
//             </FullpageSection>

//           </FullPageSections>

//         </Fullpage>
//       </React.StrictMode>
//     );
//   }
// }

// export default Main;
