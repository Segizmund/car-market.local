import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

import AdminLayout from './Layouts/AdminLayout.jsx';
import DefaultLayout from './Layouts/DefaultLayout.jsx';

const appName = import.meta.env.VITE_APP_NAME || 'Авторынок Мелитополь';

createInertiaApp({
    title: (title) => title ? `${title} - ${appName}` : appName,

    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let pageComponent = pages[`./Pages/${name}.jsx`];

        // Функция, которая оборачивает страницу
        const wrappedPage = (props) => {
            return pageComponent.default({ ...props });
        };

        // Получаем данные из props
        wrappedPage.layout = (layoutPage) => {
            const props = layoutPage.props;

            // Теперь можем явно передавать нужные данные

            // Выбираем нужный Layout
            if (name.startsWith('Admin/')) {
                const commonProps = {
                    children: layoutPage,
                    auth: props.auth,
                };
                return <AdminLayout {...commonProps} />;
            }
            else {
                const commonProps = {
                    children: layoutPage,
                    menu: props.menu,
                    auth: props.auth,
                };
                return <DefaultLayout {...commonProps} />;
            }
        };

        return wrappedPage;
    },

    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },

    progress: {
        color: '#4B5563',
    },
});
