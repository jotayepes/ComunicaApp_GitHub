<?php
        $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
        switch ($lang){
            case "es":
                header("Location: es/es.html");
                break;
            case "ca":
                header("Location: ca/ca.html");
                break;     
            case "eu":
                header("Location: eu/eu.html");
                break;  
            case "gl":
                header("Location: gl/gl.html");
                break;
            case "en":
                header("Location: en/en.html");
                break;
            case "fr":
                header("Location: fr/fr.html");
                break;
            case "de":
                header("Location: de/de.html");
                break;
            case "ar":
                header("Location: ar/ar.html");
                break;
            case "bg":
                header("Location: bg/bg.html");
                break;
            case "he":
                header("Location: he/he.html");
                break;
            case "hr":
                header("Location: hr/hr.html");
                break;
            case "hu":
                header("Location: hu/hu.html");
                break;
            case "it":
                header("Location: it/it.html");
                break;
            case "ko":
                header("Location: ko/ko.html");
                break;
            case "lt":
                header("Location: lt/lt.html");
                break;
            case "mk":
                header("Location: mk/mk.html");
                break;
            case "pl":
                header("Location: pl/pl.html");
                break;
            case "pt":
                header("Location: pt/pt.html");
                break;
            case "ro":
                header("Location: ro/ro.html");
                break;
            case "ru":
                header("Location: ru/ru.html");
                break;
            case "zh":
                header("Location: zh/zh.html");
                break;
            default:
                header("Location: en/en.html");
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