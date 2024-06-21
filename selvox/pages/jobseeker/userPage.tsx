import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function UserProfile() {
    const router = useRouter();
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch user profile data
        const fetchUserProfile = async () => {
            try {
                const response = await fetch(`https://localhost:7095/api/User/${id}`); // Replace with your API endpoint
                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                } else {
                    throw new Error('Failed to fetch user profile');
                }
            } catch (error) {
                console.error('Error fetching user profile:', error);
                // Handle error fetching profile
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    const handleUpdateProfile = async () => {
        try {
            const response = await fetch(`https://localhost:7095/api/User/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    dateOfBirth: user.dateOfBirth,
                    gender: user.gender,
                }),
            });

            if (response.ok) {
                // Handle successful update
                console.log('User profile updated successfully');
            } else {
                throw new Error('Failed to update user profile');
            }
        } catch (error) {
            console.error('Error updating user profile:', error);
            // Handle error updating profile
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>User Profile</h1>
            <form onSubmit={handleUpdateProfile}>
                <label>
                    First Name:
                    <input
                        type="text"
                        value={user.firstName}
                        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={user.lastName}
                        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                    />
                </label>
                <label>
                    Date of Birth:
                    <input
                        type="date"
                        value={user.dateOfBirth}
                        onChange={(e) => setUser({ ...user, dateOfBirth: e.target.value })}
                    />
                </label>
                <label>
                    Gender:
                    <select
                        value={user.gender}
                        onChange={(e) => setUser({ ...user, gender: e.target.value })}
                    >
                        <option value="male">M</option>
                        <option value="female">F</option>
                    </select>
                </label>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
}
