<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <link rel="manifest" href="{{ asset('manifest.json') }}">
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">
    <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="{{ asset('apple-icon.png')}}"
    />

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">
</head>
    <body class="text-blueGray-700 antialiased">
        <noscript>
            <strong
            >We're sorry but vue-notus doesn't work properly without JavaScript
                enabled. Please enable it to continuez.</strong
            >
        </noscript>
        <div id="app"></div>
        <script defer src="{{ asset(mix('js/manifest.js')) }}"></script>
        <script defer src="{{ asset(mix('js/vendor.js')) }}"></script>
        <script defer src="{{ asset(mix('js/app.js')) }}"></script>
    </body>
</html>
