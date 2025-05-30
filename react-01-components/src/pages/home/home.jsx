

const Home = ( props ) => {
  return (
    <main>
      <h1>Hola { props.name }</h1>
      <h2>{props.hogwartsHome}</h2>
    </main>
  );
};

export { Home };
