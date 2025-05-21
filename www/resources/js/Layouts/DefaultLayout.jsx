import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function AdminLayout({ children,menu,auth }) {
    return (
        <>
            <header className={'bg-[#9456F1] shadow-[0px_3px_25px_0px_rgba(0,0,0,0.15)] py-4'}>
                <div className={'container mx-auto text-white flex justify-between items-center'}>
                    {menu && menu.length > 0 ? (
                        <nav>
                            {menu.map(item => (
                                <Link key={item.id} href={item.url} className="relative px-2 py-1 group">
                                    {item.title}
                                    <span className="absolute left-1/2 -translate-x-1/2 bottom-0 block h-[1px] bg-white origin-center w-full scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
                                </Link>
                            ))}
                        </nav>
                    ) : (
                        <></>
                    )}
                    {auth.user ? (
                        <Link href={route('logout')} method="post"
                              as="button">Выйти</Link>
                    ) : <Link href={'/login'}>Войти</Link>
                    }
                </div>
            </header>
            <main>
                {children}
            </main>
        </>
    );
}
