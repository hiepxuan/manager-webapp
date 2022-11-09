const VariantTableHead = () => {
  return (
    <thead className="VariantTableHead table-light">
      <tr>
        <th className="col-2"></th>
        <th className="col-2">SKU</th>
        <th className="col-2">Weight (gram) </th>
        <th className="col-2">Price (USD)</th>
        <th className="col-2 text-center">Is default?</th>
      </tr>
    </thead>
  );
};

export default VariantTableHead;
