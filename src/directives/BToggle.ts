import { DirectiveBinding } from "vue";

export default {
    mounted: function(el: HTMLElement, binding: DirectiveBinding) {
        el.setAttribute('data-bs-toggle', 'collapse');
        if (binding.arg) {
            let selector = `#${binding.arg}`
            const elements = document.querySelectorAll(`.${binding.arg}`);

            if (elements.length > 1) {
                selector = selector.replace('#', '.');
            }

            el.setAttribute('data-bs-target', selector)
        }
    }
}