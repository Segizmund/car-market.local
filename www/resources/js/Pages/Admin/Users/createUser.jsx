import {useForm, Head, Link} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel.jsx";


export default function CreateUser() {
    const { data, setData, post, errors, processing } = useForm({
        name: "",
        email: "",
        password: "",
        role: "user",
    })
    function submit(e) {
        e.preventDefault();
        post('store')
    }
    return(
        <>
            <Head title="Создание нового пользователя"/>
            <div className={'w-1/2 mx-auto'}>
                <h1 className={'font-semibold text-center'}>Создание нового пользователя</h1>
                <form onSubmit={submit}>
                    <div className={'grid grid-cols-1 gap-y-3 mb-6'}>
                        <div>
                            <InputLabel htmlFor="name" value="Имя пользователя"/>
                            <input type="text"
                                   required
                                   value={data.name}
                                   className={'w-full'}
                                   onChange={(e) => setData('name', e.target.value)}/>
                        </div>
                        <div>
                            <InputLabel htmlFor="email" value="Email пользователя"/>
                            <input type="text"
                                   value={data.email}
                                   required
                                   className={'w-full'}
                                   onChange={(e) => setData('email', e.target.value)}/>
                        </div>
                        <div>
                            <InputLabel htmlFor="password" value="Пароль пользователя"/>
                            <input type="text"
                                   value={data.password}
                                   required
                                   className={'w-full'}
                                   onChange={(e) => setData('password', e.target.value)}/>
                        </div>
                        <div>
                            <InputLabel htmlFor="role" value="Роль пользователя"/>
                            <input type="text"
                                   value={data.role}
                                   required
                                   className={'w-full'}
                                   onChange={(e) => setData('role', e.target.value)}/>
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
