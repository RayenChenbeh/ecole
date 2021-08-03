import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
// core components
import styles from "../../assets/jss/material-dashboard-react/components/tableStyle.js";
import "./ClassesTable.css"

const useStyles = makeStyles(styles);


export default function CustomTable(props) {
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor } = props;
  const handleDelete = (id) => {
    fetch(`http://localhost:4000/classes/${id}`, {
      method: 'DELETE'
    }).then(() => {
      window.location.reload()
    })
  }
  

  
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            let id= props._id
            return (
              
              <TableRow>
                <TableCell key={key} className="cell">
                  {prop.niveau}
                </TableCell>
                <TableCell key={key} className="cell">
                  {prop.nom}
                </TableCell>
                <TableCell key={key} className="cell">
                  {prop.nb_eleve}
                </TableCell>
                <TableCell key={key} className="cell">
                  {prop.année}
                </TableCell>
                <TableCell key={key} className="cell">
                  <Tooltip title="Supprimer" >
                    <IconButton aria-label="delete" >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell key={key} className="cell">
                <Tooltip title="Modifier">
                    <IconButton aria-label="edit">
                      <EditIcon/>
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
              
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
