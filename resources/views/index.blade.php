<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{config('app.name')}}</title>
    @env('production')
    {{-- Production --}}
    @foreach ($manifest['resources/js/app.ts']['css'] as $css)
    <link rel="stylesheet" href="{{ config('app.url') . '/' .$css }}" />
    @endforeach
    <script src="/_app.config.js"></script>
    <script type="module" crossorigin src="{{ config('app.url') . '/' . $manifest['resources/js/app.ts']['file'] }}">
    </script>
    @else
    {{-- Development --}}
    <script type="module" src="http://localhost:{{env('VITE_PORT')}}/@vite/client"></script>
    <script type="module" src="http://localhost:{{env('VITE_PORT')}}/resources/js/app.ts"></script>
    @endenv
</head>

<body>
    <script>
        (() => {
      var htmlRoot = document.getElementById('htmlRoot');
      var theme = window.localStorage.getItem('__APP__DARK__MODE__');
      if (htmlRoot && theme) {
        htmlRoot.setAttribute('data-theme', theme);
        theme = htmlRoot = null;
      }
    })();
    </script>
    <div id="app">
        <style>
            .spinner-container {
                background: white;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0;
                padding: 0;
                position: fixed;
                top: 0;
                left: 0;
            }

            .spinner {
                width: 40px;
                height: 40px;
                position: relative;
                text-align: center;

                -webkit-animation: sk-rotate 2.0s infinite linear;
                animation: sk-rotate 2.0s infinite linear;
            }

            .dot1,
            .dot2 {
                width: 60%;
                height: 60%;
                display: inline-block;
                position: absolute;
                top: 0;
                background-color: #F8E047;
                border-radius: 100%;

                -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
                animation: sk-bounce 2.0s infinite ease-in-out;
            }

            .dot2 {
                top: auto;
                bottom: 0;
                -webkit-animation-delay: -1.0s;
                animation-delay: -1.0s;
            }

            @-webkit-keyframes sk-rotate {
                100% {
                    -webkit-transform: rotate(360deg)
                }
            }

            @keyframes sk-rotate {
                100% {
                    transform: rotate(360deg);
                    -webkit-transform: rotate(360deg)
                }
            }

            @-webkit-keyframes sk-bounce {

                0%,
                100% {
                    -webkit-transform: scale(0.0)
                }

                50% {
                    -webkit-transform: scale(1.0)
                }
            }

            @keyframes sk-bounce {

                0%,
                100% {
                    transform: scale(0.0);
                    -webkit-transform: scale(0.0);
                }

                50% {
                    transform: scale(1.0);
                    -webkit-transform: scale(1.0);
                }
            }
        </style>
        <div class="spinner-container">
            <div class="spinner">
                <div class="dot1"></div>
                <div class="dot2"></div>
            </div>
        </div>
    </div>
</body>



</html>