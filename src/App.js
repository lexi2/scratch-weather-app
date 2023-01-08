import './App.css';
import WeatherOverview from './components/WeatherOverview';

export default function App() {
  return (
    <div className="App">
      <div className="container container-sm">
        <h1>Scratch Weather App</h1>
        <WeatherOverview />
        <footer>
          <p>Open source project created by Alex Rosewarne {" "}
          <a href='https://github.com/lexi2/scratch-weather-app' target='_blank' rel='noreferrer'>View Source Code on GitHub</a>
          </p>
        </footer>
      </div>

    </div>
  );
}
