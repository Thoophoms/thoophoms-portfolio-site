import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='text-center p-6 mt-12 border-t'>
            <div className='flex justify-center gap-6 mb-4'>
                <a
                    href='https://github.com/thoophoms' target='_blank' rel='noopener noreferrer' aria-label="GitHub">
                    <FaGithub size={28} />
                </a>

                <a
                    href='https://linkedin.com/in/trisha-supannopaj' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                    <FaLinkedin size={28} />
                </a>

                <a
                    href='mailto:thoophom.su@gmail.com' target='_blank' rel='noopener noreferrer' aria-label='Email'
                >
                    <HiOutlineMail size={28} />
                </a>
            </div>
            <p className='text-gray-500'>
                © {currentYear} Thoop-hom (Trisha) Supannopaj
            </p>
        </footer>
    );
};

export default Footer;