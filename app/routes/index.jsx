import { useLoaderData, json, Link } from "remix";

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta = () => {
  return {
    title: "My First Project with Remix",
    description: "First Project with Remix"
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData();

  return (
    <div className="remix__page">
      <main>
        <h2>Welcome to my first project with Remix!</h2>
        {data.map(d => (
          <div className='remix__card'>
            <Link to={`/post/${d.id}`}>
              <h3 className='remix__card-title'>{d.title}</h3>
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}
