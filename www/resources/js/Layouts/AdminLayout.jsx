import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function AdminLayout({ children }) {
    return (
        <>
            <div>
                <div className="absolute flex flex-col items-center w-[3rem] transition-width duration-300 ease-linear  h-full overflow-hidden text-gray-400 bg-gray-900
                hover:w-40">
                    <Link className="flex items-center w-full px-2 mt-3" href="/">
                        <svg className="min-w-8 min-h-8 w-8 h-8 fill-current " xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20"
                             fill="currentColor">
                            <path
                                d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"/>
                        </svg>
                        <span className="ml-2 text-sm font-bold min-w-[100px]">Mlt.Car</span>
                    </Link>
                    <div className="w-full">
                        <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
                            <Link className="flex items-center w-full h-12 px-2 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                               href={route('admin.dashboard')}>
                                <svg className="min-w-8 min-h-8 w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                                </svg>
                                <span className="ml-2 text-sm font-medium min-w-[100px]">Панель управления</span>
                            </Link>
                            <Link
                                className="flex items-center w-full h-12 px-2 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                                href={route('users.index')}>
                                <svg  xmlns="http://www.w3.org/2000/svg"  fill="none"
                                     className="bi bi-people min-w-8 min-h-8 w-8 h-8" viewBox="0 0 18 18" stroke="currentColor">
                                    <path strokeWidth="1"
                                        d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                                </svg>
                                <span className="ml-2 text-sm font-medium min-w-[100px]">Пользователи</span>
                            </Link>
                            <Link
                                className="flex items-center w-full h-12 px-2 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                                href={route('slides.index')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-file-slides min-w-8 min-h-8 w-8 h-8" viewBox="0 0 16 16">
                                    <path
                                        d="M5 4a.5.5 0 0 0-.496.438l-.5 4A.5.5 0 0 0 4.5 9h3v2.016c-.863.055-1.5.251-1.5.484 0 .276.895.5 2 .5s2-.224 2-.5c0-.233-.637-.429-1.5-.484V9h3a.5.5 0 0 0 .496-.562l-.5-4A.5.5 0 0 0 11 4zm2 3.78V5.22c0-.096.106-.156.19-.106l2.13 1.279a.125.125 0 0 1 0 .214l-2.13 1.28A.125.125 0 0 1 7 7.778z"/>
                                    <path
                                        d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
                                </svg>
                                <span className="ml-2 text-sm font-medium min-w-[100px]">Слайдер</span>
                            </Link>
                        </div>
                    </div>
                    <Link
                        className="flex items-center w-full px-2 h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
                        href='#'>
                        <svg className="min-w-8 min-h-8 w-8 h-8" xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span className="ml-2 text-sm font-medium min-w-[100px]">Аккаунт</span>
                    </Link>
                </div>
                <main className={'container pl-14 xl:pl-8'}>
                    {children}
                </main>
            </div>
        </>
    );
}
