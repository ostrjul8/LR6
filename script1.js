setInterval(() => {
    fetch("/get-masonry")
        .then(response => response.json())
        .then(data => {
            const masonryContainer = document.getElementById("masonry-container");
            masonryContainer.style.gridTemplateColumns = `repeat(${data.columns}, 1fr)`;

            masonryContainer.innerHTML = "";
            data.masonryData.forEach(item => {
                const masonryItem = document.createElement("div");
                masonryItem.className = "masonry-item";
                masonryItem.textContent = item.content;
                masonryContainer.appendChild(masonryItem);
            });
        });
}, 5000);