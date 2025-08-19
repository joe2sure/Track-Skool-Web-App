export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType: 'admin' | 'student' | 'teacher' | 'parent';
  studentId?: string;
  grade?: string;
  parentEmail?: string;
}

// Simulated user database
export const mockUsers: User[] = [
  {
    id: 1,
    firstName: 'Alice',
    lastName: 'Admin',
    email: 'admin@skoolbridge.com',
    password: 'admin123',
    userType: 'admin'
  },
  {
    id: 2,
    firstName: 'Sam',
    lastName: 'Student',
    email: 'student@skoolbridge.com',
    password: 'student123',
    userType: 'student',
    studentId: 'STU001',
    grade: '10'
  },
  {
    id: 3,
    firstName: 'Tom',
    lastName: 'Teacher',
    email: 'teacher@skoolbridge.com',
    password: 'teacher123',
    userType: 'teacher'
  },
  {
    id: 4,
    firstName: 'Pam',
    lastName: 'Parent',
    email: 'parent@skoolbridge.com',
    password: 'parent123',
    userType: 'parent',
    parentEmail: 'student@skoolbridge.com'
  }
];
