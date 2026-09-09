import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import ClickButton from "./components/ClickButton";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <Header />
      <List />
      <ClickButton />
      <ProfileCard 
          name="Anna Svensson" 
          role="Frontend-utvecklare" 
          initials="AS" 
        />

      <Footer />
    </>
  );
}

export default App;
