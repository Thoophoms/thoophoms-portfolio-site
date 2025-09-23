import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="p-4 flex justify-between items-center">


            <div>
                <Link href="/">
                    <p className="text-xl font-bold hover:text-gray-600">Thoop-hom (Trisha) Supannopaj</p>
                </Link>
            </div>

            <div className='flex items-center gap-4'>
                <a href='https://github.com/thoophoms' target='_blank' rel='noopener noreferrer'>
                    <FaGithub size={28} />
                </a>

                <a href='http://linkedin.com/in/trisha-supannopaj' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin size={28} />
                </a>
            </div>
        </header>
    );
};

export default Header;