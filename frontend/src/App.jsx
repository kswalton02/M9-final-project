import { useState } from "react";
import Header from "./components/Header";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  const username = localStorage.getItem("username");

  const refreshTasks = () => {
    setRefresh(!refresh);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");

  setLoggedIn(false);
  setRefresh(false);
  };

  return (
    <>
      <Header />

      <main className="container">
        {!loggedIn ? (
          <>
            <RegisterForm />
            <LoginForm onLogin={handleLogin} />
          </>
        ) : (
          <>

            <h2 className="welcome">Welcome, {username}!</h2>

            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>

            <TaskForm onTaskAdded={refreshTasks} />
            <TaskList refresh={refresh} />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;