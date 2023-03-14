document.addEventListener("DOMContentLoaded", function() {
    const heading = document.getElementById('my-heading');
    const span = heading.querySelector('span');
    const texts = ['', 'Đi lại', 'ghép xe', 'Chuyển hàng'];
    let index = 0;
    let isFirstTime = true;

    function updateText() {
        const text = texts[index];
        const length = text.length;
        let i = 0;

        function type() {
            span.innerHTML += text.charAt(i);
            i++;
            if (i < length) {
                setTimeout(type, 100); // Type each character with 100ms delay
            } else {
                let delayTime = isFirstTime ? 50 : 3000
                isFirstTime = false;
                setTimeout(erase, delayTime); // Wait 3s before erasing the text
            }
        }

        function erase() {
            const content = span.textContent;
            if (content.length > 0) {
                span.textContent = content.slice(0, -1);
                setTimeout(erase, 50); // Erase each character with 50ms delay
            } else {
                index = (index + 1) % texts.length;
                index = index == 0 ? 1 : index;
                setTimeout(updateText, 500); // Wait 0.5s before typing the next text
            }
        }

        span.classList.remove('hidden');
        type();
    }

    updateText();
});

