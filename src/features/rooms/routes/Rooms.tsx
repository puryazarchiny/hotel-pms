import { useQuery } from "@tanstack/react-query";

import { Spinner, Table } from "@/components";
import { getRooms } from "@/features/rooms";

export interface Room {
  id: number | null;
  room_number: number | null;
  description: string | null;
  number_of_guests: number | null;
  price: number | null;
  discount: number | null;
  image: string | null;
  created_at: Date;
}

interface Rooms {
  data: Room[] | undefined;
  error: Error | null;
  status: "pending" | "error" | "success";
}

export function Rooms() {
  const {
    data: rooms,
    error,
    status,
  }: Rooms = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  const headers = [
    "ID",
    "Room Number",
    "Description",
    "Number of Guests",
    "Price",
    "Discount",
    "Image",
    "Created at",
  ];

  switch (status) {
    case "pending":
      return <Spinner />;

    case "error":
      return (
        <p className="flex h-full items-center justify-center text-xl font-bold text-gray-600">
          Error: {error?.message}
        </p>
      );

    case "success":
      if (rooms)
        return <Table caption="Rooms" headers={headers} rows={rooms} />;
  }
}
