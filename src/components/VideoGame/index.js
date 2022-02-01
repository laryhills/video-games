import React from "react";
import moment from "moment";
import thumbnail from "./video-game-placeholder.png";

//Styles
import { Wrapper, Content, Image, Title, Text } from "./VideoGame.styles";

const VideoGame = ({ releaseDate, name, rating, summary }) => {
  console.log();
  return (
    <Wrapper>
      <Image src={thumbnail} alt="video-game-thumb" />
      <Content>
        <Title>
          <h2>{name}</h2>
          <span>{`Release Date: ${moment(releaseDate).format(
            "d/M/YYYY"
          )}`}</span>
        </Title>
        <Text>
          {summary.length > 150 ? `${summary.substring(0, 150)}...` : summary}
        </Text>
      </Content>
    </Wrapper>
  );
};

export default VideoGame;
