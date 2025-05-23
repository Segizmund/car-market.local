import {Head, Link, useForm, usePage} from '@inertiajs/react';

export default function AllUsers({slides}) {
    const { flash } = usePage().props;
    const { delete: destroy} = useForm();
    setTimeout(() => {
        flash.message = null;
    },200);

    function submit(e,slideid) {
        e.preventDefault();
        destroy(`users/${slideid}`)
    }
    return (
        <>
            <Head title="Все Слайды"/>
            <div className={'flex justify-between items-center py-4'}>
                <div className={'text-2xl font-semibold'}>
                    <h1>Все Слайды</h1>
                </div>
                <div>
                    <Link href={route('slides.create')} className={'bg-[#9456F1] p-2 text-white border border-[#9456F1] rounded-xl transition duration-300 ease-linear hover:bg-white hover:text-[#9456F1]'}>
                        Добавить слайд
                    </Link>
                </div>
            </div>
            {flash.message && (
                <div className="alert alert-success">{flash.message}</div>
            )}
            <div className={'grid grid-cols-1 md:grid-cols-4 gap-5'}>
                {slides.map((slide) => (
                    <div key={slide.id} className={'rounded-xl overflow-hidden bg-white box-border border-2 border-[#9456F1]'}>
                        <div className={'mb-3'}>
                            <img className={'h-full w-full object-cover'} src={slide.image} alt=""/>
                        </div>
                        <div className={'grid grid-cols-2 mb-3'}>
                            <Link className={'flex justify-center'} rel="stylesheet" href={route('slides.edit', slide.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     className="bi bi-pencil-square fill-current hover:text-green-700 transition duration-300 ease-linear" viewBox="0 0 16 16" fill="currentColor">
                                    <path
                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                </svg>
                            </Link>
                            <form className={'flex justify-center'} onSubmit={(e) => submit(e, slide.id)}>
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
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    );
}
