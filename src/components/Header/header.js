'use client';

import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/signin'); // corrected path and useNavigate instead of Navigate
    };
    
    return (
        <div className="flex justify-between">
            <div>
                <p>HELLO</p>
            </div>
            <div className="flex space-x-4"> {/* Added some space between links */}
                <p>HOME</p>
                <p>ABOUT</p>
                <p>SUPPORT</p>
            </div>
            <div>
                <p onClick={handleSignInClick} className="cursor-pointer">SIGN IN</p> {/* Added cursor-pointer for better UX */}
            </div>
        </div>
    );
};

export default Header;
