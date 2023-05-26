import React from "react";
import { MdOutlineMovieFilter } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { RiMovie2Line } from "react-icons/ri";  
import { AiOutlineStar } from "react-icons/ai";
import { useContext } from "react";
import MovieContext from "../MovieContext";
const Panel = () => {
  const {
    header,
    fetchPopular,
    getFavourites,
    fetchNowPlaying,
    fetchTopRated,
    fetchUpcoming,
  } = useContext(MovieContext);
  return (
    <div className="panel">
      <div>
        <MdOutlineMovieFilter
          onClick={() => fetchPopular()}
          className={header === "Trending" ? "active" : null}
        />
        <BiMoviePlay
          onClick={() => fetchNowPlaying()}
          className={header === "Now playing" ? "active" : null}
        />
        <BsStars
          onClick={() => fetchTopRated()}
          className={header === "Top rated" ? "active" : null}
        />
        <RiMovie2Line
          onClick={() => fetchUpcoming()}
          className={header === "Upcoming" ? "active" : null}
        />
        <AiOutlineStar
          onClick={() => getFavourites()}
          className={header === "Your favourites" ? "active" : null}
        />
      </div>
    </div>
  );
};
export default Panel;