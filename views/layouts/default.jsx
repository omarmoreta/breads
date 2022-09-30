const React = require("react")

const Default = (html) => {
    return (
        <html>
            <head>
                <title>Default</title>
            </head>
            <body>
                <h1>{html.title || "Default"}</h1>
                <div className="container">
                    {html.children}
                </div>
            </body>
        </html>
    )
}

module.exports = Default
