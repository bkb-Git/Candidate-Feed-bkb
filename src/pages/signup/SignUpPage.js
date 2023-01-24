import React, { useEffect } from 'react';

// import Signup from '../../components/signup/Signup';
import Independent from '../../components/independent/Independent';

const SignUpPage = ({ title }) => {

  useEffect(() => document.title = title, [title])

  return (
    <div>
      {/* <Signup /> */}
      <Independent />
    </div>
  )
}

export default SignUpPage;