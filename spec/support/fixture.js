const form = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewpoint" content="width=device-width, intitial-scale=1.0">
    <link rel="stylesheet" href="form.css">

    <title>Visitor form</title>
</head>
<body>

    <h1 class="heading">Visitor's form</h1>

    <form action="new_visit" method="POST">

        <input type="text" name="visitor_name" placeholder="Visitor name">
        <br><br>
        <input type="text" name="assistant" placeholder="Assistant">
        <br><br>
        <input type="text" name="visitors_age" placeholder="Visitor's age">
        <br><br>
        <input type="text" name="date_of_visit" placeholder="Date of visit">
        <br><br>
        <input type="text" name="time_of_visit" placeholder="Time of visit">
        <br><br>
        <input type="text" placeholder="Comments">
        <br><br>
        <button>Submit</button>

    </form>

</body>
    
</html>`

module.exports = form;