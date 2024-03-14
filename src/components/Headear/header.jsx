
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center mt-2 border-b-2 p-2'>
            <h1 className='text-3xl font-extrabold'>Knowledge cape</h1>
            <img src={profile} alt="" />

        </div>
    );
};

export default Header;