import Link from 'next/link';
import Logo from './logo';

function MainNavigation() {
    return <header className='w-full h-40 bg-gray-900 flex justify-between items-center py-0 px-10'>
        <Link href='/'><Logo /></Link>
        <nav>
            <ul className='list-none flex items-baseline m-0 p-0'>
                <li className='mx-4'><Link className='text-grey-100 text-lg hover:text-gray-200 active:text-gray-200 ' href='/posts'>Posts</Link></li>
                <li className='mx-4'><Link className='text-grey-100 text-lg hover:text-gray-200 active:text-gray-200 ' href='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;