import React from 'react';
import { ProfileEditForm, ProfileChangePassword } from '../features/Profile';
import { MobileBottomMenu } from '../shared';

const Profile = () => {
  return (
    <>
      <div className="container">
        <h1> My Profile </h1>
        <ProfileEditForm />
        <ProfileChangePassword />
        <MobileBottomMenu />
      </div>
      <style jsx>
        {`
          .container {
            max-width: 800px;
            margin: 2rem auto;
            padding: 0 2rem;
          }
        `}
      </style>
    </>
  );
};

export default Profile;
