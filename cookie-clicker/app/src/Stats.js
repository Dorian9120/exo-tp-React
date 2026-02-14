function Stats({ cookies, productionAuto, multiplicateur }) {
  return (
    <div className="stats-display">
      <p>Cookies : {Math.floor(cookies)}</p>
      <p>Cookies/sec : {(productionAuto * multiplicateur).toFixed(1)}</p>
      <p>Cookies/min : {(productionAuto * multiplicateur * 60).toFixed(0)}</p>
    </div>
  );
}

export default Stats;
