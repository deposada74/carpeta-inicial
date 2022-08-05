let form = document.getElementById('form-product');
form.addEventListener('submit', function{
    e.preventDefault();

    let description = document.getElementById('description');
    let amount = document.getElementById('amount');
    let price = document.getElementById('price');
    let products = document.getElementById('products');

    let div = documnet.createElement('div');
    div.innerHTML = `
        <div class="card text-center row">
            <div class="card-body col-md-11">
                <b>Descripcion:</b> ${description.value}
                <b>Cantida:</b> ${amount.value}
                <b>Precio: $</b>${price.value}
            </div>
            <div class="col-md-1">
                <a href="#" class="btn btn-danger" name="delete">Borrar</a>
            </div>
        </div>
    `;
    products.appendChild(div);
})