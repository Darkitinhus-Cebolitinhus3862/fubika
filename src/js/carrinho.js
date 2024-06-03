document.addEventListener('DOMContentLoaded', () => {
    const productsElement = document.getElementById('products');
    const checkoutButton = document.getElementById('checkoutButton');
    const qrcodeElement = document.getElementById('qrcode');
	qrcodeElement.style.display = 'none'
    let cart = [];

    const products = [
        { name: 'Produto 1', desc: 'Descrição do Produto 1', price: 999.99, img: 'https://png.pngtree.com/png-clipart/20240206/original/pngtree-sack-with-dry-chickpeas-and-scoop-seed-photo-png-image_14248998.png' },
        { name: 'Produto 2', desc: 'Descrição do Produto 2', price: 999.99, img: 'https://png.pngtree.com/png-clipart/20240222/original/pngtree-gardening-tool-cultivate-photo-png-image_14386525.png' },
        { name: 'Produto 3', desc: 'Descrição do Produto 3', price: 999.99, img: 'https://static.vecteezy.com/system/resources/previews/011/016/148/non_2x/succulent-plant-in-a-pot-isolated-free-png.png' },
        { name: 'Produto 4', desc: 'Descrição do Produto 4', price: 999.99, img: 'https://esterni.ind.br/site/wp-content/uploads/2022/11/Adhara-Floreira-1024x470.png' },
        { name: 'Produto 5', desc: 'Descrição do Produto 5', price: 999.99, img: 'https://lisaflora.com.br/wp-content/uploads/2017/06/Floreira.png' },
        { name: 'Produto 6', desc: 'Descrição do Produto 6', price: 999.99, img: 'https://images.tcdn.com.br/img/img_prod/1036362/orquideas_e_flores_pronto_uso_nutricao_premium_west_garden_500ml_1296_1_d7f32fc9c2872a3196de4dde625c91b1.jpg' }
    ];

    function renderProducts() {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <img src="${product.img}" alt="${product.name}">
                <p>${product.desc}</p>
                <p><strong>R$ ${product.price.toFixed(2)}</strong></p>
                <button onclick="addToCart('${product.name}', ${product.price})">Adicionar ao Carrinho</button>
            `;
            productsElement.appendChild(productDiv);
        });
    }

    window.addToCart = function(name, price) {
        cart.push({ name, price });
        alert(`${name} adicionado ao carrinho!`);
    };

    checkoutButton.addEventListener('click', () => {
		qrcodeElement.style.display = qrcodeElement.style.display === 'none' ? 'block' : 'none';
        if (cart.length === 0) {
            alert('Carrinho vazio!');
            return;
        }

        const totalValue = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

        const paymentData = {
            chave: "41996110756",
            beneficiario: "Eduardo Fumireko",
            cidade: "Rio Branco do Sul",
            valor: totalValue,
            descricao: "Aerofolio para meu Palio",
            identificador: "***"
        };

		fetch('https://valparaiso.fubi.ca/pix/index.php', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(paymentData)
		})
		.then(response => response.json())
		.then(data => {
		  const qrcodeElement = document.getElementById('qrcode');
		  const pixCodeTextarea = document.getElementById('pix-code');
console.log(pixCodeTextarea); // Should log the textarea element
		  const copyPixCodeButton = document.getElementById('copy-pix-code');

		  qrcodeElement.innerHTML += `<img src="data:image/png;base64,${data.qrcode64}" alt="QR Code">`;
		  pixCodeTextarea.textContent = data.linha;

		  copyPixCodeButton.addEventListener('click', () => {
			navigator.clipboard.writeText(data.linha);
			alert('Código PIX copiado para a área de transferência!');
		  });
		})
		.catch(error => console.error('Erro:', error));
	});

    renderProducts();
});
