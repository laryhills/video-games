import axios from "axios";
import React, { useEffect, useState } from "react";

//Components
import VideoGame from "../VideoGame";
import Spinner from "../Spinner";


//Styles
import { Wrapper } from "./Home.styles";

const Home = () => {
  const [videoGames, setVideoGames] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadVideoGames();
  }, []);

  const loadVideoGames = async () => {
    setLoading(true);
    return await axios
      .get(`https://adaorachi.github.io/esetech-assessment-api/game-data.json`)
      .then((response) => {
        setLoading(false);
        setVideoGames(response.data);
        console.log(videoGames);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.log(error);
      });
  };

  if (error) return <div>Something Went Wrong ...</div>;

  return (
    <Wrapper>
      {loading && <Spinner />}
      {videoGames.map((videoGame) => (
        <VideoGame
          key={videoGame.id}
          name={videoGame.name}
          releaseDate={videoGame.first_release_date}
          summary={videoGame.summary}
          rating={videoGame.rating}
        />
      ))}
    </Wrapper>
  );
};

export default Home;
