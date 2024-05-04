function ChangeTable() {
  var app = SpreadsheetApp;
  var tableData = [];
  var table1 = app.getActiveSpreadsheet().getSheetByName("Table1");
  var table2 = app.getActiveSpreadsheet().getSheetByName("Table2");
  for (var i = 2; i <= table1.getLastColumn(); i++) {
    var dataDate = table1.getRange(2, i).getValue();
    for (var j = 3; j <= table1.getLastRow(); j++) {
      var name = table1.getRange(j, 1).getValue();
      var dataValue = table1.getRange(j, i).getValue();
      tableData.push([dataDate, name, dataValue]);
    }
  }
  table2.getRange(`A1:C${tableData.length}`).setValues(tableData);
}
