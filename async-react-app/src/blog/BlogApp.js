//블로그 애플리케이션 만들어보기
//1. 게시물 조회
//2. 게시물 추가
//3. 게시물 삭제

import React, {useState, useEffect} from "react";
import axios from 'axios';

function BlogApp(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newPost, setNewPost] = useState({title : '', body : ''});

    //게시물 조회
    //렌더링 될 때 무조건 한번은 실행
    //서버로 가서 select를 해오는 것
    useEffect(() => {
        const fetchPosts = async () => {
            try{
                //axios는 데이터를 가져와서 바로 json으로 만들어준다.
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                //비동기통신을 하고 얻은 데이터를 받으려면 변수명.data를 사용한다.
                //console.log(response.data);
                setPosts(response.data); //post state에 100개의 내용이 저장
            } catch(err){
                setError(err.message);
            } finally{
                setLoading(false);
            }
        };
        fetchPosts();
    }, []); //useEffect

    //데이터 추가
    //서버에 데이터를 추가하여 새로고침해도 추가된 데이터가 유지되도록 해보자
    //DB로 가서 insert를 하는 것
    const addPost = async () => {
        //유효성 검사
        if(!newPost.title || !newPost.body) return alert('모든 필드를 입력하세요');

        try{
            //조회할 때 HTTP메서드는 GET, 추가할 때 HTTP메서드는 POST를 사용한다.
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
            setPosts([response.data, ...posts]); //재 렌더링이 되서 추가된 내용이 보임
            //input태그와 textarea의 내용을 비워줘야 한다.
            setNewPost({title : '', body : ''});
        } catch(err){
            setError(err.message);
        }
    }

    //데이터 삭제하기
    //DB로 가서 delete를 하는 것
    const deletePost = async (id) => {
        try{
            //삭제 후 돌려주는 data는 없다.
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/1${id}`);
            if(response.status === 200){
                alert('삭제되었습니다.');
            }
            //내가 삭제한 게시글 빼고 다시 조회해줘
            setPosts(posts.filter(post => post.id !== id));
        } catch(err){
            setError(err.message);
        }
    } 

    return(
        <div>
            {/* 게시글 추가하기 */}
            <div>
                <h1>새 게시물 추가</h1>
                <input type="text" placeholder="제목" value={newPost.title} onChange={(e) => setNewPost({...newPost, title : e.target.value})} />
                <textarea placeholder="내용" value={newPost.body} onChange={(e) => setNewPost({...newPost, body : e.target.value})} />
                <button onClick={addPost}>게시물 추가</button>
            </div>
            <div>
                <h1>블로그 게시물</h1>
                {/* post state에 저장되어 있는 내용을 하나씩 꺼내서 화면에 렌더링 */}
                {posts.map(post => (
                    <div key={post.id} style={{border : '1px solid black', margin : '10px', padding : '10px'}}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <button onClick={() => deletePost(post.id)}>삭제</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogApp;