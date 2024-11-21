document.getElementById("generate").addEventListener("click", () => {
    const columns = document.getElementById("columns").value;
    const items = document.getElementById("items").value;
    const masonryContainer = document.getElementById("masonry-container");

    masonryContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    masonryContainer.innerHTML = "";

    const masonryData = [];
    for (let i = 0; i < items; i++) {
        masonryData.push({ id: i + 1, content: `Елемент ${i + 1}` });
    }

    fetch("/save-masonry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ columns, masonryData }),
    }).then((response) => {
        if (response.ok) alert("Дані збережено!");
    });
});

