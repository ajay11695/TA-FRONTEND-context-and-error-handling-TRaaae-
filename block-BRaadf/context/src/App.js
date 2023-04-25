
import Header from './Header';
import Main from './Main';
import { AuthProvider } from './UserContext';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Main />
    </AuthProvider>
  );
}

export default App;
