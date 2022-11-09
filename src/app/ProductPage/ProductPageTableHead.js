const ProductMockupTableHead = () => {
  return (
    <thead className="ProductMockupTableHead table-light">
      <tr>
        <th className="  col-1">
          <input type="checkbox" />
        </th>
        <th className="col-3">Name</th>
        <th className="col-3">Product Type</th>
        <th className="col-2">Created</th>
        <th className="col-1 text-center">Action</th>
      </tr>
    </thead>
  );
};

export default ProductMockupTableHead;
