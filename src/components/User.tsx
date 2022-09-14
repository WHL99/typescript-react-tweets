interface UserProps {
  user: string;
  handle: string;
}

function User({ user, handle }: UserProps) {
  return (
    <>
      <span className="name">{user}</span>
      <span className="handle">{handle}</span>
    </>
  );
}

export default User;
