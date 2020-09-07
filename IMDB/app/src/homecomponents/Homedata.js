import React from 'react';
import {Link} from 'react-router-dom'

const Homedata=()=> {
    return(
        <div>
            <div className = "container">
                <div className = "row">
            <div id="carouselExampleCaptions" class="carousel slide col-sm-9" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <Link to="/movies">
      <img src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg" class="d-block w-100 img" alt="..."/>
      </Link>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item">
    <Link to="/movies">
      <img src="https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg" class="d-block w-100 img" alt="..."/>
      </Link>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item">
      <Link to="/movies">
      <img src="https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg" class="d-block w-100 img" alt="..."/>
      </Link>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div className="column col-sm-3">
  <h3 className="decorate">Up Next</h3>
  <iframe src="https://media.istockphoto.com/videos/switch-close-up-video-id1149471564" class="d-block w-100 setimage" alt="..."></iframe>
  <iframe src="https://media.istockphoto.com/videos/young-couple-in-love-spend-time-together-video-id1067823648" class="d-block w-100 setimage" alt="..."></iframe>
  <iframe src="https://media.istockphoto.com/videos/young-sexy-brunette-girl-with-short-hair-wearing-glasses-posing-for-video-id950587022" class="d-block w-100 setimage" alt="..."></iframe>
</div>
</div>
</div>
        </div>
    )
}
export default Homedata;