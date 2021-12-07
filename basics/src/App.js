const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const Course = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};
const Total = ({ parts }) => {
  const total = Object.values(parts).reduce(
    (acc, part) => acc + part.exercises,
    0
  );
  return <p>Number of exercises {total}</p>;
};

const Content = ({ parts }) => {
  return (
    <>
      {Object.keys(parts).map((key) => (
        <Course
          key={key}
          part={parts[key].name}
          exercises={parts[key].exercises}
        />
      ))}
    </>
  );
};

const App = () => {
  const course = ' Half Stack application development';
  const parts = {
    1: {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    2: {
      name: 'Using props to pass data',
      exercises: 7,
    },
    3: {
      name: 'State of a component',
      exercises: 14,
    },
  };
  return (
    <div>
      <Header title={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
