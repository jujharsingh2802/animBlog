import React from 'react';
import authService from '../appwrite/auth';
import { Button } from './index';

function SocialLogin() {
  const handleGoogleLogin = async () => {
    try {
      await authService.createOAuth2Session();
    } catch (error) {
      console.error('Error during Google OAuth2 login:', error);
    }
  };


  return (
    <div>
      <Button onClick={handleGoogleLogin} className='w-full'>
        Google
      </Button>
    </div>
  );
}

export default SocialLogin;
