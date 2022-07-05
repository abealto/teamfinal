import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar2 from './Games-Page-Nav';
import API from '../UTILS/API';
import '../stylesheets/bootstrap.css';
import '../stylesheets/review.css';

const DisplayGame = () => {
  const params = useParams();
  const [game, setGame] = useState({});
  const [newPost, setNewPost] = useState('');
  const [posts, setPost] = useState([]);
  const [refresh, setRefresh] = useState({});
  const [deletedPost, setDeletedPost] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    //Get the single game
    function getGame() {
      API.getGame(params.gameId).then((response) => {
        // console.log(response.data);
        setGame(response.data);
      });
    }

    //Get Posts by GameId
    function getPosts() {
      API.getPosts(params.gameId).then((res) => {
        console.log(res);
        setPost(res.data);
      });
    }

    let userToken = JSON.parse(localStorage.getItem('userToken'));

    function fetch() {
      API.getUserData(userToken).then((response) => {
        console.log(response);
        setUser(response.data);
      });
    }
    fetch();
    getGame();
    getPosts();
  }, [params.gameId, refresh, deletedPost]);

  const handleChange = (e) => {
    setNewPost(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    API.createPost2(params.gameId, newPost, user).then((response) => {
      setRefresh(response);
      document.getElementById('postText').value = '';
    });
  };

  //delete Post
  function deletePost(id) {
    console.log(id);
    API.deletePost(id).then((res) => {
      setDeletedPost(res);
    });
  }

  function generateData() {
    if (posts === null) return;

    return (
      <div className='postList flex-wrap'>
        {posts.map((post) => (
          <div key={post.post_id} id='list'>
            <p>{post.post}</p>

            {user.user_id === post.user_id ? (
              <button type='submit' onClick={() => deletePost(post.post_id)}>
                Delete
              </button>
            ) : (
              ''
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <NavBar2 />

      <div>
        <div class='gamelogo'>
          <h1 class='text-primary'>{game.Name}</h1>
          <img src={game.GameThumbnail} alt='' />
        </div>

        {generateData()}

        <form onSubmit={handleSubmit} id='name'>
          <textarea
            onChange={handleChange}
            placeholder='type a review'
            id='postText'
          />
          <br />
          <button
            class='btn btn-outline-primary btn'
            type='submit'
            // onClick={refreshPage}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DisplayGame;

// <div className='postList flex-wrap'>
// {posts.map((post) => (
//   <div key={post.gameId} id='list'>
//     <p>{post.post}</p>
//     {/* <button type='submit' onClick={deletePost} >Delete</button> */}
//   </div>
// ))}
// </div>
