import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../redux/actions/userList';

export default function UserList() {
  const userListStore = useSelector(state => state.userList)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <div>
        {userListStore.isPending ?
          <div class="loader"></div> :
          userListStore.hasError ?
            <div>{userListStore.errorMessage}</div> :
            userListStore.users.length > 0 ?
              <div>
                <div>UserList</div>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>E Mail</th>
                      <th>Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userListStore.users.map(user => (
                      <tr key={user.id}>
                        <td><Link to={'/users/' + user.id}>{user.name}</Link></td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> :
              <div>Error Fetching users</div>
        }
      </div>
    </>
  );
}

/* function mapStateToProps(state) {
  return { userList: state.userList.users };
} 

export default connect(mapStateToProps)(UserList); */