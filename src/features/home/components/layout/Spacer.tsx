interface SpacerProps {
  className: string;
}

export function Spacer({ className }: SpacerProps) {
  return <div className={"bg-gray-300 " + className}></div>;
}
