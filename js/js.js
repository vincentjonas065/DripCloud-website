/* Drip Cloud interactive features */

document.addEventListener("DOMContentLoaded", function () {
    initializeProductSearch();
    initializeProductLightbox();
    initializeAboutAccordion();
    initializeLocationMap();
});

function initializeProductSearch() {
    const searchInput = document.getElementById("product-search");
    const sortSelect = document.getElementById("product-sort");
    const resultsMessage = document.getElementById("product-results");
    const noProductsMessage = document.getElementById("no-products");
    const productGrid = document.querySelector(".product-grid");

    if (!searchInput || !sortSelect || !resultsMessage || !noProductsMessage || !productGrid) {
        return;
    }

    const products = Array.from(productGrid.querySelectorAll(".product-card"));

    products.forEach(function (card, index) {
        card.dataset.originalOrder = String(index);
    });

    function getPrice(card) {
        const priceText = card.querySelector("strong")?.textContent || "";
        const match = priceText.match(/[0-9]+(?:\.[0-9]{1,2})?/);
        return match ? Number(match[0]) : 0;
    }

    function updateProducts() {
        const query = searchInput.value.trim().toLocaleLowerCase();
        const visibleProducts = products.filter(function (card) {
            return card.textContent.toLocaleLowerCase().includes(query);
        });

        const sortMode = sortSelect.value;
        visibleProducts.sort(function (first, second) {
            if (sortMode === "name-asc") {
                return first.querySelector("h3").textContent.localeCompare(second.querySelector("h3").textContent);
            }
            if (sortMode === "price-asc") {
                return getPrice(first) - getPrice(second);
            }
            if (sortMode === "price-desc") {
                return getPrice(second) - getPrice(first);
            }
            return Number(first.dataset.originalOrder) - Number(second.dataset.originalOrder);
        });

        products.forEach(function (card) {
            card.hidden = !visibleProducts.includes(card);
        });
        visibleProducts.forEach(function (card) {
            productGrid.appendChild(card);
        });

        const count = visibleProducts.length;
        resultsMessage.textContent = query
            ? count + (count === 1 ? " product found." : " products found.")
            : "Showing all " + count + " products.";
        noProductsMessage.hidden = count !== 0;
        if (count === 0) {
            noProductsMessage.setAttribute("tabindex", "-1");
        } else {
            noProductsMessage.removeAttribute("tabindex");
        }
    }

    searchInput.addEventListener("input", updateProducts);
    sortSelect.addEventListener("change", updateProducts);
    updateProducts();
}

function initializeProductLightbox() {
    const dialog = document.getElementById("product-lightbox");
    const image = document.getElementById("lightbox-image");
    const caption = document.getElementById("lightbox-caption");
    const position = document.getElementById("lightbox-position");

    if (!dialog || !image || !caption || !position || typeof dialog.showModal !== "function") {
        return;
    }

    const closeButton = dialog.querySelector(".lightbox-close");
    const previousButton = dialog.querySelector(".lightbox-previous");
    const nextButton = dialog.querySelector(".lightbox-next");
    let gallery = [];
    let currentIndex = 0;

    function showImage(index) {
        if (gallery.length === 0) return;
        currentIndex = (index + gallery.length) % gallery.length;
        const currentImage = gallery[currentIndex];
        image.src = currentImage.src;
        image.alt = currentImage.alt;
        caption.textContent = currentImage.alt;
        position.textContent = (currentIndex + 1) + " of " + gallery.length;
    }

    function openGallery(clickedImage) {
        const visibleImages = Array.from(document.querySelectorAll(".product-card:not([hidden]) [data-lightbox] img"));
        gallery = visibleImages.map(function (item) {
            return { src: item.currentSrc || item.src, alt: item.alt };
        });
        currentIndex = visibleImages.indexOf(clickedImage);
        showImage(currentIndex);
        dialog.showModal();
    }

    document.addEventListener("click", function (event) {
        const trigger = event.target.closest("a[data-lightbox]");
        if (!trigger) return;
        const clickedImage = trigger.querySelector("img");
        if (!clickedImage) return;
        event.preventDefault();
        openGallery(clickedImage);
    });

    closeButton.addEventListener("click", function () {
        dialog.close();
    });
    previousButton.addEventListener("click", function () {
        showImage(currentIndex - 1);
    });
    nextButton.addEventListener("click", function () {
        showImage(currentIndex + 1);
    });

    dialog.addEventListener("click", function (event) {
        if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") showImage(currentIndex - 1);
        if (event.key === "ArrowRight") showImage(currentIndex + 1);
    });

    let touchStartX = 0;
    image.addEventListener("touchstart", function (event) {
        touchStartX = event.changedTouches[0].screenX;
    }, { passive: true });
    image.addEventListener("touchend", function (event) {
        const touchDelta = event.changedTouches[0].screenX - touchStartX;
        if (Math.abs(touchDelta) < 50) return;
        showImage(currentIndex + (touchDelta < 0 ? 1 : -1));
    }, { passive: true });
}

function initializeAboutAccordion() {
    const accordionItems = document.querySelectorAll(".about-accordion-item");
    accordionItems.forEach(function (item) {
        item.addEventListener("toggle", function () {
            if (!item.open) return;
            accordionItems.forEach(function (otherItem) {
                if (otherItem !== item) otherItem.open = false;
            });
        });
    });
}

function initializeLocationMap() {
    const mapFrame = document.getElementById("contact-location-map");
    const mapStatus = document.getElementById("map-location-status");
    const openMapLink = document.getElementById("map-open-link");
    const locationButtons = document.querySelectorAll(".map-location-button");

    if (!mapFrame || !mapStatus || !openMapLink || locationButtons.length === 0) {
        return;
    }

    const defaultMapSource = mapFrame.src;

    locationButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const locationName = button.dataset.mapName;
            mapFrame.src = button.dataset.mapSrc || defaultMapSource;
            mapFrame.title = "Map showing " + locationName;
            mapStatus.textContent = "Showing the map for " + locationName + ".";
            openMapLink.href = button.dataset.mapLink;
            openMapLink.setAttribute("aria-label", "Open " + locationName + " in Google Maps");

            locationButtons.forEach(function (locationButton) {
                locationButton.setAttribute("aria-pressed", String(locationButton === button));
            });
        });
    });
}
