import Placar from "./Componentes/placar";

function App() {
  return (
    <div className="App">
      <Placar id="jp" nome="João" />
      <Placar id="rp" nome="Reginaldo" />
      {/* <Placar id="ab" nome="Abner" /> */}
    </div>
  );
}

export default App;