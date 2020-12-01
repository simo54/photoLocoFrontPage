/*
Loading component, it has been created with bootstrap spinner. For centering the spinner we need to set the row to 100vh (Loading.css) in order to have the container on full page. 
Once the page is set to full, we can the use my-auto (margin-top: auto; margin-bottom) to center the spinner in the middle, vertically and horizontally
*/

import React from "react";
import "./Loading.css";

export default function Loading() {
  return (
    <div id='screen' className='container'>
      <div className='row w-100 my-auto'>
        <div className='col text-center my-auto'>
          <div className='spinner-border' style={{ width: "5rem", height: "5rem" }} role='status'>
            <span className='sr-only'>Loading...</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
