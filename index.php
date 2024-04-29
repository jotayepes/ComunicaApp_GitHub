<?php
        $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
        switch ($lang){
            case "es":
                header("Location:es/index.html");
                break;
            case "ca":
                header("Location: ca/index.html");
                break;     
            case "eu":
                header("Location: eu/index.html");
                break;  
            case "gl":
                header("Location: gl/index.html");
                break;
            case "en":
                header("Location: en/index.html");
                break;
            case "fr":
                header("Location: fr/index.html");
                break;
            case "de":
                header("Location: de/index.html");
                break;
            case "ar":
                header("Location: ar/index.html");
                break;
            case "bg":
                header("Location: bg/index.html");
                break;
            case "he":
                header("Location: he/index.html");
                break;
            case "hr":
                header("Location: hr/index.html");
                break;
            case "hu":
                header("Location: hu/index.html");
                break;
            case "it":
                header("Location: it/index.html");
                break;
            case "ko":
                header("Location: ko/index.html");
                break;
            case "lt":
                header("Location: lt/index.html");
                break;
            case "mk":
                header("Location: mk/index.html");
                break;
            case "pl":
                header("Location: pl/index.html");
                break;
            case "pt":
                header("Location: pt/index.html");
                break;
            case "ro":
                header("Location: ro/index.html");
                break;
            case "ru":
                header("Location: ru/index.html");
                break;
            case "zh":
                header("Location: zh/index.html");
                break;
            default:
                header("Location: en/index.html");
                break;
        }   
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
       "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-02KK59CQTL"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-02KK59CQTL');
    </script>
    <meta http-equiv='content-language' content='es-es'>
    <meta charset="UTF-8">
    <meta name="description" content="ComunicaApp es un buscador de pictogramas avanzado que facilita la comunicación con personas con dificultades de comunicación.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="ComunicaApp, pictogramas, comunicación, discapacidad, lenguaje, búsqueda">
    <meta name="author" content="Juan Yepes Mateos">
    <title id="tittle-bar">ComunicaApp - Buscador de pictogramas</title>
</head>
<body>
    <h1 id="tittle">Buscador de pictogramas</h1>
</body>
</html>