import React from 'react';
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBContainer
} from 'mdb-react-ui-kit';
import myImage from './Assets/headerbg.jpg'; 


export default function BgImageWithNavbar() {
  return (
    <header style={{ paddingLeft: 0, margin: 0, height: '90vh' }}>
      {/* <MDBNavbar expand='lg' light bgColor='white'>
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
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#' className='text-bold fs-5'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#' className='text-bold fs-5'>Classes</MDBNavbarLink >
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#' className='text-bold fs-5'>Trainers</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#' className='text-bold fs-5'>Price</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#' className='text-bold fs-5'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar> */}

      <div
        className='p-5 text-center bg-image'
        style={{
          backgroundImage: `url(${myImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90vh',
          width: '100%',
          position: 'relative',
        }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', height: '90vh', position: 'absolute', top: 0, left: 0 }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3 Header-title' style={{ fontSize: '80px', fontWeight:'bold' }}>Gym Fitness Club</h1>
              <h4 className='mb-3 Header-subtitle' style={{ fontSize: '40px'  }}>Work Harder, Get Stronger</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Join Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


