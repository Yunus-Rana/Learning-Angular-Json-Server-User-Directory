export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  role: 'admin' | 'lead' | 'member';
  status: 'active' | 'inactive';
  field: string;
  createdAt: string;
}

export interface UsersResponse {
  users: User[];
}