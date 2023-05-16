import "./Loading.css";

export const Loading = ({ title, children, color, loading, setLoading }) => {
  return (
    <div
      id="myModal"
      className="loading"
      style={{ display: loading ? "flex" : "none" }}
    >
      <div id="loader"></div>
    </div>
  );
};
