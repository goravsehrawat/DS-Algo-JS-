class Row {
  rowId: string;
  columnValuesMap = new Map<string, string>();
  createdAt: Date;
  updatedAt: Date;

  constructor(
    rowId: string,
    columnsMap: Map<string, string>,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.rowId = rowId;
    this.columnValuesMap = columnsMap;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  getColumnValuesFromMap(): Map<string, string> {
    return this.columnValuesMap;
  }

  setColumnValuesMap(columnsMap: Map<string, string>) {
    this.columnValuesMap = columnsMap;
  }

  getRowId(): string {
    return this.rowId;
  }

  setRowId(rowId: string) {
    this.rowId = rowId;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  setCreatedAt(createdAt: Date) {
    this.createdAt = createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  setUpdatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt;
  }
}

class Table {
  tableName: string;
  rows = new Map<string, Row>();
  createdAt: Date;

  constructor(tableName: string) {
    this.tableName = tableName;
    this.rows = new Map();
    this.createdAt = new Date();
  }

  insertEntry(rowId: string, columnsMap: Map<string, string>) {
    if (this.rows.has(rowId)) {
      console.log("Duplicate primary key : " + " Insertion failed");
    } else {
      let newRow = new Row(rowId, columnsMap, new Date(), new Date());
      this.rows.set(rowId, newRow);
      console.log("Successfully added a row");
    }
  }

  updateEntry(rowId: string, valuesMap: Map<string, string>) {
    const row: Row = this.rows.get(rowId);
    valuesMap.forEach((key, value) => {
      row.getColumnValuesFromMap().set(key, value);
    });
    console.log("Row successfully updated");
    row.setUpdatedAt(new Date());
  }

  deleteEntry(rowId: string) {
    console.log("Row successfully deleted");
    this.rows.delete(rowId);
  }

  readEntry(rowId: string): Map<string, string> {
    return this.rows.get(rowId).getColumnValuesFromMap();
  }

  getRows(): Map<string, Row> {
    return this.rows;
  }

  setRows(rows: Map<string, Row>) {
    this.rows = rows;
  }

  getTableName(): string {
    return this.tableName;
  }

  setTableName(tableName: string) {
    this.tableName = tableName;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  setCreatedAt(createdAt: Date) {
    this.createdAt = createdAt;
  }
}

class Database {
  name: string;
  tableHashMap = new Map<string, Table>();
  createdAt: Date;

  constructor(name: string) {
    this.name = name;
    this.tableHashMap = new Map();
    this.createdAt = new Date();
  }

  createTable(tableName: string) {
    if (this.tableHashMap.has(tableName)) {
      console.log("A table already exists with the given name");
    } else {
      var table = new Table(tableName);
      this.tableHashMap.set(tableName, table);
      console.log("Table successfully created");
    }
    return this.tableHashMap.get(tableName);
  }

  dropTable(tableName: string) {
    this.tableHashMap.delete(tableName);
    console.log("Table successfully dropped");
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getTableHashMap(): Map<string, Table> {
    return this.tableHashMap;
  }

  setTableHashMap(tableHashMap: Map<string, Table>) {
    this.tableHashMap = tableHashMap;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  setCreatedAt(createdAt: Date) {
    this.createdAt = createdAt;
  }
}

class DatabaseManager {
  databaseHashMap = new Map<string, Database>();

  createDatabase(databaseName: string) {
    if (this.databaseHashMap.has(databaseName)) {
      console.log("A database already exists with this name");
    } else {
      this.databaseHashMap.set(databaseName, new Database(databaseName));
    }
    return this.databaseHashMap.get(databaseName);
  }

  deleteDatabase(databaseName: string) {
    this.databaseHashMap.delete(databaseName);
  }

  public DatabaseManager() {
    this.databaseHashMap = new Map<string, Database>();
  }

  getDatabaseHashMap(): Map<string, Database> {
    return this.databaseHashMap;
  }

  setDatabaseHashMap(databaseHashMap: Map<string, Database>) {
    this.databaseHashMap = databaseHashMap;
  }
}
//enhancement - add indexing