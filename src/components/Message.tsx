interface messageProps {
  message: string;
}

function Message({ message }: messageProps) {
  return <p className="message">{message}</p>;
}

export default Message;
