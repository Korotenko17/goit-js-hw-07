// const items = document.querySelectorAll('.item');
// Array.prototype.forEach.call(items, (element) => {
//     const title = element.querySelector('h2').innerHTML;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
// });


const categories = document.querySelectorAll("#categories .item");
console.log(`В списке ${categories.length} категории.`)
for (const item of categories) {
    const titleElem = item.querySelector("h2")
    // console.log(titleElem)
    const totalItem = item.querySelectorAll("ul li")
    // console.log(totalItem)
    console.log(`Категория: ${titleElem.textContent} Количество элементов: ${totalItem.length}`)
}