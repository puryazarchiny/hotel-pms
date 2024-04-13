import { useEffect } from "react";

import { getRooms } from "@/features/rooms";

export function Rooms() {
  useEffect(() => {
    getRooms().then((data) => console.log(data));
  });

  return <div>Rooms</div>;
}
