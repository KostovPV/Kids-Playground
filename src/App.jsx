import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer,'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <div className="site-wrap" id="home-section">

        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>
        <Header />




        <div className="ftco-blocks-cover-1">

          <div className="site-section-cover overlay">
            <div className="container">
              <div className="row align-items-center ">
                <div className="col-md-5 mt-5 pt-5">
                  <span className="text-cursive h5 text-red">Welcome To Our Website</span>
                  <h1 className="mb-3 font-weight-bold text-teal">Bring Fun Life To Your Kids</h1>
                  <p>Amazing Playground for your kids</p>
                  <p className="mt-5"><a href="#" className="btn btn-primary py-4 btn-custom-1">Learn More</a></p>
                </div>
                <div className="col-md-6 ml-auto align-self-end">
                  <img src="images/kid_transparent.png" alt="Image" className="img-fluid" />

                </div>
              </div>
            </div>
          </div>
        </div>

        


        
        

        


       


      <Footer />
        

      </div>

      <script src="js/jquery-3.3.1.min.js"></script>
      <script src="js/jquery-migrate-3.0.0.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/owl.carousel.min.js"></script>
      <script src="js/jquery.sticky.js"></script>
      <script src="js/jquery.waypoints.min.js"></script>
      <script src="js/jquery.animateNumber.min.js"></script>
      <script src="js/jquery.fancybox.min.js"></script>
      <script src="js/jquery.stellar.min.js"></script>
      <script src="js/jquery.easing.1.3.js"></script>
      <script src="js/bootstrap-datepicker.min.js"></script>
      <script src="js/aos.js"></script>

      <script src="js/main.js"></script>

    </div>


  )
}

export default App
