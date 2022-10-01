const React = require("react")
const Default = require("./layouts/default")

const Error = () => {
    return (
        <Default title="404 Error">
            <h2>404 Error</h2>
            <li><a href="/breads">Go Home</a></li>
        </Default>
    )
}

module.exports = Error