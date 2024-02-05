import React, { useState } from "react";
import GenderCheck from "./GenderCheck";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const [input, setInput] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { signUp, loading } = useSignUp();

  const handleCheckBox = (gender) => {
    setInput({ ...input, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(input);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          {/* <span className="text-blue-500"> Chatapp</span> */}
        </h1>

        {/*  Sign in form */}

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
              value={input.fullname}
              onChange={(e) => setInput({ ...input, fullname: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={input.username}
              onChange={(e) => setInput({ ...input, username: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full input input-bordered h-10"
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={input.confirmPassword}
              onChange={(e) =>
                setInput({ ...input, confirmPassword: e.target.value })
              }
            />
          </div>
          {/* Gender Radio */}
          <GenderCheck
            handleCheckBox={handleCheckBox}
            selectedGender={input.gender}
          />

          {/* Gender Radio End */}
          <Link
            to="/signin"
            className="text-sm hover:underline hover:text-blue-600 inline-block"
          >
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>

        {/*  Sign in form end here */}
      </div>
    </div>
  );
};

export default SignUp;

// import React from "react";
// import GenderCheck from "./GenderCheck";

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           SignUp
//           {/* <span className="text-blue-500"> Chatapp</span> */}
//         </h1>

//         {/*  Sign in form */}

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="John Doe"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Email</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Email"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//               {/* Gender Radio */}
//               <GenderCheck />

// {/* Gender Radio End */}
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600 inline-block"
//           >
//             Already have an account?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">SignUp</button>
//           </div>
//         </form>

//         {/*  Sign in form end here */}
//       </div>
//     </div>
//   );
// };

// export default SignUp;
