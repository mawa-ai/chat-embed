<div class="typing-indicator"><span /> <span /> <span /></div>

<style>
    .typing-indicator {
        background-color: #eeeeee;
        will-change: transform;
        width: fit-content;
        border-radius: 50px;
        padding: 15px;
        display: table;
        margin: 0;
        animation: 2s bulge infinite ease-out;
    }

    .typing-indicator span {
        height: 10px;
        width: 10px;
        float: left;
        margin: 0 1px;
        background-color: #9e9ea1;
        display: block;
        border-radius: 50%;
        opacity: 0.4;
    }

    .typing-indicator span:nth-of-type(1) {
        animation: 1s blink infinite 0.3333s;
    }

    .typing-indicator span:nth-of-type(2) {
        animation: 1s blink infinite 0.6666s;
    }

    .typing-indicator span:nth-of-type(3) {
        animation: 1s blink infinite 0.9999s;
    }

    @keyframes blink {
        50% {
            opacity: 1;
        }
    }

    @keyframes bulge {
        50% {
            transform: scale(1.05);
        }
    }
</style>
