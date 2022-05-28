import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import AppContainer from "./style";
import data from "./phoneCode.json";

export default function App() {
  const [Search, setSearch] = React.useState("");
  const [Data, setData] = React.useState([...data]);
  console.table(Data);

  React.useEffect(() => {
    Search &&
      setData(
        Search.match(/^[a-zA-Z]+$/)
          ? data.filter((d) => {
              return d.country.toLowerCase().includes(Search.toLowerCase());
            })
          : data.filter((d) => {
              return d.code.toString().includes(Search.toString());
            })
      );
  }, [Search, Data]);

  return (
    <AppContainer>
      <header>
        <div className="search__box">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Country Name/Code (without the '+' sign)"
          />
          <BiSearchAlt />
        </div>
      </header>
      {Data.length !== 0 ? (
        <main>
          <div className="title">Country</div>
          <div className="title">Code</div>
          {React.Children.toArray(
            Data.map((d) => (
              <>
                <div>{d.country}</div>
                <div>+{d.code}</div>
              </>
            ))
          )}
        </main>
      ) : (
        <main className="error">
          <img src="/empty.svg" alt="empty illustration" />
          <h1>
            Sorry no "Country Code" with the Country{" "}
            {Search.match(/^[a-zA-Z]+$/) ? "Name" : "Code"} of "+{Search}"
            found!
          </h1>
        </main>
      )}
      <footer>
        by{" "}
        <a href="http://ahjim.com" target="_blank" rel="noopener noreferrer">
          Akhlak Hossain Jim
        </a>
        . Find the code{" "}
        <a
          href="https://github.com/Akhlak-Hossain-Jim/mobile-phone-country-code"
          target="_blank"
          rel="noopener noreferrer"
        >
          here.
        </a>
      </footer>
    </AppContainer>
  );
}
