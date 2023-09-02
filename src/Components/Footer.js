import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      {/* Grid container */}
      <div className="container p-4 pb-0">
        {/* Section: Form */}
        <section>
          <form action="">
            {/* Grid row */}
            <div className="row d-flex justify-content-center">
              {/* Grid column */}
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-5 col-12">
                {/* Email input */}
                <div className="form-outline form-white mb-4">
                  <input type="email" id="form5Example29" className="form-control" />
                  <label className="form-label" htmlFor="form5Example29">
                    Email address
                  </label>
                </div>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-auto">
                {/* Submit button */}
                <button type="submit" className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </form>
        </section>
        {/* Section: Form */}

{/* Section: Social media */}
<section className="mb-4">
          {/* Facebook */}
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Instagram */}
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-instagram"></i>
          </a>

          {/* Linkedin */}
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </section>
        {/* Section: Social media */}

      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Gym Fitness - All rights reserved 
        
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
