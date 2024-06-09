import { Helmet } from 'react-helmet-async';
import ProfileUser from '../sections/profile/profile-user';

export default function ProfilePage(){
  
  return (
    <>
      <Helmet>
        <title> Profile | Minimal UI </title>
      </Helmet>
      <ProfileUser />
    </>
  );
}