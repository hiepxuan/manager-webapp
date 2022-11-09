const AttributesTableHead = () => {
  return (
    <thead className="AttributesTableHead table-light">
      <tr>
        <th className="col-2">
          Name <span className="text-danger">*</span>
        </th>
        <th className="col-2">
          Type <span className="text-danger">*</span>
        </th>
        <th className="col-2">
          Value <span className="text-danger">*</span>
        </th>
        <th className="col-2 ">Preview</th>
        <th className="col-2 text-center">Action</th>
      </tr>
    </thead>
  );
};

export default AttributesTableHead;
