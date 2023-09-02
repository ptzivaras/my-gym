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

export default function BgImageWithNavbar() {
  return (
    <header style={{ paddingLeft: 0, margin: 0, height: '50vh' }}>
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
      </MDBNavbar>

      <div
        className='p-5 text-center bg-image'
        style={{
          backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%',
          position: 'relative',
        }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Gym Fitness Club</h1>
              <h4 className='mb-3'>Work Harder, Get Stronger</h4>
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
