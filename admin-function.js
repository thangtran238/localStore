function Save() {							
  localStorage.setItem('listProduct', JSON.stringify(products));							
  }							
  //lấy sản phẩm							
function load() {							
  product = JSON.parse(localStorage.getItem('listProduct'));							
  }							
  //xuất sản phẩm ra html							
if (localStorage.getItem('listProduct') != null) {							
  load();							
  }				
var deleteProduct = function(i) {
  product.splice(i, 1);
  localStorage.setItem('listProduct',JSON.stringify(products));
  window.location.reload();
}
var addProduct = function() {
  var Product = {
    id: 'SP' + parseInt(products.length + 1),
    name: document.getElementById('name').value,
    img: document.getElementById('img').value,
    price: document.getElementById('price').value
  };
  products.push(Product);
  localStorage.setItem('listProduct',JSON.stringify(products));
  Save();
  window.location.reload;
}			
var listAdmin = function() {							
  var listadmin = '';							
  for (var i in product) {							
    var data = JSON.parse(JSON.stringify(product[i]));							
                
    var listadmin = '<tr>';												
		listadmin += '<td>' + data.id + '</td>';
    listadmin += '<td>' + data.name + '</td>';
    listadmin += '<td> <img src="' + data.img + '" alt="..." style="width:50px"></td>';
    listadmin += '<td>' + data.price + '</td>';
    listadmin += '<td>' + " " + '</td>'
    listadmin += '</tr>';							
                  
    document.getElementById('adminitems').innerHTML += listadmin;							
    }							
    Save();							
};							
  listAdmin();							
  localStorage.clear();



