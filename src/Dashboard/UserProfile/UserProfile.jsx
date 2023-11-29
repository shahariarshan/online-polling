import useAuth from '../../Hooks/useAuth'

const UserProfile = () => {
    const {user}=useAuth()
    return (
        <div className='mx-auto flex justify-center mt-10'>
           <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={user.photoURL} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{user.displayName}</h2>
    <p>{user.email}</p>
    
  </div>
</div>
        </div>
    );
};

export default UserProfile;