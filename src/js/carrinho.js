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
        { name: 'Saco de semente de Girassol', desc: 'Descrição do Produto 3', price: 60.37, img: 'https://png.pngtree.com/png-clipart/20231020/original/pngtree-burlap-sack-with-sunflower-seeds-grained-picture-image_13186680.png' },
        { name: 'Canteiro de Jardinagem', desc: 'SIM', price: 89.99, img: 'https://i.pinimg.com/564x/e8/25/91/e82591106eb70e54d786ec3781bd5b17.jpg' },
        { name: 'Regador Metálico', desc: 'Bo o watta', price: 30.55, img: 'https://i.pinimg.com/236x/29/23/c4/2923c40299c30b821b9ca72f11045974.jpg' },
        { name: 'Pá de Aço', desc: 'cava burako', price: 25.87, img: 'https://i.pinimg.com/236x/cc/c1/05/ccc105c9bd1b1f6edef6e8d0289f33ab.jpg' },
        { name: 'Kit Pás Ancinho e Enxada', desc: 'Cava Arrasta', price: 180.00, img: 'https://i.pinimg.com/236x/60/69/95/60699596afbaf8cdc96de66814b6b415.jpg' },
        { name: 'Tesourão de poda', desc: 'tic tic tic', price: 35.66, img: 'https://i.pinimg.com/236x/a7/70/f7/a770f70498a39366f5c4c0fa590d586c.jpg' },
        { name: 'Carrinho de Mão', desc: 'Carrega carrega', price: 150.77, img: 'https://i.pinimg.com/236x/ab/5d/f9/ab5df99efd0ee8ee84314c8fa0c7c70d.jpg' },
        { name: 'Serrote', desc: 'Serra serra serrador', price: 48.99, img: 'https://i.pinimg.com/236x/14/bd/73/14bd73bb8884d477f67f3789306f5e1c.jpg' },
        { name: 'Tesoura de Poda', desc: 'Corta nenem', price: 42.66, img: 'https://i.pinimg.com/236x/51/23/df/5123df5d62e69a02f598a2daf5015778.jpg' },
        { name: 'Motossera', desc: 'Chainsaw Man', price: 388.99, img: 'https://i.pinimg.com/236x/94/ec/3f/94ec3fb0282f8a8ee89c36a34358c5a0.jpg' },
        { name: 'Mini Trator', desc: 'TAN DAN DAN DAN DAN MAX VERSTAPEN', price: 4070, img: 'https://i.pinimg.com/236x/31/21/28/3121286e9c548aff25762117de7831ff.jpg' },
        { name: 'Pá Pequena', desc: 'Cava buraquinhos', price: 30.99, img: 'https://i.pinimg.com/236x/3b/74/06/3b74061eb776aeb9ad06beb6d78fe987.jpg' },
        { name: 'Tesoura Elétrica', desc: 'POOOWWWEEERRRRR', price: 140.55, img: 'https://i.pinimg.com/236x/83/0f/5d/830f5d50add846d0665100e5f7cf74ec.jpg' },
        { name: 'Kit de cudiados Suculentas e Bonsai', desc: 'Cuida', price: 222.22, img: 'https://i.pinimg.com/236x/c0/0e/ce/c00eceead74a2f8415ca6de7b35704fb.jpg' },
        { name: 'Alicate de Poda', desc: 'Corta precisa', price: 37.31, img: 'https://i.pinimg.com/236x/4f/77/31/4f7731c403de0a3efb9ff421c141af5b.jpg' },
        { name: 'Tesoura de jardinagem', desc: 'Corta com força', price: 40.00, img: 'https://i.pinimg.com/236x/75/bc/cc/75bccc9c6caef0198981d74af040dae7.jpg' },
        { name: 'Enxada Portátil', desc: 'Cavuca', price: 70.77, img: 'https://i.pinimg.com/236x/30/c6/4a/30c64af1f2c9e618347938c8dd41e16a.jpg' },
        { name: 'Pazinha Inox', desc: 'Faz mini buracos', price: 20.88, img: 'https://i.pinimg.com/236x/95/28/5e/95285e6e7027797e8be3d107f3243437.jpg' },
        { name: 'Removedor de mudas', desc: 'Remove mudas neh', price:40.33, img: 'https://i.pinimg.com/236x/8a/14/ad/8a14ad6533d09a9ad8e6a7acff794a03.jpg' },
        { name: 'Enxada para Jardim', desc: 'Cavuca legal', price: 50.66, img: 'https://i.pinimg.com/236x/ca/62/27/ca622790847c79148accc7830d71a30d.jpg' },
        { name: 'Kit Serrote Dobrável e Machadinho', desc: 'Serra e corta bem', price: 88.99, img: 'https://i.pinimg.com/236x/66/59/a6/6659a68a15486e3f2e8bcc09ce59227e.jpg' },
        { name: 'Kit de Jardinagem para Suculentas', desc: 'Cuida de suculenta neh', price: 229.90, img: 'https://i.pinimg.com/236x/58/a0/bc/58a0bc3b215ac6403b870dab4e4a0292.jpg' },
        { name: 'Serrote Poda Galhos', desc: 'Poda galhos no reco reco', price: 49.90, img: 'https://i.pinimg.com/236x/3c/62/43/3c624353d2325d069a6a573475ece78a.jpg' },
        { name: 'Colher de cantos Retos', desc: 'Cavuca e ascenta bem', price: 15.90, img: 'https://i.pinimg.com/236x/67/28/a7/6728a7edae22059ee398c9c346e13d92.jpg' },
        { name: 'Pás Ppara Escavar Vegetais', desc: 'Escava vegetais', price: 50.99, img: 'https://i.pinimg.com/236x/b4/d1/0f/b4d10f3d6e9d3fb5f308668b375ef5bf.jpg' },
        { name: 'Kit Ferramentas de Jardinagem com Maleta', desc: 'Muita coisa tio', price: 160.50, img: 'https://i.pinimg.com/236x/0a/59/1f/0a591fdf1ad7e092b7747c9f1155fff7.jpg' },
        { name: 'Kit com 10 Peças Jardinagem', desc: 'Kit ae sla', price: 249.99, img: 'https://i.pinimg.com/236x/cc/8a/8c/cc8a8ca102d27fe3bd3527b1339186c8.jpg' },
        { name: 'Conjunto de Ferramentas para Jardinagem', desc: 'Muita coisa', price: 189.90, img: 'https://i.pinimg.com/236x/bb/ea/23/bbea237d53d6a3a4b0b3dd362eb78e6e.jpg' },
        { name: 'Pá de Limpeza', desc: 'Raspa as coisas', price: 45.00, img: 'https://i.pinimg.com/236x/67/ab/ef/67abef1624a9c5ea466d130d5e9b6a47.jpg' },
        { name: 'Mini Picareta', desc: 'Pontudinha', price: 35.00, img: 'https://i.pinimg.com/236x/48/a3/83/48a3833b84cda2df6a54af298e4dbd72.jpg' },
        { name: 'Extrator de Ervas Daninhas', desc: 'Sai pra la sangue-suga', price: 29.90, img: 'https://i.pinimg.com/236x/0f/e7/ea/0fe7ead592d7c43f39ab362ff0243429.jpg' },
        { name: 'Aparador para Bordas de gramado', desc: 'Apara apara apara', price: 60.00, img: 'https://i.pinimg.com/236x/50/50/2d/50502df5c3c3ceb8769bfce3f6b79290.jpg' },
        { name: 'Mini Serra Elétrica 24v', desc: 'Corta', price: 260.00, img: 'https://i.pinimg.com/236x/48/4a/af/484aaf4c202a5a3a8200d2d05d5c923b.jpg' },
        { name: 'Sacho Coração e Sacho Garfo', desc: 'Arrasta', price: 65.50, img: 'https://i.pinimg.com/236x/f3/68/6d/f3686d914fb884ac3ab1d115268ae533.jpg' },
        { name: 'Abridor de buracos na terra', desc: 'Abre buracos', price: 20.00, img: 'https://i.pinimg.com/236x/85/2a/bb/852abb11da33641bad0f167d20868450.jpg' },
        { name: 'Cortador de Grama', desc: 'Corta grama muito bem', price: 160.85, img: 'https://i.pinimg.com/236x/e5/65/6b/e5656b9818d4ebaa0337703e60a19147.jpg' },
        { name: 'Enxada', desc: 'Cavuca muito ela', price: 54.90, img: 'https://i.pinimg.com/236x/26/f8/6e/26f86e6b7febab93592ec442ffa3f59d.jpg' },
        { name: 'Ancinho', desc: 'Parece um garfo neh', price: 47.50, img: 'https://i.pinimg.com/236x/21/34/0d/21340d3947622de6edbc8d8d2c5d8609.jpg' },
    ];

    function renderProducts() {
        products.forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <img src="${product.img}" alt="${product.name}">
                <p><strong>R$ ${product.price.toFixed(2)}</strong></p>
                <a href="item.html?name=${encodeURIComponent(product.name)}&desc=${encodeURIComponent(product.desc)}&price=${encodeURIComponent(product.price.toFixed(2))}&img=${encodeURIComponent(product.img)}" class="btn">Detalhes</a>
                <button class="btn" onclick="addToCart('${product.name}', ${product.price})">Adicionar ao Carrinho</button>
            `;
            if (index < 24) {
                productsElement.appendChild(productDiv);
            } else if (index < 48) {
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
                <td>
                    <button class="btn" id="a" onclick="decreaseQuantity(${index})">-</button>
                    <span>${item.quantity}</span>
                    <button class="btn" id="a" onclick="increaseQuantity(${index})">+</button>
                </td>
                <td>R$ ${(item.price * item.quantity).toFixed(2)}</td>
                <td><button class="btn" id="lixo" onclick="removeFromCart(${index})">🗑️</button></td>
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

    window.increaseQuantity = function(index) {
        cart[index].quantity++;
        renderCartItems();
        saveCart();
    };

    window.decreaseQuantity = function(index) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);
        }
        renderCartItems();
        saveCart();
    };

    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        renderCartItems();
        saveCart();
    };

    function saveCart() {
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }

    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Carrinho vazio!');
                return;
            }

            const selectedPayment = document.querySelector('input[name="payment"]:checked');
            if (!selectedPayment) {
                alert(`Insira um modo de pagamento!`);
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