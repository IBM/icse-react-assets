import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  DataTable,
  TableContainer,
} from "@carbon/react";
import React, { Component } from "react";
import { contains } from "lazy-z";
import { UpDownButtons } from "../Buttons";
import { Edit } from "@carbon/icons-react";
import PropTypes from "prop-types";
import { setupRowsAndHeaders } from "../../lib/forms/networking-order-card";

class OrderCardDataTable extends Component {
  constructor(props) {
    super(props);

    this.state = setupRowsAndHeaders(this.props);
  }

  render() {
    const { rows, headers } = { ...this.state };

    return (
      <DataTable headers={headers} rows={rows}>
        {({ rows, headers, getHeaderProps, getRowProps }) => (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {headers.map((header, index) => (
                    <TableHeader
                      key={header.header + "-" + index}
                      {...getHeaderProps({ header })}
                    >
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.name + "-" + index}
                    {...getRowProps({ row })}
                  >
                    {row.cells.map((cell) => (
                      <TableCell key={JSON.stringify(cell)}>
                        <div key={JSON.stringify(cell) + "-port"}>
                          {contains(["tcp", "udp", "all", "icmp"], cell.value)
                            ? cell.value.toUpperCase()
                            : cell.value}
                        </div>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
    );
  }
}

OrderCardDataTable.propTypes = {
  isSecurityGroup: PropTypes.bool.isRequired,
  rules: PropTypes.array.isRequired,
};

export default OrderCardDataTable;
