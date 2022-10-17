export function NoResults(container) {
    const NoResultsCard = document.createElement('div');
    NoResultsCard.className = `w-full mx-auto rounded-lg bg-blue-500/50 text-white px-8 py-16 drop-shadow-md`;

    const message = document.createElement('p');
    message.className = `text-4xl text-center font-bold`;
    message.innerHTML = 'No se encontraron resultados';
    NoResultsCard.appendChild(message);
    container.appendChild(NoResultsCard);
}