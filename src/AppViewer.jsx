var React = require('react')
var App = require('./App.jsx')

var AppViewer = React.createClass({
  render: function() {
    return (
      <div>
        <App />
      </div>
    )
  }
})

module.exports = AppViewer
