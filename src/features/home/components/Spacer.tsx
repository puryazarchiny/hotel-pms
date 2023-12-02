interface SpacerProps {
  classes: string;
}

export function Spacer({ classes }: SpacerProps) {
  return <div className={"grow bg-gray-300 " + classes}></div>;
}
