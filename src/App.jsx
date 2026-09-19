import FriendsData from "./friends.json"

import Friendlist from "./components/Friendlist";

function App() {
  const friends = FriendsData;
  
  return (
    <>
      <div className="font-mono flex flex-col items-center justify-center min-h-screen p-8">
        <div className="text-4xl font-bold mb-5 text-center">Split Bill App</div>
        <Friendlist friends={friends} />
      </div>
    </>
  )
}

export default App
