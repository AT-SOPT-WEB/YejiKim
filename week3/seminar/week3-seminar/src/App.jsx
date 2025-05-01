import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import { useSearch } from "./hooks/useSearch";
import { members } from "./member";
function App() {
  const { search, searchHandler, filteredMembers, searchButtonHandler } =
    useSearch(members);

  return (
    <>
      <Header />
      <Search
        search={search}
        searchHandler={searchHandler}
        searchButtonHandler={searchButtonHandler}
      />
      <section style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredMembers.map((member) => (
          <Card key={member.id} member={member} />
        ))}
      </section>
    </>
  );
}

export default App;
