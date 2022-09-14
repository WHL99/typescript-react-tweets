interface timestampProps {
  timestamp: string;
}

function Timestamp({ timestamp }: timestampProps) {
  return <span className="timestamp">{timestamp}</span>;
}

export default Timestamp;
