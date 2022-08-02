import React from "react";
import "./postshere.css";
const Postshere = () => {
  return (
    <div className="Postshere">
      <div className="shere">
        <img
          src="https://media.istockphoto.com/photos/stylish-man-posing-on-grey-background-picture-id973481674?b=1&k=20&m=973481674&s=170667a&w=0&h=N88rKUiC4M3YHGvanhxY5mMfVRsOSEKg9swrpwAnQQ0="
          alt=""
        />
        <div className="input">
          <input type="text" placeholder="post" />
        </div>
      </div>
      <div className="postoptions">
        <div className="option"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" class="bi bi-image" viewBox="0 0 16 16">
  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
</svg><p>image</p></div>
        <div className="option"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="blue" class="bi bi-play-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
</svg><p>video</p></div>
        <div className="option"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg><p>location</p></div>
        <div className="option"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="orange" class="bi bi-calendar-event-fill" viewBox="0 0 16 16">
  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
</svg><p>shedule</p></div>
        <div className="option"><p>shere</p></div>
      </div>
    </div>
  );
};

export default Postshere;
