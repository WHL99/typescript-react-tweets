import TweetModel from "../models/TweetModel";
import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

interface TweetProps {
  tweet: TweetModel;
}

function Tweet({ tweet }: TweetProps): JSX.Element {
  return (
    <>
      <div className="tweet">
        <ProfileImage profileImage={tweet.user.image} />

        <div className="body">
          <div className="top">
            <span className="user">
              <User user={tweet.user.name} handle={tweet.user.handle} />
            </span>
            <Timestamp timestamp={tweet.timestamp} />
          </div>
          <Message message={tweet.message} />
          <Actions />
        </div>

        <i className="fas fa-ellipsis-h"></i>
      </div>
    </>
  );
}

export default Tweet;
