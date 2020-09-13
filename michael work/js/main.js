const selectElement = (Element) => document.querySelector(Element);

selectElement("mobile-menu").addEventlistener("click", {} => {
    selectElement("header").classlist.toggle("active");
});