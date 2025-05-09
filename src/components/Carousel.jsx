import React from "react";


const Carousel = () => {
return (
<section className="row">
<div className="col-md-12 card shadow bg-light">

<div id="mycarousel" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-inner">
<div className="carousel-item active ">

<img src="/slide1.jpg" alt="JUJU"  className="cimages" />
</div>

<div className="carousel-item">
<img src="/slide2.jpg" alt="slide2"  className="cimages" />
</div>
<div className="carousel-item">
<img src="/slide3.jpg" alt="slide3"  className="cimages" />

</div>
<div className="carousel-item">
<img src="/slide4.jpg" alt="slide4"  className="cimages" width={100}/>

</div>
<div className="carousel-item">
<img src="/slide5.jpg" alt="slide5"  className="cimages" />

</div>
</div>

<a className="carousel-control-prev" href="#mycarousel" role="button" data-bs-slide="prev" data-bs-target="#mycarousel">
<span className="carousel-control-prev-icon " aria-hidden="true"></span>
<span className="visually-hidden">Previous</span>
</a>
<a className="carousel-control-next" href="#mycarousel" role="button" data-bs-slide="next" data-bs-target="#mycarousel">
<span className="carousel-control-next-icon " aria-hidden="true"></span>
<span className="visually-hidden">Next</span>
</a>
</div>

</div>
</section>
);
};

export default Carousel;