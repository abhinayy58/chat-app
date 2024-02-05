import React from 'react';

const GenderCheck = ({handleCheckBox,selectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control'>
           <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "checked" : ""}`}>
            <span className='label-text'>Male</span>
            <input type='checkbox' className='checkbox border-slate-900' checked={selectedGender === "male"} onChange={(e) => handleCheckBox("male")} />
           </label>
        </div>

        <div className='form-control'>
           <label className={`label gap-2 cursor-pointer  ${selectedGender === "female" ? "checked" : ""}`}>
            <span className='label-text'>Female</span>
            <input type='checkbox' className='checkbox border-slate-900'  checked={selectedGender === "female"} onChange={(e) => handleCheckBox("female")} />
           </label>
        </div>
      
    </div>
  );
}

export default GenderCheck;







// import React from 'react';

// const GenderCheck = () => {
//   return (
//     <div className='flex'>
//         <div className='form-control'>
//            <label className='label gap-2 cursor-pointer'>
//             <span className='label-text'>Male</span>
//             <input type='checkbox' className='checkbox border-slate-900' />
//            </label>
//         </div>

//         <div className='form-control'>
//            <label className='label gap-2 cursor-pointer'>
//             <span className='label-text'>Female</span>
//             <input type='checkbox' className='checkbox border-slate-900' />
//            </label>
//         </div>
      
//     </div>
//   );
// }

// export default GenderCheck;
