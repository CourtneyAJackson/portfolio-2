// import React from "react";
// import { useState } from "react";
// import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
// import ScrollService from "../../utilities/ScrollServices";
// import Animations from "../../utilities/animations";

// function Resume(props) {
//   const [selectedBulletindex, setSelectedBulletIndex] = useState(0);
//   const [carousalOfSetStyle, setCarousalOfSetStyle] = useState({});

//   const ResumeHeading = (props) => {
//     <div className="resume-heading">
//       <div className="resume-main-heading">
//         <div className="heading-bullet">
//           <span>{props.heading ? props.heading : ""}</span>
//           {props.fromDate && props.toDate ? (
//             <div className="heading-date">
//               {props.fromDate + "-" + props.toDate}
//             </div>
//           ) : (
//             <div></div>
//           )}
//         </div>
//         <div className='resume-sub-heading'>
//           <span>{props.subHeading ? props.subHeading : ""}</span>
//         </div>
//         <div className='resume-heading-description'>
//           <span>{ props.description ? props.description : ""}</span>
//         </div>
//       </div>
//     </div>;
//   };

  

//   let fadeInScreenHandler = (screen) => {
//     if (screen.fadeScreen !== props.id) return;
//     Animations.animation.fadeInScreen(props.id);
//   };
//   const fadeInSubscription =
//     ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

//   return (
//     <div className="resume-conatiner screen-container" id={props.id || ""}>
//       <div className="resume-content">
//         <ScreenHeading title={Resume} subHeading={"Bio Details"} />
//       </div>
//     </div>
//   );
// }

// export default Resume;
