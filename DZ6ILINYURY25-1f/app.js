const container = document.getElementById('container');

fetch("data.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card');

            const image = document.createElement('img');
            image.src = product.image;
            image.classList.add('image');
            card.appendChild(image);

            const title = document.createElement('h2');
            title.textContent = product.title;
            card.appendChild(title);

            const description = document.createElement('p');
            description.textContent = product.description;
            card.appendChild(description);

            const price = document.createElement('p');
            price.textContent = `Price: $${product.price}`;
            card.appendChild(price);

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error loading data:', error);
    });
