document.addEventListener("DOMContentLoaded", function() {
    // Function to apply dynamic colors based on class names
    document.querySelectorAll('[class*="bg-["], [class*="text-["], [class*="hover:bg-["], [class*="hover:text-["]').forEach(element => {
        element.classList.forEach(cls => {
            // Match classes like `bg-[#123456]` or `text-[#123456]`
            const bgMatch = cls.match(/^bg-\[(#[\da-fA-F]{6})\]$/);
            const textMatch = cls.match(/^text-\[(#[\da-fA-F]{6})\]$/);

            // Match hover classes like `hover:bg-[#123456]` or `hover:text-[#123456]`
            const hoverBgMatch = cls.match(/^hover:bg-\[(#[\da-fA-F]{6})\]$/);
            const hoverTextMatch = cls.match(/^hover:text-\[(#[\da-fA-F]{6})\]$/);

            if (bgMatch) {
                const color = bgMatch[1];
                element.style.setProperty('--dynamic-bg-color', color);
                element.classList.add('bg-custom');
            }

            if (textMatch) {
                const color = textMatch[1];
                element.style.setProperty('--dynamic-text-color', color);
                element.classList.add('text-custom');
            }

            if (hoverBgMatch) {
                const color = hoverBgMatch[1];
                element.style.setProperty('--dynamic-bg-hover-color', color);
                element.classList.add('hover:bg-custom');
            }

            if (hoverTextMatch) {
                const color = hoverTextMatch[1];
                element.style.setProperty('--dynamic-text-hover-color', color);
                element.classList.add('hover:text-custom');
            }
        });
    });
});
