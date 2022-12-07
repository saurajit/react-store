import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserDetails } from '../redux/actions/userDetails';

export default function UserDetails() {
  const { id } = useParams();
  const userDetails = useSelector(state => state.userDetails)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDetails(id));
  }, []);
  return (
    <>
      {
        userDetails.isPending ? <div className="loader"></div> :
          <div>
            <div>UserDetails</div>
            <div><Link to={'../users'}>Back</Link></div>
            <div>
              <code>{JSON.stringify(userDetails.user)}</code>
            </div>
          </div>
      }
    </>
  );
}