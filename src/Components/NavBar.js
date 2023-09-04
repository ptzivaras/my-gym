// import React from 'react';
// import {
//   MDBNavbar,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBContainer
// } from 'mdb-react-ui-kit';


// export default function Navigation() {
//   return (
//     <MDBNavbar expand='lg' light bgColor='white'>
//       <MDBContainer fluid>
//         <MDBNavbarToggler
//           aria-controls='navbarExample01'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//         >
//           <MDBIcon fas icon='bars' />
//         </MDBNavbarToggler>
//         <div className='collapse navbar-collapse' id='navbarExample01'>
//           <MDBNavbarNav right className='mb-2 mb-lg-0'>
//             <MDBNavbarItem active>
//               <MDBNavbarLink aria-current='page' href='#' className='text-bold fs-5'>
//                 Home
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='#' className='text-bold fs-5'>
//                 Classes
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='#' className='text-bold fs-5'>
//                 Trainers
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='#' className='text-bold fs-5'>
//                 Price
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='#' className='text-bold fs-5'>
//                 About
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//           </MDBNavbarNav>
//         </div>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }

import React from 'react';
import { MDBNavbar, MDBNavbarToggler, MDBIcon, MDBNavbarNav, MDBNavbarItem, MDBContainer } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Navigation() {
  return (
    <MDBNavbar expand='lg' light bgColor='white'>
      <MDBContainer fluid>
        <MDBNavbarToggler
          aria-controls='navbarExample01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <MDBIcon fas icon='bars' />
        </MDBNavbarToggler>
        <div className='collapse navbar-collapse' id='navbarExample01'>
          <MDBNavbarNav right className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <Link to="/" className='text-bold fs-5'>Home</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to="/classes" className='text-bold fs-5'>Classes</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to="/trainers" className='text-bold fs-5'>Trainers</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to="/price" className='text-bold fs-5'>Price</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link to="/about" className='text-bold fs-5'>About</Link>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
}
