import React, { memo } from 'react';

// const areEqual = (prevProps, nextProps) => {

//   if (prevProps.name === nextProps.name) {
//     return true;
//   }

//   return false;
// }

const Child = ({ name, cachedChangeName }) => {

  console.log('Child rendered');

  return (
    <div>
      My name is {name}
    </div>
  );
}

export default memo(Child);
