import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className={`flex min-h-screen flex-col items-center p-2 ${inter.className}`}>
      <h1 className="my-2 font-bold text-2xl">This is home page</h1>
      <div className="flex flex-row">
        <Link className="text-white bg-sky-500 p-4 mx-2 rounded-md" href="/form">Form</Link>
        <Link className="text-white bg-sky-500 p-4 mx-2 rounded-md" href="/post">Posts</Link>
      </div>
    </main>
  );
}

export default Home;
