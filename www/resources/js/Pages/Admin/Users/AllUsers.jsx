import {Head, Link, useForm, usePage} from '@inertiajs/react';

export default function AllUsers({users}) {
    const { flash } = usePage().props;
    const { delete: destroy} = useForm();
    console.log(flash)
    setTimeout(() => {
        flash.message = null;
    },200);

    function submit(e,userid) {
        e.preventDefault();
        destroy(`users/${userid}`)
    }
    return (
        <>
            <Head title="Все пользователи"/>
            <div className={'grid grid-cols-[90%,10%]'}>
                <div className={'text-2xl font-semibold'}>
                    <h1>Все Пользователи</h1>
                </div>
                <div>
                    <Link href={route('users.create')}>
                        Создать
                    </Link>
                </div>
            </div>
            {flash.message && (
                <div className="alert alert-success">{flash.message}</div>
            )}
            <div className={'grid grid-cols-[1fr,1fr,15%] gap-1 mb-1'}>
                <div className={'text-center text-lg font-semibold bg-[#111827] text-white'}>
                    <span>Имя пользователя</span>
                </div>
                <div className={'text-center text-lg font-semibold bg-[#111827] text-white'}>
                    <span>Email</span>
                </div>
                <div className={'text-center text-lg font-semibold bg-[#111827] text-white'}>
                    <span>Опции</span>
                </div>
            </div>
                {users.data.map((user) => (
                    <div key={user.id} className="grid grid-cols-[1fr,1fr,15%] gap-1 mb-1">
                        <div className={'text-center text-lg font-semibold bg-[#9CA3AF] text-[#111827]'}>
                            <span>{user.name}</span>
                        </div>
                        <div className={'text-center text-lg font-semibold bg-[#9CA3AF] text-[#111827]'}>
                            <span>{user.email}</span>
                        </div>
                        <div className={'grid grid-cols-3 items-center'}>
                                <Link className={'flex justify-center'} rel="stylesheet" href={route('users.edit', user.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         className="bi bi-pencil-square fill-current hover:text-green-700 transition duration-300 ease-linear" viewBox="0 0 16 16" fill="currentColor">
                                        <path
                                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path
                                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                    </svg>
                                </Link>
                                <form className={'flex justify-center'} onSubmit={(e) => submit(e, user.id)}>
                                    <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            className="bi bi-trash fill-current hover:text-red-800 transition duration-300 ease-linear" viewBox="0 0 16 16">
                                                <path
                                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                                <path
                                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                            </svg>
                                    </button>
                                </form>
                                <Link className={'flex justify-center'} rel="stylesheet" href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     className="bi bi-box-arrow-up-right fill-current hover:text-blue-700 transition duration-300 ease-linear" viewBox="0 0 16 16">
                                        <path
                                            d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                                        <path
                                            d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </Link>
                        </div>
                    </div>
                ))}
            <div className={'py-12 px-4'}>
                {users.links.map(link => (
                    link.url ?
                        <Link
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML = {{__html: link.label}}
                            className={`p-1 mx-1 ${
                                link.active ? "text-blue-700 font-bold" : ""
                            }`}
                        >
                        </Link>
                        :
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML = {{__html: link.label}}
                            className={'p-1 mx-1 text-slate-300'}
                        >
                        </span>
                ))}
            </div>
        </>
    );
}
