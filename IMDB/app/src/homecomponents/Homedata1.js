import React from 'react';
import {Link} from 'react-router-dom';


//Home Component
const Homedata1=()=> {
    return(
        <div>
          <div className="container">
            <div className="row">
           <div id="carouselExampleControls" class="carousel slide col-sm-9" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <Link to ='/movies'>
      <img src="https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg" class="d-block w-100 com" alt="..."/>
      </Link>
    </div>
    <div className="col-sm-4">
    <Link to ='/movies'>
      <img src="https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg" class="d-block w-100 com" alt="..."/>
      </Link>
    </div>
    </div>
    </div>
    </div>
    <div class="carousel-item">
    <div className="container">
        <div className="row">
          <div className="col-sm-4">
          <Link to ='/movies'>
      <img src="https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg" class="d-block w-100 com" alt="..."/>
      </Link>
    </div>
    <div className="col-sm-4">
    <Link to ='/movies'>
      <img src="https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg" class="d-block w-100 com" alt="..."/>
      </Link>
    </div>
    </div>
    </div>
    </div>
    <div class="carousel-item">
    <div className="container">
        <div className="row">
          <div className="col-sm-4">
          <Link to ='/movies'>
      <img src="https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg" class="d-block w-100 com" alt="..."/>
     </Link>
     </div>
    <div className="col-sm-4">
    <Link to ='/movies'>
      <img src="https://m.media-amazon.com/images/M/MV5BZjc5MGE1MDAtZTllNi00NWY0LTkyMTctMzNiZjBjMTQ0ZTczXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg" class="d-block w-100 com" alt="..."/>
      </Link>
    </div>
    </div>
    </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
</div>
</div>
    )
}
export default Homedata1;