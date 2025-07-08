import { useAppContext } from "../context/AppContext";

export default function Home() {
  const { message } = useAppContext();
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Home Page</h1>
      <p>{message}</p>
    </div>
  );
}
