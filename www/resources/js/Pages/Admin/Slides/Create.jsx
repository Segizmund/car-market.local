import {useForm, Head, Link} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel.jsx";


export default function CreateUser() {
    const { data, setData, post, errors, processing } = useForm({
        image: "",
        url: "",
    })
    function submit(e) {
        e.preventDefault();
        post(route('slides.store'))
    }
    return(
        <>
            <Head title="Добавление нового слайда"/>
            <div className={'w-1/2 mx-auto'}>
                <h1 className={'font-semibold text-center'}>Добавление Слайда</h1>
                <form onSubmit={submit}>
                    <div className={'grid grid-cols-1 gap-y-3 mb-6'}>
                        {data.image instanceof File && (
                            <div className="mt-2">
                                <img
                                    src={URL.createObjectURL(data.image)}
                                    alt="Превью"
                                    className="max-h-40 rounded"
                                />
                            </div>
                        )}
                        <div>
                            <InputLabel htmlFor="image" value="Фото"/>
                            <input
                                id="image"
                                type="file"
                                accept="image/*"
                                className="w-full"
                                onChange={(e) => setData('image', e.target.files ? e.target.files[0] : null)}
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="email" value="Ссылка"/>
                            <input type="text"
                                   value={data.url}
                                   className={'w-full'}
                                   onChange={(e) => setData('url', e.target.value)}/>
                        </div>
                    </div>
                    <div className={'text-end'}>
                        <button className={"text-white rounded p-2 bg-green-700 transition duration-300 ease-linear" +
                            "hover:border-green-500 hover:bg-green-500"}>
                        Создать
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
