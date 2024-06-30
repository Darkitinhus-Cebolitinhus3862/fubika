document.addEventListener('DOMContentLoaded', () => {
    const productsElement = document.getElementById('products');
    const products3Element = document.getElementById('products3');
    const products6Element = document.getElementById('products6');
    const cartItemsElement = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkoutButton');

    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

    const products = [
        { name: 'Saco de grão-de-bico ', desc: 'Descrição do Produto 1', price: 70.99, img: 'https://png.pngtree.com/png-clipart/20240206/original/pngtree-sack-with-dry-chickpeas-and-scoop-seed-photo-png-image_14248998.png' },
        { name: 'Sacho garfo', desc: 'Descrição do Produto 2', price: 40.99, img: 'https://png.pngtree.com/png-clipart/20240222/original/pngtree-gardening-tool-cultivate-photo-png-image_14386525.png' },
        { name: 'Vaso de planta marrom', desc: 'Descrição do Produto 3', price: 200.50, img: 'https://static.vecteezy.com/system/resources/previews/011/016/148/non_2x/succulent-plant-in-a-pot-isolated-free-png.png' },
        { name: 'Vaso de plantas retangular de pedra', desc: 'Descrição do Produto 4', price: 280.55, img: 'https://esterni.ind.br/site/wp-content/uploads/2022/11/Adhara-Floreira-1024x470.png' },
        { name: 'Vaso de planta quadricular marrom', desc: 'Descrição do Produto 5', price: 150.99, img: 'https://lisaflora.com.br/wp-content/uploads/2017/06/Floreira.png' },
        { name: 'Fertilizante de orquídeas', desc: 'Descrição do Produto 6', price: 170.80, img: 'https://images.tcdn.com.br/img/img_prod/1036362/orquideas_e_flores_pronto_uso_nutricao_premium_west_garden_500ml_1296_1_d7f32fc9c2872a3196de4dde625c91b1.jpg' },
        { name: 'Pedra Quartzo Rolado', desc: 'Descrição do Produto 7', price: 50.70, img: 'https://images.tcdn.com.br/img/img_prod/1036362/pedra_quartzo_rolado_5kg_west_garden_1935_1_bb01d6ab567d95276e0ac644cab637ca.jpg' },
        { name: 'Coletor de frutas', desc: 'Descrição do Produto 8', price: 20.00, img: 'https://agropecuariacampinense.com.br/wp-content/uploads/2022/06/Colhedor-de-Frutas-Tramontina.png' },
        { name: 'Suporte para ramos', desc: 'Descrição do Produto 9', price: 15.40, img: 'https://http2.mlstatic.com/D_963966-MLB42478498517_072020-C.jpg' },
        { name: 'Pá laranja', desc: 'Descrição do Produto 10', price: 30.20, img: 'https://www.lizotferragens.com.br/_uploads/ProdutoDestaque/ProdutoDestaque_5837_orig.png' },
        { name: 'Fertilizante orgânico', desc: 'Descrição do Produto 11', price: 249.99, img: 'https://www.terradecultivo.com.br/wp-content/uploads/2020/05/LINHA-01.png' },
        { name: 'Suporte móvel de vaso', desc: 'Descrição do Produto 12', price: 90.09, img: 'https://www.verdegarden.com.br/upload/produto/imagem/b_ae8cbbf674ec1509dc7a2f0c51fbc010.jpeg' },
        { name: 'Vaso de plante cilíndrico', desc: 'Descrição do Produto 1', price: 150.00, img: 'https://static.vecteezy.com/system/resources/thumbnails/024/859/837/small_2x/monstera-plant-in-ceramic-pot-illustration-ai-generative-png.png' },
        { name: 'Regador de metal verde', desc: 'Descrição do Produto 2', price: 120.50, img: 'https://pngimg.com/d/watering_can_PNG2.png' },
        { name: 'Saco de semente de Girassol', desc: 'Descrição do Produto 3', price: 60.37, img: 'https://png.pngtree.com/png-clipart/20231020/original/pngtree-burlap-sack-with-sunflower-seeds-grained-picture-image_13186680.png' }
    ];

    function renderProducts() {
        products.forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <img src="${product.img}" alt="${product.name}">
                <p><strong>R$ ${product.price.toFixed(2)}</strong></p>
                <button class="btn" onclick="">Detalhes</button>
                <button class="btn" onclick="addToCart('${product.name}', ${product.price})">Adicionar ao Carrinho</button>
            `;
            if (index < 6) {
                productsElement.appendChild(productDiv);
            } else if (index < 11) {
                products6Element.appendChild(productDiv);
            } else {
                products3Element.appendChild(productDiv);
            }
        });
    }
    

    function renderCartItems() {
        if (!cartItemsElement) {
            return;
        }

        cartItemsElement.innerHTML = ''; 

        cart.forEach((item, index) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${item.name}</td>
                <td>R$ ${item.price.toFixed(2)}</td>
                <td><input type="number" value="${item.quantity}" min="1" data-index="${index}" class="quantity-input"></td>
                <td>R$ ${(item.price * item.quantity).toFixed(2)}</td>
            `;

            cartItemsElement.appendChild(row);
        });

        sessionStorage.setItem('cart', JSON.stringify(cart));
    }

    window.addToCart = function(name, price) {
        const existingItemIndex = cart.findIndex(item => item.name === name);

        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        renderCartItems();
        saveCart();
        alert(`${name} adicionado ao carrinho!`);
    };

    function saveCart() {
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }

    if (cartItemsElement) {
        cartItemsElement.addEventListener('input', (event) => {
            if (event.target.classList.contains('quantity-input')) {
                const index = event.target.dataset.index;
                const quantity = parseInt(event.target.value);

                if (quantity > 0) {
                    cart[index].quantity = quantity;
                } else {
                    cart.splice(index, 1);
                }

                renderCartItems();
                saveCart();
            }
        });
    }

    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Carrinho vazio!');
                return;
            }

            const selectedPayment = document.querySelector('input[name="payment"]:checked');
            if (!selectedPayment) {
                window.location.href = './carrinho.html';
                return;
            }

            const totalValue = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
            const cartItems = cart.map(item => `${item.name} - R$ ${(item.price * item.quantity).toFixed(2)} (x${item.quantity})`).join('\n');

            alert(`Itens do Carrinho:\n${cartItems}\nTotal: R$ ${totalValue}\nPagamento: ${selectedPayment.value}\nPedido finalizado!`);

            cart = [];
            renderCartItems();
            saveCart();
        });
    }

    renderProducts();
    renderCartItems();
});
