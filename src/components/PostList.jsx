
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadPosts } from '../redux/actions/postsList';

export default function PostList() {
  const postsListStore = useSelector(state => state.postsList)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  return (
    <>
      <div>
        {postsListStore.isPending ?
          <div className="loader"></div> :
          postsListStore.hasError ?
            <div>{postsListStore.errorMessage}</div> :
            postsListStore.posts.length > 0 ?
              <div>
                <div>Posts</div>
                <table>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Body</th>
                    </tr>
                  </thead>
                  <tbody>
                    {postsListStore.posts.map(post => (
                      <tr key={post.id}>
                        <td><Link to={'/posts/' + post.id}>{post.title}</Link></td>
                        <td>{post.body}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> :
              <div>Error Fetching posts</div>
        }
      </div>
    </>
  );
}