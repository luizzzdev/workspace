import { Forecast } from './components/Forecast/Forecast';
import { FutureForecast } from './components/FutureForecast/FutureForecast';

function App() {
  return (
    <div
      style={{
        backgroundColor: 'tomato',
        height: '100vh',
        width: '100%',
        overflow: 'auto',
      }}
    >
      <Forecast />
      <FutureForecast />
    </div>
  );
}

export default App;
