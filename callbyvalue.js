<html lang="en">
<head>
    <script>
        function change(a){
            a=67;
            document.write("Inside Function: A = "+a+"<Br />");
        }
    </script>
</head>
<body>
    <script>
        var a=10;
        document.write("Before Calling : A = "+a+"<br />");
        change(a);
        document.write("After Calling : A = "+a+"<br />");
    </script>
</body>
</html>
