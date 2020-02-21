const form = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewpoint" content="width=device-width, intitial-scale=1.0">

    <title>Visitor form</title>
</head>
<body>

    <h1>Visitor's form</h1>

    <form action="new_visit" method="POST">

        Name <input type="text" name="visitor_name" placeholder="Visitor name">
        <br><br>
        Assistant <input type="text" name="assistant" placeholder="Assistant">
        <br><br>
        Age <input type="number" name="visitors_age" placeholder="Visitor's age">
        <br><br>
        Date of visit <input type="date" name="date_of_visit">
        <br><br>
        Time of visit <input type="time" name="time_of_visit">
        <br><br>
        Comments <input type="text" placeholder="Comments">
        <br><br>
        <button>Submit</button>

    </form>

</body>
    
</html>
`

module.exports = form;