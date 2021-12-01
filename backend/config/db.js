import { Connection, Request } from 'tedious'
var config = {
  server: 'WIN-OANSPC5GDQ3\\proshop_bd',
  authentication: {
    type: 'default',
    options: {
      userName: 'WIN-OANSPC5GDQ3\\User', // update me
      password: '', // update me
    },
  },
  options: {
    database: 'proshop_db',
  },
}
function executeStatement() {
  const request = new Request("select 42, 'hello world'", function (
    err,
    rowCount
  ) {
    if (err) {
      console.log(err)
    } else {
      console.log(rowCount + ' rows')
    }
  })

  request.on('row', function (columns) {
    columns.forEach(function (column) {
      console.log(column.value)
    })
  })

  connection.execSql(request)
}

function con() {
  var connection = new Connection(config)

  // Setup event handler when the connection is established.
  connection.on('connect', function (err) {
    if (err) {
      console.log('Error: ', err)
    } else {
      executeStatement()
    }
  })

  // Initialize the connection.
  connection.connect()
}

export default con
