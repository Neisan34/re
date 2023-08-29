document.addEventListener("DOMContentLoaded", function() {
    const productSearch = document.getElementById("product-search");
    const productBoxes = document.querySelectorAll(".product-box");

    productSearch.addEventListener("input", function() {
        const searchTerm = productSearch.value.toLowerCase();
        let foundItems = false;

        productBoxes.forEach(function(box) {
            const productName = box.querySelector(".product-title").textContent.toLowerCase();

            if (productName.includes(searchTerm)) {
                box.style.display = "block";
                foundItems = true;
            } else {
                box.style.display = "none";
            }
        });

        if (!foundItems) {
            alert("No items found.");
        }
    });
});