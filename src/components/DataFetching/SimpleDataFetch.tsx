import { createSignal, onCleanup } from "solid-js";

type User = {
  id: number;
  username: string;
};

type Comment = {
  commentId: number;
  body: string;
};

type Database = {
  user: User[];
  comments: Comment[];
};

function SimpleDataFetch() {
  const [data, setData] = createSignal<Database | null>(null);
  const [error, setError] = createSignal<string | null>(null);
  const [toShow, setToShow] = createSignal<boolean>(false);

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:5000/user");
      const userResult: User[] = await response.json();

      setData((prevData) => ({
        user: userResult,
        comments: prevData?.comments || [],
      }));
      console.log(data());

    } catch (e: any) {
      setError(e.toString());
      console.log(error);
    }
  };

  const fetchCommentData = async (): Promise<void> => {
    const response = await fetch("http://localhost:5000/comments");
    const commentData: Comment[] = await response.json();

    setData((prevData) => ({
      user: prevData?.user || [],
      comments: commentData,
    }));
    console.log(data());
  };

  function showUserAndComment() {
    if(toShow() == false){
        setToShow(true);
    }else {
        setToShow(false);
    }
  };

  onCleanup(() => {
    // Any cleanup logic if needed when component is unmounted
  });

  return (
    <>
      <button onclick={fetchUserData}>
        Fetch User Data & see in console
        </button>
      <button onclick={fetchCommentData}>
        Fetch Comment Data & see in console
      </button>

      <button onclick={showUserAndComment}>
        Show Users and Comments
        </button>
        {/**Bug? The property "key" can not be used in the <li> element */}
        {(toShow()) ? (
            <>
             <div>
             <ul>
                 {(data()) ? (
                     data()?.user.map((user) => (
                         <li>User ID: {user.id}, Username: {user.username}</li>
                     ))
                 ):(
                     <p>Did you fetch any users?</p>
                 )}
             </ul>
         </div>
         <div>
             <ul>
                 {(data()) ? (
                     data()?.comments.map((comment) => (
                         <li>Comment ID: {comment.commentId}, Comment: {comment.body}</li>
                     ))
                 ):(
                     <p>Did you fetch any comments?</p>
                 )}
             </ul>
         </div>
         </>
        ):(
            <h4>---------------------------------------------------</h4>
        )}

    </>
  );
}

export { SimpleDataFetch };
