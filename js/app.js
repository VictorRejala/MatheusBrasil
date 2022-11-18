function selectImage(event) {
    const card = event.currentTarget

    const cards = document.querySelectorAll(".product-list__card")
    cards.forEach(removeActiveClass)

    function removeActiveClass(card) {
        card.classList.remove('active')
    }

    const image = card.children[0].querySelector('.image')
    const imageContainer = document.querySelector(".box-image > img")

    imageContainer.src = image.src

    card.classList.add('active')
}


