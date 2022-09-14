interface TweetProps {
  profileImage: string;
}

function ProfileImage({ profileImage }: TweetProps) {
  return <img src={profileImage} className="profile" alt="profile" />;
}

export default ProfileImage;
