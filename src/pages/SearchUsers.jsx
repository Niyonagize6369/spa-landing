import React, { useState, useEffect } from "react";

export default function SearchUsers() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Debounced search logic
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim()) {
        fetchUsers();
      } else {
        setUsers([]);
      }
    }, 500); // debounce by 500ms

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://api.github.com/search/users?q=${query}`);
      const data = await res.json();
      if (data.items) {
        setUsers(data.items);
      } else {
        setError("No results found.");
      }
    } catch (err) {
      setError("Error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8"style={{ padding: "2rem" }}>
        <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
      <h2>GitHub User Search</h2>
      <input
        type="text"
        placeholder="Search GitHub users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "0.5rem", width: "100%", maxWidth: "400px" }}
         className="w-full max-w-md p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul style={{ marginTop: "1rem" }}>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "1rem" }}>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              <img src={user.avatar_url} alt={user.login} width="50" style={{ borderRadius: "50%", marginRight: "1rem" }} />
              {user.login}
            </a>
          </li>
          
        ))}
      </ul>
      <button className="mt-2 px-4 py-2 bg-brand text-white rounded hover:bg-brand-light">
  Search
</button>
</div>
    </div>
  );
}
