import spinner from "../../images/spinner.gif";

export default function () {
  return (
    <div>
      <img src={spinner} alt="Loading" />
      <h1>Fetching Data</h1>
    </div>
  );
}
