import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function adminDashboard() {
    return (
        <>
            <Head title="Admin-panel" />
            <div>
                <h1>Admin Dashboard</h1>
            </div>
        </>
    );
}
