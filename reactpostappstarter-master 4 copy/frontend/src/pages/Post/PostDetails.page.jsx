import { Link } from "react-router-dom";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { Button, Container } from "@mantine/core";
import { postsLoader, usersLoader } from "./Post.page";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./PostDetails.module.css"
import jwtDecode from 'jwt-decode';


const PostDetailsPage = () => {
  const { id } = useParams();

  const [postDetails, setPostDetails] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  
  const token = localStorage.getItem('jwt_access_token');
  const decodedToken = jwtDecode(token);
  const signedUserId = decodedToken.id;
  

  useEffect (() => {
    postsLoader().then(postsArray => {
      const post = postsArray.find( post => post.id.toString() === id);
      setPostDetails(post);

      if (post) {
        usersLoader().then(usersArray => {
          const user = usersArray.find(user => user.id === post.userId)
          setUserDetails(user);
        });
      }
    });
  }, [id])
  
  const userName = userDetails?.email?.split('@')[0];

  return (
    <>
      <Container>
        <div className = {styles.contentCard}>
          <div >
            <p>{userName}</p>
            <h1>{postDetails?.title}</h1>
            <p>{postDetails?.category}</p>
            <p>{postDetails?.content}</p>
          </div>
          <img src={postDetails?.image}/>
        </div>
        <div className={styles.buttonWrapper}>
          <Button>
            <Link to="/posts">Back to Posts</Link>
          </Button>
          <Button className={postDetails?.userId === signedUserId ? "" : styles.buttonToggle} >
          <Link to="#">Edit</Link>
          </Button>
        </div>
        
      </Container>
    </>
  );
}

export const postDetailsLoader = async ({param}) => { 
  //const res = await axios.get(`${DOMAIN}/posts/:id`);
  
  return null;
};

export default PostDetailsPage
