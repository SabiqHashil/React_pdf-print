import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Table } from "react-bootstrap";

const ReactPdfPrint = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () => alert("Print success"),
  });

  const data = [
    {
      ID: "1",
      JobTitle: "Investment Advisor",
      EmailAddress: "Tom_Allen6729@twace.org",
      FirstNameLastName: "Tom Allen",
    },
    {
      ID: "2",
      JobTitle: "Software Engineer",
      EmailAddress: "Erick_Vaughn1164@twace.org",
      FirstNameLastName: "Erick Vaughn",
    },
    {
      ID: "3",
      JobTitle: "CNC Operator",
      EmailAddress: "Benjamin_Radley2576@zorer.org",
      FirstNameLastName: "Benjamin Radley",
    },
    {
      ID: "4",
      JobTitle: "Production Painter",
      EmailAddress: "Barney_Stewart9321@twace.org",
      FirstNameLastName: "Barney Stewart",
    },
    {
      ID: "5",
      JobTitle: "Business Brockekr",
      EmailAddress: "Scarlett_Siclair2953@womeona.net",
      FirstNameLastName: "Scarlett Sinclair",
    },
  ];

  return (
    <>
      <div ref={componentRef} style={{ width: "100%", height: "100%" }}>
        <h1 className="text-center my-3 border py-2">Employee data</h1>
        <Table className="w-75 mx-auto" bordered>
          <thead>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
          </thead>
          <tbody>
            {data.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.FirstNameLastName}</td>
                  <td>{item.EmailAddress}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <div className="d-flex justify-content-center">
        <Button variant="success" onClick={handlePrint}>
          Print this out
        </Button>
      </div>
    </>
  );
};

export default ReactPdfPrint;
