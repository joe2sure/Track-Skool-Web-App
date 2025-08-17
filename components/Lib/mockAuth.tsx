// import { mockUsers, User } from '@/data/mockUsers';
import { mockUsers, User } from "../Data/mockUsers";

let userIdCounter = mockUsers.length + 1;

// Simulate registration
export function registerUser(newUser: Omit<User, 'id'>) {
  const exists = mockUsers.find(user => user.email === newUser.email);
  if (exists) {
    throw new Error('User already exists');
  }
  const user = { id: userIdCounter++, ...newUser };
  mockUsers.push(user);
  return user;
}

// Simulate login
export function loginUser(email: string, password: string) {
  const user = mockUsers.find(u => u.email === email && u.password === password);
  if (!user) {
    throw new Error('Invalid credentials');
  }
  return user;
}
