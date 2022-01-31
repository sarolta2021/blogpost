import EditorContainer from "./components/EditorContainer";

function App() {
  const blogpost = {
    title: "aaa",
    body: "aaa",
    author: "aaa",
    id: 7,
  };

  return (
    <div className="App">
      <EditorContainer blogpost={blogpost} />
    </div>
  );
}

export default App;
