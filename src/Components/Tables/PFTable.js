const PFTable = ({ children }) => {
  return (
    <div className="PFTable">
      <table className="table table-border table-striped">{children}</table>
    </div>
  );
};

export default PFTable;
