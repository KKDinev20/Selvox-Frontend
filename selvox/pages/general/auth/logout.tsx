import { useRouter } from 'next/router';

export default function Logout() {
    const router = useRouter();

    const handleLogout = async () => {
        await fetch('https://localhost:7095/api/User/logout', {
            method: 'POST',
            credentials: 'include', 
        });
        router.push('/general/auth/login');
    };

    return <button onClick={handleLogout}>Logout</button>;
}
