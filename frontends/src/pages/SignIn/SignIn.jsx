import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignIn from "../../hooks/useSignIn";

const SignIn = () => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
 const {loading,signIn} = useSignIn()


  const handleSubmit =  async (e) => {
    e.preventDefault();
    await signIn(username,password)
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignIn
          {/* <span className="text-blue-500"> Chatapp</span> */}
        </h1>

        {/*  Sign in form */}

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full input input-bordered h-10"
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>{loading ? (<span className="loading loading-spinner"></span>) : ("Sign In")}</button>
          </div>
        </form>

        {/*  Sign in form end here */}
      </div>
    </div>
  );
};

export default SignIn;

// import React from "react";

// const SignIn = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           SignIn
//           {/* <span className="text-blue-500"> Chatapp</span> */}
//         </h1>

//         {/*  Sign in form */}

//         <form>
//             <div>
//                 <label className="label p-2">
//                     <span className="text-base label-text">Username</span>
//                 </label>
//                 <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" />
//             </div>
//             <div>
//                 <label className="label p-2">
//                     <span className="text-base label-text">Password</span>
//                 </label>
//                 <input type="password" placeholder="Enter username" className="w-full input input-bordered h-10" />
//             </div>
//             <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//            Don't have account?
//             </a>
//             <div>
//             <button className="btn btn-block btn-sm mt-2">SignIn</button>
//             </div>
//         </form>

//         {/*  Sign in form end here */}
//       </div>
//     </div>
//   );
// };

// export default SignIn;
