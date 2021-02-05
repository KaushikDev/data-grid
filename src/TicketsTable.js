import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { rows, columns } from "./TicketsData";
import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  makeStyles,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    padding: theme.spacing(1),
  },
  filters: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
}));

const TicketsTable = () => {
  const classes = useStyles();
  const [filteredRows, setFilteredRows] = useState(rows);
  const [caseNumberFilterValue, setCaseNumberFilterValue] = useState("");
  const [caseStatusFilterValue, setCaseStatusFilterValue] = useState("");
  const [caseSubjectFilterValue, setCaseSubjectFilterValue] = useState("");

  console.log(`caseNumberFilterValue : ${caseNumberFilterValue},
  caseStatusFilterValue : ${caseStatusFilterValue},
  caseSubjectFilterValue : ${caseSubjectFilterValue},`);

  useEffect(() => {
    if (
      !caseNumberFilterValue &&
      !caseStatusFilterValue &&
      !caseSubjectFilterValue
    ) {
      setFilteredRows(rows);
    }

    if (
      caseNumberFilterValue &&
      !caseStatusFilterValue &&
      !caseSubjectFilterValue
    ) {
      setFilteredRows(
        rows.filter((row) => {
          if (row.caseNo === caseNumberFilterValue) return row;
        })
      );
    }

    if (
      !caseNumberFilterValue &&
      caseStatusFilterValue &&
      !caseSubjectFilterValue
    ) {
      setFilteredRows(
        rows.filter((row) => {
          if (row.caseStatus === caseStatusFilterValue) return row;
        })
      );
    }

    if (
      !caseNumberFilterValue &&
      !caseStatusFilterValue &&
      caseSubjectFilterValue
    ) {
      setFilteredRows(
        rows.filter((row) => {
          if (row.subject === caseSubjectFilterValue) return row;
        })
      );
    }

    if (
      caseNumberFilterValue &&
      caseStatusFilterValue &&
      !caseSubjectFilterValue
    ) {
      setFilteredRows(
        rows.filter((row) => {
          if (
            row.caseNo === caseNumberFilterValue &&
            row.caseStatus === caseStatusFilterValue
          )
            return row;
        })
      );
    }

    if (
      !caseNumberFilterValue &&
      caseStatusFilterValue &&
      caseSubjectFilterValue
    ) {
      setFilteredRows(
        rows.filter((row) => {
          if (
            row.caseStatus === caseStatusFilterValue &&
            row.subject === caseSubjectFilterValue
          )
            return row;
        })
      );
    }

    if (
      caseNumberFilterValue &&
      !caseStatusFilterValue &&
      caseSubjectFilterValue
    ) {
      setFilteredRows(
        rows.filter((row) => {
          if (
            row.caseNo === caseNumberFilterValue &&
            row.subject === caseSubjectFilterValue
          )
            return row;
        })
      );
    }

    if (
      caseNumberFilterValue &&
      caseStatusFilterValue &&
      caseSubjectFilterValue
    ) {
      setFilteredRows(
        rows.filter((row) => {
          if (
            row.caseNo === caseNumberFilterValue &&
            row.caseStatus === caseStatusFilterValue &&
            row.subject === caseSubjectFilterValue
          )
            return row;
        })
      );
    }
  }, [caseNumberFilterValue, caseStatusFilterValue, caseSubjectFilterValue]);

  console.log(filteredRows);
  return (
    <Container className={classes.container}>
      <div className={classes.filters}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="case-number-select-input-label">
            Case Number
          </InputLabel>
          <Select
            labelId="case-number-select-label"
            id="case-number-select"
            value={caseNumberFilterValue}
            onChange={(e) => setCaseNumberFilterValue(e.target.value)}
            label="case-number"
          >
            <MenuItem value="">Please Select...</MenuItem>
            {rows.map((row, index) => {
              return (
                <MenuItem value={row.caseNo} key={index}>
                  {row.caseNo}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="case-status-select-input-label">
            Case Status
          </InputLabel>
          <Select
            labelId="case-status-select-label"
            id="case-status-select"
            value={caseStatusFilterValue}
            onChange={(e) => setCaseStatusFilterValue(e.target.value)}
            label="case-status"
          >
            <MenuItem value="">Please Select...</MenuItem>
            {rows
              .map((row) => row.caseStatus)
              .filter((value, index, self) => self.indexOf(value) === index)
              .map((value, index) => {
                return (
                  <MenuItem value={value} key={index}>
                    {value}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="case-subject-select-input-label">
            Case Subject
          </InputLabel>
          <Select
            labelId="case-subject-select-label"
            id="case-subject-select"
            value={caseSubjectFilterValue}
            onChange={(e) => setCaseSubjectFilterValue(e.target.value)}
            label="case-subject"
          >
            <MenuItem value="">Please Select...</MenuItem>
            {rows
              .map((row) => row.subject)
              .filter((value, index, self) => self.indexOf(value) === index)
              .map((value, index) => {
                return (
                  <MenuItem value={value} key={index}>
                    {value}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => {
                return <TableCell key={index}>{column.headerName}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows !== null &&
              filteredRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.caseNo}
                  </TableCell>
                  <TableCell>{row.caseStatus}</TableCell>
                  <TableCell>{row.createdDate}</TableCell>
                  <TableCell>{row.subject}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TicketsTable;
