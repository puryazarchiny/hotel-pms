import { useQuery } from "@tanstack/react-query";

import { Table } from "@/components";
import { getRooms } from "@/features/rooms";

export function Rooms() {
  const { data: rooms } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  console.log(rooms);

  return <Table />;
}
