import { CssBaseline, Box, Paper, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { DataGrid, RowsProp, ColDef } from "@material-ui/data-grid";

const useStyles = makeStyles(() => ({
  root: {
    margin: 25,
    "& div.MuiDataGrid-colCellTitle": {
      fontWeight: "bold",
      fontSize: "large",
    },
    "& div.MuiDataGrid-iconSeparator": {
      display: "none",
    },
    "& div.MuiDataGrid-window": {
      overflow: "hidden !important",
    },
  },
  paperRoot: {
    margin: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    variant: "outlined",
    borderRadius: 2,
    backgroundColor: "#FAFAFA",
    paddingBottom: 25,
  },
  box1: {
    display: "flex",
  },
  tableCard: {
    width: "100%",
    height: "500px",
    marginTop: "2%",
    borderRadius: 10,
    boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.11)",
  },
}));

const rows: RowsProp = [
  {
    id: 1,
    caseNo: "1222",
    caseStatus: "OPEN",
    createdDate: "02/05/2021 05:49:22 PM",
    subject: "Connection Issue",
  },
  {
    id: 2,
    caseNo: "1151",
    caseStatus: "Team Assigned",
    createdDate: "02/04/2021 02:33:22 PM",
    subject: "Connection Issue",
  },
  {
    id: 3,
    caseNo: "1149",
    caseStatus: "OPEN",
    createdDate: "02/01/2021 05:49:22 PM",
    subject: "Connection Issue",
  },
  {
    id: 4,
    caseNo: "1132",
    caseStatus: "OPEN",
    createdDate: "01/22/2021 05:49:22 PM",
    subject: "Issue with Payment",
  },
  {
    id: 5,
    caseNo: "1127",
    caseStatus: "OPEN",
    createdDate: "01/15/2021 05:49:22 PM",
    subject: "Issue with Payment",
  },
  {
    id: 6,
    caseNo: "1120",
    caseStatus: "OPEN",
    createdDate: "01/16/2021 05:49:22 PM",
    subject: "Connection Issue",
  },
  {
    id: 7,
    caseNo: "1114",
    caseStatus: "OPEN",
    createdDate: "02/05/2021 05:49:22 PM",
    subject: "Connection Issue",
  },
  {
    id: 8,
    caseNo: "1234",
    caseStatus: "Team Assigned",
    createdDate: "02/05/2021 05:49:22 PM",
    subject: "Issue with Payment",
  },
  {
    id: 9,
    caseNo: "1333",
    caseStatus: "Team Assigned",
    createdDate: "02/05/2021 05:49:22 PM",
    subject: "Issue with Payment",
  },
  {
    id: 10,
    caseNo: "1444",
    caseStatus: "OPEN",
    createdDate: "02/05/2021 05:49:22 PM",
    subject: "Connection Issue",
  },
];

const columns: ColDef[] = [
  { field: "caseNo", headerName: "Case Number", width: 450 },
  { field: "caseStatus", headerName: "Case Status", width: 450 },
  {
    field: "createdDate",
    headerName: "Created Date",
    width: 450,
    filterable: false,
  },
  { field: "subject", headerName: "Subject", width: 450 },
];

const caseFilterModel = {
  items: [
    { columnField: "caseStatus", operatorValue: "contains", value: "open" },
  ],
};

export default function MyTickets() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <main>
        <Paper elevation={0} className={classes.paperRoot}>
          <Card className={classes.tableCard}>
            <DataGrid
              pageSize={5}
              rows={rows}
              columns={columns}
              filterModel={caseFilterModel}
              showToolbar
              pagination
            />
          </Card>
        </Paper>
      </main>
    </Box>
  );
}