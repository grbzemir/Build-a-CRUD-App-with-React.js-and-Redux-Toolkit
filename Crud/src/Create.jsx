import React, { useState } from 'react';
import { addUser } from './Reducers/UserReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // Sayfa yenilenmesini engellemek için preventDefault kullanılır
        e.preventDefault();
        dispatch(addUser({ id: users[users.length - 1]?.id + 1 || 1, name, email }));
        navigate('/');
    };

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-75 p-5 shadow-lg rounded bg-white">
                <h3 className="text-center mb-4 text-primary">Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter Name"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create;
