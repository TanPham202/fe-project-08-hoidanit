import { useEffect, useState } from 'react';
import './Users.scss';
import { fetchAllUser } from '../../services/userService';

const Users = (props) => {
    const [listUsers, setListUsers] = useState([]);

    const fetchUsers = async() => {
        let response = await fetchAllUser();
        if(response && response.data && response.data.EC === 0){
            setListUsers(response.data.DT);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div className='container'>
            <div className='user-header'>
                <div className='title'>
                    <h3> Table Users </h3>
                </div>
                <div className='actions'>
                    <button className='btn btn-success'> Refresh </button>
                    <button className='btn btn-primary'> Add new user </button>
                </div>
            </div>
            <div className='user-body'>
                <table className='table table-bordered table-hover'> 
                    <thead>
                        <tr>
                            <th scope="col"> No </th>
                            <th scope="col"> Id </th>
                            <th scope="col"> Email </th>
                            <th scope="col"> Username </th>
                            <th scope="col"> Group </th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers && listUsers.length > 0 ? 
                            <>
                                {listUsers.map((item, index) => {
                                    return(
                                        <tr key={`row-${index}`}>
                                            <td> {index + 1} </td> 
                                            <td> {item.id} </td> 
                                            <td> {item.email} </td> 
                                            <td> {item.username} </td> 
                                            <td> {item.Group ? item.Group.name : ''} </td> 
                                        </tr>
                                    )
                                })}
                            </>
                            :
                            <> <span> Not found users </span> </>
                        }
                    </tbody>
                </table>
            </div>
            <div className='user-footer'>
                <nav aria-label='Page navigation example'>
                    <ul className='pagination'>
                        <li className='page-item'> <a className='page-link' href='#'> Previous </a> </li>
                        <li className='page-item'> <a className='page-link' href='#'> 1 </a> </li>
                        <li className='page-item'> <a className='page-link' href='#'> 2 </a> </li>
                        <li className='page-item'> <a className='page-link' href='#'> 3 </a> </li>
                        <li className='page-item'> <a className='page-link' href='#'> Next </a> </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Users