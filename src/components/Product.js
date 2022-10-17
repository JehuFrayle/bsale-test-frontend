export function Product(productObject, productContainer) {
    const productCard =  document.createElement('a');
    productCard.className = `flex flex-col justify-evenly m-4 p-4 capitalize bg-sky-100 w-56 inline-block text-center aspect-[3/4] rounded-md 
    hover:cursor-pointer hover:scale-110 transition 2s
    drop-shadow-md`;
    
    const productName = document.createElement('p');
    productName.innerText = (productObject.name).toLowerCase();
    productName.className = 'capitalize font-bold text-center';
    productCard.append(productName);

    const productImage = document.createElement('img');
    productImage.src = productObject.url_image || 'https://www.comparasoftware.com/storage/app/contents/3oJMkGsYapKeI3vr7tWU0sDbAIe31uwGXcoyZSxg.png';
    productImage.className = 'w-3/4 mx-auto aspect-[1/1] bg-cover bg-center bg-blue-200 rounded-lg';
    productCard.append(productImage);
    
    const productPrice = document.createElement('p');
    productPrice.innerText = `$${(productObject.price)/100}`;
    productPrice.className = `text-center text-lg`;
    productCard.append(productPrice);

    const productDiscount = document.createElement('span');
    productDiscount.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(255, 0, 0, 1);transform: ;msFilter:;"><path d="m20.749 12 1.104-1.908a1 1 0 0 0-.365-1.366l-1.91-1.104v-2.2a1 1 0 0 0-1-1h-2.199l-1.103-1.909a1.008 1.008 0 0 0-.607-.466.993.993 0 0 0-.759.1L12 3.251l-1.91-1.105a1 1 0 0 0-1.366.366L7.62 4.422H5.421a1 1 0 0 0-1 1v2.199l-1.91 1.104a.998.998 0 0 0-.365 1.367L3.25 12l-1.104 1.908a1.004 1.004 0 0 0 .364 1.367l1.91 1.104v2.199a1 1 0 0 0 1 1h2.2l1.104 1.91a1.01 1.01 0 0 0 .866.5c.174 0 .347-.046.501-.135l1.908-1.104 1.91 1.104a1.001 1.001 0 0 0 1.366-.365l1.103-1.91h2.199a1 1 0 0 0 1-1v-2.199l1.91-1.104a1 1 0 0 0 .365-1.367L20.749 12zM9.499 6.99a1.5 1.5 0 1 1-.001 3.001 1.5 1.5 0 0 1 .001-3.001zm.3 9.6-1.6-1.199 6-8 1.6 1.199-6 8zm4.7.4a1.5 1.5 0 1 1 .001-3.001 1.5 1.5 0 0 1-.001 3.001z"></path></svg> ${productObject.discount}% OFF`;
    productDiscount.className = `flex space-x-2 p-2 absolute -top-4 -right-4 color-red-500 bg-red-300 rounded-lg drop-shadow-md
    rotate-12`;
    productObject.discount > 0 ? productCard.append(productDiscount) : null;

    productContainer.append(productCard);
}