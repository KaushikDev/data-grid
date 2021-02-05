import React, { useEffect, useState } from "react";
import { useTheme } from "@material-ui/core/styles";
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
  TableFooter,
  TablePagination,
  Paper,
  IconButton,
} from "@material-ui/core";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

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
  tablePagination: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

// Pagination Code
function TablePaginationActions(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.tablePagination}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

const TicketsTable = () => {
  const classes = useStyles();
  const [filteredRows, setFilteredRows] = useState(rows);
  const [caseNumberFilterValue, setCaseNumberFilterValue] = useState("");
  const [caseStatusFilterValue, setCaseStatusFilterValue] = useState("");
  const [caseSubjectFilterValue, setCaseSubjectFilterValue] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
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
              (rowsPerPage > 0
                ? filteredRows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : filteredRows
              ).map((row) => (
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
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, { label: "All", value: -1 }]}
                colSpan={5}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TicketsTable;
