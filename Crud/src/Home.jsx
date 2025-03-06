import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import { deleteUser } from './Reducers/UserReducer';

const Home = () => {
    const users = useSelector((state) => state.users) || [];
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteUser({ id }));
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">CRUD App with JSON Server</h2>
            <div className="d-flex justify-content-end mb-3">
                <Link to="/create" className="btn btn-success">+ Create</Link>
            </div>
            <div className="table-responsive">
                <table className="table table-hover text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/edit/${user.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                                        <button onClick={() => handleDelete(user.id)} className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-muted">No users found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
