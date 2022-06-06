<!doctype html>

<title>Laravel with Vue 3</title>
<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400&display=swap" rel="stylesheet">
<script defer src="https://unpkg.com/alpinejs@3.10.2/dist/cdn.min.js"></script>


<body style="font-family: 'Raleway', sans-serif;">
<div id="app" class="px-6 py-8">
    <div class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {{$slot}}
</div>
</div>
</div>
</body>
