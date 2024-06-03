document.addEventListener('DOMContentLoaded', () => {
    const productsElement = document.getElementById('products');
    const products3Element = document.getElementById('products3');
    const products6Element = document.getElementById('products6');
    const checkoutButton = document.getElementById('checkoutButton');
    let cart = [];

    const products = [
		{ name: 'Produto 1', desc: 'Descrição do Produto 1', price: 999.99, img: 'https://png.pngtree.com/png-clipart/20240206/original/pngtree-sack-with-dry-chickpeas-and-scoop-seed-photo-png-image_14248998.png' },
		{ name: 'Produto 2', desc: 'Descrição do Produto 2', price: 999.99, img: 'https://png.pngtree.com/png-clipart/20240222/original/pngtree-gardening-tool-cultivate-photo-png-image_14386525.png' },
		{ name: 'Produto 3', desc: 'Descrição do Produto 3', price: 999.99, img: 'https://static.vecteezy.com/system/resources/previews/011/016/148/non_2x/succulent-plant-in-a-pot-isolated-free-png.png' },
		{ name: 'Produto 4', desc: 'Descrição do Produto 4', price: 999.99, img: 'https://esterni.ind.br/site/wp-content/uploads/2022/11/Adhara-Floreira-1024x470.png' },
		{ name: 'Produto 5', desc: 'Descrição do Produto 5', price: 999.99, img: 'https://lisaflora.com.br/wp-content/uploads/2017/06/Floreira.png' },
		{ name: 'Produto 6', desc: 'Descrição do Produto 6', price: 999.99, img: 'https://images.tcdn.com.br/img/img_prod/1036362/orquideas_e_flores_pronto_uso_nutricao_premium_west_garden_500ml_1296_1_d7f32fc9c2872a3196de4dde625c91b1.jpg' },
		{ name: 'Produto 7', desc: 'Descrição do Produto 7', price: 999.99, img: 'https://images.tcdn.com.br/img/img_prod/1036362/pedra_quartzo_rolado_5kg_west_garden_1935_1_bb01d6ab567d95276e0ac644cab637ca.jpg' },
		{ name: 'Produto 8', desc: 'Descrição do Produto 8', price: 999.99, img: 'https://agropecuariacampinense.com.br/wp-content/uploads/2022/06/Colhedor-de-Frutas-Tramontina.png' },
		{ name: 'Produto 9', desc: 'Descrição do Produto 9', price: 999.99, img: 'https://http2.mlstatic.com/D_963966-MLB42478498517_072020-C.jpg' },
		{ name: 'Produto 10', desc: 'Descrição do Produto 10', price: 999.99, img: 'https://www.lizotferragens.com.br/_uploads/ProdutoDestaque/ProdutoDestaque_5837_orig.png' },
		{ name: 'Produto 11', desc: 'Descrição do Produto 11', price: 999.99, img: 'https://www.terradecultivo.com.br/wp-content/uploads/2020/05/LINHA-01.png' },
		{ name: 'Produto 12', desc: 'Descrição do Produto 12', price: 999.99, img: 'https://www.verdegarden.com.br/upload/produto/imagem/b_ae8cbbf674ec1509dc7a2f0c51fbc010.jpeg' },
		{ name: 'Produto 13', desc: 'Descrição do Produto 1', price: 999.99, img: 'https://static.vecteezy.com/system/resources/thumbnails/024/859/837/small_2x/monstera-plant-in-ceramic-pot-illustration-ai-generative-png.png' },
		{ name: 'Produto 14', desc: 'Descrição do Produto 2', price: 999.99, img: 'https://pngimg.com/d/watering_can_PNG2.png' },
		{ name: 'Produto 15', desc: 'Descrição do Produto 3', price: 999.99, img: 'https://png.pngtree.com/png-clipart/20231020/original/pngtree-burlap-sack-with-sunflower-seeds-grained-picture-image_13186680.png' }
	];
	

function renderProducts() {
        products.forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <img src="${product.img}" alt="${product.name}">
                <p>${product.desc}</p>
                <p><strong>R$ ${product.price.toFixed(2)}</strong></p>
                <a class="btn" onclick="addToCart('${product.name}', ${product.price})">Adicionar ao Carrinho</a>
            `;
            if (index < 6 && index < 11) {
                productsElement.appendChild(productDiv);
            } else if (index > 11) {
                products3Element.appendChild(productDiv);
            } else {
                products6Element.appendChild(productDiv);
            }
        });
    }

    window.addToCart = function(name, price) {
        cart.push({ name, price });
        alert(`${name} adicionado ao carrinho!`);
    };

    checkoutButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Carrinho vazio!');
            return;
        }

        const totalValue = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

		const cartItems = cart.map(item => `${item.name} - R$ ${item.price.toFixed(2)}`).join('\n');
		alert(`Itens do Carrinho:\n${cartItems}`);
    });

    renderProducts();
});
