function heads_from_html(html_text: string) {
    const parser = new DOMParser();
    const new_html = parser.parseFromString(html_text, "text/html");
    console.log(new_html);
    return [0, 0];
}

export { heads_from_html };
