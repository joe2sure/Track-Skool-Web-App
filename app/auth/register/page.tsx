// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import Button from '../../../components/ui/Button';
// import Input from '../../../components/ui/Input';

// export default function Register() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     userType: 'student',
//     studentId: '',
//     grade: '',
//     parentEmail: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   try {
//     const response = await fetch('', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (!response.ok) {
//       const error = await response.json();
//       alert(`Registration failed: ${error.message || 'Unknown error'}`);
//       return;
//     }

//     const data = await response.json();
//     console.log('Registration successful:', data);

//     window.location.href = '/dashboard';
//   } catch (error) {
//     console.error('Error:', error);
//     alert('An error occurred while registering. Please try again.');
//   }
// };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 high-contrast:bg-black py-12 px-4 sm:px-6 lg:px-8"
//       style={{
//         backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20school%20registration%20hall%20with%20students%20and%20parents%2C%20bright%20welcoming%20atmosphere%2C%20contemporary%20educational%20facility%20with%20natural%20lighting%2C%20diverse%20group%20of%20people%20in%20academic%20setting%2C%20clean%20professional%20environment%20with%20educational%20elements&width=1920&height=1080&seq=register-bg&orientation=landscape')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center'
//       }}
//     >
//       <div className="bg-white/90 dark:bg-gray-800/90 high-contrast:bg-black/95 backdrop-blur-sm rounded-2xl p-8 w-full max-w-2xl">
//         <div className="text-center mb-8">
//           <div className="flex justify-center mb-4">
//             <div className="w-16 h-16 bg-hover rounded-2xl flex items-center justify-center">
//               <i className="ri-user-add-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
//             </div>
//           </div>
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white high-contrast:text-white">Join SkoolBridge</h2>
//           <p className="text-gray-600 dark:text-lightGray high-contrast:text-gray-200 mt-2">Create your account to get started</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-lightGray dark:text-lightGrayhigh-contrast:text-white mb-2">
//               I am a
//             </label>
//             <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 dark:bg-darkGray high-contrast:bg-gray-800 rounded-lg">
//               {['student', 'teacher', 'parent', 'admin'].map((type) => (
//                 <button
//                   key={type}
//                   type="button"
//                   onClick={() => setFormData({ ...formData, userType: type })}
//                   className={`px-3 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
//                     formData.userType === type
//                       ? 'bg-hover text-white'
//                       : 'text-gray-600 dark:text-background high-contrast:text-white hover:text-darkGray dark:hover:text-white'
//                   }`}
//                 >
//                   {type.charAt(0).toUpperCase() + type.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="firstName" className="block text-sm font-medium text-lightGray dark:text-lightGrayhigh-contrast:text-white mb-2">
//                 First Name
//               </label>
//               <Input
//                 id="firstName"
//                 name="firstName"
//                 type="text"
//                 required
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 placeholder="Enter first name"
//               />
//             </div>

//             <div>
//               <label htmlFor="lastName" className="block text-sm font-medium text-lightGray dark:text-lightGrayhigh-contrast:text-white mb-2">
//                 Last Name
//               </label>
//               <Input
//                 id="lastName"
//                 name="lastName"
//                 type="text"
//                 required
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 placeholder="Enter last name"
//               />
//             </div>
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-lightGray dark:text-lightGrayhigh-contrast:text-white mb-2">
//               Email Address
//             </label>
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//             />
//           </div>

//           {formData.userType === 'student' && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="studentId" className="block text-sm font-medium text-lightGray dark:text-lightGrayhigh-contrast:text-white mb-2">
//                   Student ID
//                 </label>
//                 <Input
//                   id="studentId"
//                   name="studentId"
//                   type="text"
//                   required
//                   value={formData.studentId}
//                   onChange={handleChange}
//                   placeholder="Enter student ID"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="grade" className="block text-sm font-medium text-lightGray dark:text-lightGrayhigh-contrast:text-white mb-2">
//                   Grade
//                 </label>
//                 <select
//                   id="grade"
//                   name="grade"
//                   required
//                   value={formData.grade}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border border-lightGrayrounded-lg focus:ring-2 focus:ring-hover focus:border-hover outline-none transition-colors text-sm pr-8"
//                 >
//                   <option value="">Select Grade</option>
//                   <option value="9">Grade 9</option>
//                   <option value="10">Grade 10</option>
//                   <option value="11">Grade 11</option>
//                   <option value="12">Grade 12</option>
//                 </select>
//               </div>
//             </div>
//           )}

//           {formData.userType === 'parent' && (
//             <div>
//               <label htmlFor="parentEmail" className="block text-sm font-medium text-lightGray dark:text-lightGrayhigh-contrast:text-white mb-2">
//                 Student's Email (to link accounts)
//               </label>
//               <Input
//                 id="parentEmail"
//                 name="parentEmail"
//                 type="email"
//                 required
//                 value={formData.parentEmail}
//                 onChange={handleChange}
//                 placeholder="Enter student's email"
//               />
//             </div>
//           )}

//           {formData.userType === 'admin' && (
//             <div>
//               <label htmlFor="parentEmail" className="block text-sm font-medium text-lightGray dark:text-lightGrayhigh-contrast:text-white mb-2">
//                 Student's Email (to link accounts)
//               </label>
//               <Input
//                 id="parentEmail"
//                 name="parentEmail"
//                 type="email"
//                 required
//                 value={formData.parentEmail}
//                 onChange={handleChange}
//                 placeholder="Enter student's email"
//               />
//             </div>
//           )}

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-lightGray dark:text-lightGrayhigh-contrast:text-white mb-2">
//                 Password
//               </label>
//               <Input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Create password"
//               />
//             </div>

//             <div>
//               <label htmlFor="confirmPassword" className="block text-sm font-medium text-lightGray dark:text-lightGrayhigh-contrast:text-white mb-2">
//                 Confirm Password
//               </label>
//               <Input
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 type="password"
//                 required
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 placeholder="Confirm password"
//               />
//             </div>
//           </div>

//           <div className="flex items-center">
//             <input
//               id="terms"
//               name="terms"
//               type="checkbox"
//               required
//               className="h-4 w-4 text-hover focus:ring-hover border-lightGrayrounded cursor-pointer"
//             />
//             <label htmlFor="terms" className="ml-2 block text-sm text-lightGray dark:text-lightGrayhigh-contrast:text-white cursor-pointer">
//               I agree to the <Link href="/terms" className="text-hover dark:text-hover/80 hover:text-hover">Terms of Service</Link> and <Link href="/privacy" className="text-hover dark:text-hover/80 hover:text-hover">Privacy Policy</Link>
//             </label>
//           </div>

//           <Button type="submit" className="w-full" size="lg">
//             Create Account
//           </Button>
//         </form>

//         <div className="mt-6 text-center">
//           <p className="text-sm text-darkGray dark:text-lightGray high-contrast:text-lightGray">
//             Already have an account?{' '}
//             <Link href="/auth/login" className="font-medium text-hover/70 dark:text-hover/80 hover:text-hover">
//               Sign in here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import { registerUser } from "@/components/Lib/mockAuth";

export default function Register() {
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    userType: "admin" | "student" | "teacher" | "parent";
    studentId: string;
    grade: string;
    parentEmail: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "student",
    studentId: "",
    grade: "",
    parentEmail: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = registerUser(formData);
      console.log("Registration successful:", user);

      // Mock backend call
      const newUser = {
        username: formData.firstName,
        email: formData.email,
        userType: formData.userType as
          | "student"
          | "teacher"
          | "parent"
          | "admin",
        ...(formData.parentEmail && { parentEmail: formData.parentEmail }),
      };

      // Save user object in localStorage
      localStorage.setItem("currentUser", JSON.stringify(newUser));

      // Redirect based on role
      switch (user.userType) {
        case "admin":
          window.location.href = "/dashboard";
          break;
        case "teacher":
          window.location.href = "/dashboard";
          break;
        case "parent":
          window.location.href = "/dashboard";
          break;
        case "student":
        default:
          window.location.href = "/dashboard";
          break;
      }
    } catch (error: any) {
      alert(`Registration failed: ${error.message}`);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 high-contrast:bg-black py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20school%20registration%20hall%20with%20students%20and%20parents%2C%20bright%20welcoming%20atmosphere%2C%20contemporary%20educational%20facility%20with%20natural%20lighting%2C%20diverse%20group%20of%20people%20in%20academic%20setting%2C%20clean%20professional%20environment%20with%20educational%20elements&width=1920&height=1080&seq=register-bg&orientation=landscape')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white/90 dark:bg-gray-800/90 high-contrast:bg-black/95 backdrop-blur-sm rounded-2xl p-8 w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-hover rounded-2xl flex items-center justify-center">
              <i className="ri-user-add-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white high-contrast:text-white">
            Join SkoolBridge
          </h2>
          <p className="text-gray-600 dark:text-lightGray high-contrast:text-gray-200 mt-2">
            Create your account to get started
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-lightGray dark:text-lightGrayhigh-contrast:text-white mb-2">
              I am a
            </label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 dark:bg-darkGray high-contrast:bg-gray-800 rounded-lg">
              {["student", "teacher", "parent", "admin"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setFormData({ ...formData, userType: type as "student" | "teacher" | "parent" | "admin" })}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    formData.userType === type
                      ? "bg-hover text-white"
                      : "text-gray-600 dark:text-background high-contrast:text-white hover:text-darkGray dark:hover:text-white"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-lightGray dark:text-lightGrayhigh-contrast:text-white mb-2"
              >
                First Name
              </label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-lightGray dark:text-lightGrayhigh-contrast:text-white mb-2"
              >
                Last Name
              </label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-lightGray dark:text-lightGrayhigh-contrast:text-white mb-2"
            >
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          {formData.userType === "student" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="studentId"
                  className="block text-sm font-medium text-lightGray dark:text-lightGrayhigh-contrast:text-white mb-2"
                >
                  Student ID
                </label>
                <Input
                  id="studentId"
                  name="studentId"
                  type="text"
                  required
                  value={formData.studentId}
                  onChange={handleChange}
                  placeholder="Enter student ID"
                />
              </div>

              <div>
                <label
                  htmlFor="grade"
                  className="block text-sm font-medium text-lightGray dark:text-lightGrayhigh-contrast:text-white mb-2"
                >
                  Grade
                </label>
                <select
                  id="grade"
                  name="grade"
                  required
                  value={formData.grade}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-lightGrayrounded-lg focus:ring-2 focus:ring-hover focus:border-hover outline-none transition-colors text-sm pr-8"
                >
                  <option value="">Select Grade</option>
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                  <option value="11">Grade 11</option>
                  <option value="12">Grade 12</option>
                </select>
              </div>
            </div>
          )}

          {formData.userType === "parent" && (
            <div>
              <label
                htmlFor="parentEmail"
                className="block text-sm font-medium text-lightGray dark:text-lightGrayhigh-contrast:text-white mb-2"
              >
                Student's Email (to link accounts)
              </label>
              <Input
                id="parentEmail"
                name="parentEmail"
                type="email"
                required
                value={formData.parentEmail}
                onChange={handleChange}
                placeholder="Enter student's email"
              />
            </div>
          )}

          {formData.userType === "admin" && (
            <div>
              <label
                htmlFor="parentEmail"
                className="block text-sm font-medium text-lightGray dark:text-lightGrayhigh-contrast:text-white mb-2"
              >
                Student's Email (to link accounts)
              </label>
              <Input
                id="parentEmail"
                name="parentEmail"
                type="email"
                required
                value={formData.parentEmail}
                onChange={handleChange}
                placeholder="Enter student's email"
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-lightGray dark:text-lightGrayhigh-contrast:text-white mb-2"
              >
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-lightGray dark:text-lightGrayhigh-contrast:text-white mb-2"
              >
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-hover focus:ring-hover border-lightGrayrounded cursor-pointer"
            />
            <label
              htmlFor="terms"
              className="ml-2 block text-sm text-lightGray dark:text-lightGrayhigh-contrast:text-white cursor-pointer"
            >
              I agree to the{" "}
              <Link
                href="/terms"
                className="text-hover dark:text-hover/80 hover:text-hover"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-hover dark:text-hover/80 hover:text-hover"
              >
                Privacy Policy
              </Link>
            </label>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-darkGray dark:text-lightGray high-contrast:text-lightGray">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-medium text-hover/70 dark:text-hover/80 hover:text-hover"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
