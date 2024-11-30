class FocusAnnouncer extends HTMLElement {
    constructor() {
        super();

        // Создаем Shadow DOM
        const shadow = this.attachShadow({ mode: "open" });

        // Создаем контейнер
        const wrapper = document.createElement("div");
        wrapper.setAttribute("tabindex", "0"); // Делаем элемент фокусируемым

        // Заголовок
        const title = document.createElement("h1");
        title.setAttribute("tabindex", "0");
        title.textContent = this.getAttribute("title") || "Заголовок по умолчанию";

        // Абзац текста
        const paragraph = document.createElement("p");
        paragraph.setAttribute("tabindex", "0");
        paragraph.textContent = this.getAttribute("text") || "Текст по умолчанию";

        // Стили
        const style = document.createElement("style");
        style.textContent = `
      div {
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
        border-radius: 4px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
      }
      div:focus {
        outline: 2px solid #0078d4;
        box-shadow: 0 0 0 4px rgba(0, 120, 212, 0.3);
      }
      h1, p {
        margin: 0;
        padding: 5px 0;
      }
      h1:focus, p:focus {
        outline: 2px solid #0078d4;
      }
    `;


        wrapper.appendChild(title);
        wrapper.appendChild(paragraph);
        shadow.appendChild(style);
        shadow.appendChild(wrapper);

        [title, paragraph, wrapper].forEach((element) => {
            element.addEventListener("focus", (event) => {
                const text = event.target.textContent;
                const utterance = new SpeechSynthesisUtterance(text);
                speechSynthesis.speak(utterance);
            });
        });
    }
}

customElements.define("focus-announcer", FocusAnnouncer);