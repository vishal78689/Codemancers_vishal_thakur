import React, { useCallback, useEffect, useState,useRef } from "react";
import axios from "axios";
import './Gif.css'
import Loader from "./Loader";

import {debounce} from 'lodash'

const Giphy = ({gif,setGif}) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

 
  //page 1 item 1 - item 25
  //page 2 item 26 - item 50
  //page 3 item 51 - item 75

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "O1Idu4JC1AuIsNZ8EJkFeHTaK6NyHS7g",
          limit: 50
        }
      });

      console.log(results);
      setData(results.data.data);
    } catch (err) {
      setIsError(true);
      setTimeout(() => setIsError(false), 4000);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    
    fetchData();
  }, []);

  const renderGifs = () => {
    if (isLoading) {
      return <Loader />;
    }
    console.log(data);
    return data.map(el => {
      return (
        <div key={el.id} className="gif"
        onClick={()=>setGif(el.images)}
        >
          <img src={el.images.fixed_height.url} />
        </div>
      );
    });
  };
  console.log(gif);
  const renderError = () => {
    if (isError) {
      return (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          Unable to get Gifs, please try again in a few minutes
        </div>
      );
    }
  };
  const deb=useCallback(
		debounce((text) => setSearch(text),100)
		,
		[],
	);
  const handleSearchChange = (text)=> {
    deb(text);
    handleSubmit();
    if(search.length===0){
      setData([]);
     fetchData();}
  };

  const handleSubmit = async () => {
  
    setIsError(false);
    setIsLoading(true);

    try {
      const results = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "O1Idu4JC1AuIsNZ8EJkFeHTaK6NyHS7g",
          q: search,
          limit: 100
        }
      });
      setData(results.data.data);
    } catch (err) {
      setIsError(true);
      setTimeout(() => setIsError(false), 4000);
    }

    setIsLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
    
      document.getElementById("stuffed").value = search;
    
    }
  }
  return (
    <div className=" Gif">
      {renderError()}
      <form className="form-inline justify-content-center m-2"
      onSubmit={e => { e.preventDefault(); }}>
        <input
        value={search}
        id="stuffed"
        onKeyDown={handleKeyDown}
          onChange={(e)=>handleSearchChange(e.target.value)}
          type="text"
          placeholder="search"
          className="form-control"
        />
       
      </form>
     
      <div className=" gifs">{renderGifs()}</div>
    </div>
  );
};

export default Giphy;