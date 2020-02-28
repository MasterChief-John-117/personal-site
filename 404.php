
<html>
    <head>
        <title>404 Not Found</title>
        <script src="assets/js/404.js"></script>
    </head>
    <body text=#000000 link=#0000ff bgColor=#ffffff onload=stuff()>
        <h1>404 - Not Found</h1>
        I'm sorry, dear visitor, but the requested URL was not found on this server.
        <p>
        <hr>
        <center>

<?php
    $f_contents = file("excuses.txt");
    $line = $f_contents[rand(0, count($f_contents) - 1)];
    echo($line)
?>

        </center>
        </font>
        <hr>
        <p>
    </body>
</html>

