import DayCard from "./components/DayCard";
import { progress } from "./data/progress";


function App() {

  return (

    <div>

      <h1>
        30 Days Growth Journey 🚀
      </h1>

      <p>
        Learning. Building. Improving every day.
      </p>


      {
        progress.map((item) => (

          <DayCard
            key={item.day}
            day={item}
          />

        ))
      }


    </div>

  );

}


export default App;
