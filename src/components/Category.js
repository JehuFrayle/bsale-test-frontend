export function Category(categoryObject, container,cb, api){
    const CategoryCard =  document.createElement('button');
    CategoryCard.className = `w-full md:w-1/3 inline-block mx-auto bg-blue-500/50 text-white mx-auto my-2 mx-4 p-4 text-lg capitalize 
    rounded-lg drop-shadow-md font-bold`;
    CategoryCard.innerHTML = categoryObject.name;
    CategoryCard.dataset.id = categoryObject.id;

    CategoryCard.addEventListener('click', ()=> cb(api, categoryObject));
    container.appendChild(CategoryCard);
}