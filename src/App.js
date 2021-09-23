import { useState, useEffect, useCallback } from "react";
import "./App.css";
import TodoApp from "./todoApp/TodoApp";

export const formatBirthday = (date) => {
  const bday = new Date(date);

  return bday.toLocaleDateString();
};

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const DATA_LIMIT = 10;

  const fetchData = useCallback(() => {
    fetch(`https://randomuser.me/api/?results=${DATA_LIMIT}`).then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const promise = res.json();

      promise
        .then(
          (json) => {
            const users = json.results;

            setData(users);
          },
          (e) => console.error(e)
        )
        .catch((error) => console.log(error));

      promise.finally(() => setLoading(false));
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const refresh = () => {
    fetchData();
  };

  const peopleData = loading ? (
    <p>Loading...</p>
  ) : (
    <>
      {data &&
        data.map((item) => {
          return (
            <>
              {item.location.country === "Canada" ||
                (item.location.country === "United States" && (
                  <UserData item={item} />
                ))}
            </>
          );
        })}
    </>
  );

  return (
    <div className="App">
      <h1>People</h1>
      <button onClick={refresh}>Refresh</button>
      {peopleData}
      <TodoApp/>
    </div>
  );
}

function UserData({ item }) {
  
  let birdDate = formatBirthday(item.dob.date);
  const {
    name: { first, last },
    email,
    phone,
    cell,
  } = item;

  return (
    <div key={cell}>
      <h2>
        {item.name && first} {item.name && last}
      </h2>
      <p>{birdDate}</p>
      <div className="email">
        <a href={`mailto: ${email}`}>{email}</a>
        <span>{phone}</span>
      </div>
    </div>
  );
}

export default App;
