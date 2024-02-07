const Cards = ({userId, title, body}: {userId: number, title: string, body: string}) => {
  return (
    <li key={userId} className="w-3/12 border-2 border-black rounded-sm p-4 gap-2.5">
      <h1 className="font-bold">Card {userId}</h1>
      <h2 className="text-2xl my-2">{title}</h2>
      <p>{body}</p>
    </li>
  );
}

export default Cards;
