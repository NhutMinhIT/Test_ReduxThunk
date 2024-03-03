import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../services/action/action'; // Import the userData action
import { UserState } from '../services/types/types';

const MyComponent: React.FC = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state: { user: UserState }) => state.user);

    useEffect(() => {
        dispatch(userData()); // Dispatch the userData action
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {/* Render your data here */}
        </div>
    );
};

export default MyComponent;
