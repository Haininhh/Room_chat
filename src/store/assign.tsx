export interface User {
  displayName: string | null;
  email: string | null;
  uid: string | null;
  photoURL: string | null;
}
export interface Room {
  name: string;
  description: string;
  id: string;
  members: string[];
}
export interface RoomList {
  rooms: Room[];
}
