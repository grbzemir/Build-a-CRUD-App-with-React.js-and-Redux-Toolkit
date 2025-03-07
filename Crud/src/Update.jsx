import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser } from './Reducers/UserReducer';

const Update = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Redux state üzerinden kullanıcıyı al
    const user = useSelector((state) => state.users.find((user) => user.id === Number(id)));

    // Eğer kullanıcı bulunmazsa yönlendir
    if (!user) {
        navigate('/');
    }

    // Formu kontrol etmek için state
    const [uname, setName] = useState(user.name);
    const [uemail, setEmail] = useState(user.email);

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
    }, [user]);

    const handleUpdate = (e) => {
        e.preventDefault();

        // Redux action ile kullanıcıyı güncelle
        dispatch(updateUser({
            id: Number(id),
            name: uname,
            email: uemail
        }));

        navigate('/');
    };

    return (
        <div className='container d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-75 p-5 shadow-lg rounded bg-white'>
                <h3 className='text-center mb-4'>Update User</h3>
                <form onSubmit={handleUpdate}>
                    <div className='mb-3'>
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter Name"
                            value={uname}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter Email"
                            value={uemail}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-info">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
