const React = require("react")
const bread = require("../models/bread")
const Default = require("./layouts/default")

const New = () => {
    return (
        <Default>
            <h2>Add a new bread</h2>
            <form action="/breads" method="POST">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required/>
                <label htmlFor="hasGluten">Has Gluten?</label>
                <input type="checkbox" name="hasGluten" id="hasGluten" defaultChecked={bread.hasGluten} />
                <br />
                <input type="submit"/>
            </form>
            <div className="backButton">
                <a href="/breads"><button>Go back to the index</button></a>
            </div>
        </Default>
    )
}

module.exports = New