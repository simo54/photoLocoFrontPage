// For more info regarding Parallax usage please check 
import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { Button } from "react-bootstrap";
import Loading from "../Loader/Loader";
import "./Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomepageProject() {
  const [loading, setLoading] = useState(false); // Toggle for loading the page
   // Set of images for the Parallax animation
  const firstImg = "https://images.pexels.com/photos/2283757/pexels-photo-2283757.jpeg"; 
  const secondImg = "https://images.pexels.com/photos/1631899/pexels-photo-1631899.jpeg"; 
  const thirdImg = "https://images.pexels.com/photos/7919/pexels-photo.jpg";

// Setting a loader for a couple of seconds
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
      <div>
        {loading ? 
        <>       <div className='head'>
                  <h1>PhotoLoco</h1>
                  <img src='https://www.flaticon.com/svg/static/icons/svg/808/808365.svg' alt='sunset' />
                </div>
                <Parallax bgImage={firstImg} strength={500}>
                  <div style={{ height: 500 }}>
                    <div className='titleBox'>Discover the next Revolution</div>
                  </div>
                </Parallax>
                <div style={{ height: 100 }}></div>
                <div className='text-center'>
                  <p className='headTextBreakPoint'>
                    {" "}
                    <span role='img' aria-label='emoji'>
                      🙌
                    </span>{" "}
                    Free Account
                  </p>
                  <p className='textBreakPoint'>Sign up for a lifetime Free Account and enjoy a new World</p>
                  <Button className='btn btn-success btn-lg'>Get Started</Button>
                </div>
                <div style={{ height: 100 }}></div>
                <Parallax bgImage={secondImg} strength={500}>
                  <div style={{ height: 500 }}>
                    <div className='titleBox'>More than 5M People</div>
                  </div>
                </Parallax>
                <div style={{ height: 100 }}></div>

                <div className='text-center'>
                  <p className='headTextBreakPoint'>
                    Upload your photos{" "}
                    <span role='img' aria-label='emoji'>
                      📸
                    </span>
                  </p>
                  <p className='textBreakPoint'>Show the world from your perspective</p>
                  
                    <Button className='btn btn-success btn-lg'>Upload your style</Button>
                </div>
                <div style={{ height: 100 }}></div>
                <Parallax bgImage={thirdImg} strength={500}>
                  <div style={{ height: 500 }}>
                    <div className='titleBox'>Friendly Community</div>
                  </div>
                </Parallax>
                <div style={{ height: 100 }}></div>
                <div className='text-center'>
                
                  <p className='headTextBreakPoint'>
                    <span role='img' aria-label='emoji'>
                      🦸‍♀️
                    </span>{" "}
                    Meet new People
                  </p>
                  <p className='textBreakPoint'>Search your friends or make new connections</p>
                  
                    <Button className='btn btn-success btn-lg'>Discover new friends</Button>
                </div>
                <div style={{ height: 100 }}/>
                </> : (
          <Loading />
        )}
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

      </div>
  );
}
