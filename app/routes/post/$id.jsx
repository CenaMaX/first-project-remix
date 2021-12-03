import { useLoaderData, json, useCatch } from 'remix';

import styles from '~/styles/post/post.css';


export const loader = async ({ params : { id } }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()

    if (res.status === 404) {
      throw new Response("Post Not Found", { status: 404 })
    }
    
    return json(data)
}

export const meta = ({ data }) => {
    return {
      title: data ? `Jsonplaceholder - Post ${data.id}` : 'Oops!',
      description: 'Single Post'
    };
  };

  export function links() {
    return [
      {
        rel: "stylesheet",
        href: styles
      }
    ];
  }

export default function SinglePost() {
    const loader = useLoaderData()

    return (
      <div className='post__page'>
        <h1 className='post__id'>{`Post ${loader.id}`}</h1>
        <h2 className='post__title'>{loader.title}</h2>
        <p className='post__body'>{loader.body}</p>
      </div>
    );
  }


  export function CatchBoundary() {
    let caught = useCatch();
  
    let message;
    switch (caught.status) {
      case 401:
        message = (
          <p>
            Looks like you tried to visit a page that you do not have access to.
            Maybe ask the webmaster ({caught.data.webmasterEmail}) for access.
          </p>
        );
      case 404:
        message = (
          <p>Looks like you tried to visit a page that does not exist.</p>
        );
      default:
        message = (
          <p>
            Post Not Found !
          </p>
        );
    }

    return (
      <>
        <h2>Oops!</h2>
        <div>{message}</div>
      </>
    );
  }