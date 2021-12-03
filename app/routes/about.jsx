import { Outlet, Link } from 'remix';

export const meta = () => {
    return {
      title: 'About',
      description: 'About'
    };
  };




export default function About() {
    return (
        <main>
            <h1>Remix is good
            <hr />
            Visit Remix Website ==&gt; 
            <a href="https://remix.run">Remix</a>
            </h1>
            <div style={{ fontSize: '50px', textAlign: 'center' }}>
            <Link to='/about/happy'>🤯</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </main>
    )
}