import "./styles.css";
import { Product } from "./components/Product";
import { NoResults } from "./components/NoResults";
import { Category } from "./components/Category";

const API = process.env.BASE_API;
const rootContainer = document.getElementById('root');
const page = document.getElementById('pageTitle');

function cleanContainer(container) {
    rootContainer.innerHTML = '';
}

function fetchProducts(baseURL) {
    cleanContainer(rootContainer);
    page.innerHTML = 'Todos los productos';

    fetch(baseURL + '/api/products', { method: 'GET' })
        .then((response) => response.json())
        .then((data) => data.forEach((item) => Product(item, rootContainer)))
        .catch( (err) => console.error(err));
}
fetchProducts(API); // <== Inicializa la pagina trayendo todos los productos

function fetchSearch(baseURL, search){
    cleanContainer(rootContainer);
    page.innerHTML = 'Resultados de la búsqueda';

    const query = search.replaceAll(' ', '+');
    fetch(baseURL + '/api/products?search='+query, { method: 'GET' })
        .then((response) => response.json())
        .then((data) => { data.length > 0 ? data.forEach((item) => Product(item, rootContainer)): NoResults(rootContainer)})
        .catch( (err) => console.error(err));
}
const searchBar = document.querySelector('input');
searchBar.addEventListener('keyup', (event) => event.key === 'Enter' && searchBar.value.length > 0 ? fetchSearch(API, searchBar.value) : null);

function fetchCategories(baseURL){
    cleanContainer(rootContainer);
    page.innerHTML = 'Categorias';

    fetch(baseURL + '/api/categories', { method: 'GET' })
        .then((response) => response.json())
        .then((data) => { data.forEach((item) => Category(item, rootContainer, fetProductsByCategory, API))})
        .catch( (err) => console.error(err));
}
function fetProductsByCategory(baseURL, categoryObject){
    cleanContainer(rootContainer);
    page.innerHTML = `${categoryObject.name}`;

    fetch(baseURL + '/api/categories/'+categoryObject.id, { method: 'GET' })
        .then((response) => response.json())
        .then((data) => { data.forEach((item) => Product(item, rootContainer))})
        .catch( (err) => console.error(err));
}
const categoryButton = document.getElementById("categories");
categoryButton.addEventListener('click', () => fetchCategories(API))