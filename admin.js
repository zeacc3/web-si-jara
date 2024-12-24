// Menginisialisasi daftar produk (contoh data awal)
let products = [
  {
    name: "Example Product",
    price: 10000,
    stock: 20,
    image: "https://via.placeholder.com/50"
  }
];

// Fungsi untuk me-render daftar produk ke dalam tabel
function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Bersihkan isi tabel sebelum render ulang

  products.forEach((product, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="border border-gray-200 px-4 py-2">
        <span class="product-name">${product.name}</span>
      </td>
      <td class="border border-gray-200 px-4 py-2">
        <input type="number" value="${product.price}" class="w-full border px-2 py-1 rounded-md text-center product-price">
      </td>
      <td class="border border-gray-200 px-4 py-2">
        <input type="number" value="${product.stock}" class="w-full border px-2 py-1 rounded-md text-center product-stock">
      </td>
      <td class="border border-gray-200 px-4 py-2">
        <img src="${product.image}" alt="${product.name}" class="w-12 h-12">
      </td>
      <td class="border border-gray-200 px-4 py-2 text-center">
        <button class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 save-btn" data-index="${index}">Save</button>
        <button class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 delete-product-btn" data-index="${index}">Delete</button>
      </td>
    `;

    productList.appendChild(row);
  });

  // Tambahkan event listener untuk tombol Save dan Delete
  addEventListeners();
}

// Fungsi untuk menambahkan produk baru
function addProduct(event) {
  event.preventDefault();

  const name = document.getElementById("product-name").value.trim();
  const price = parseFloat(document.getElementById("product-price").value);
  const stock = parseInt(document.getElementById("product-stock").value);
  const image = document.getElementById("product-image").value.trim();

  // Validasi input
  if (!name || isNaN(price) || isNaN(stock) || !image) {
    alert("Harap isi semua field dengan benar!");
    return;
  }

  // Tambahkan produk ke daftar
  products.push({ name, price, stock, image });

  // Bersihkan form setelah produk ditambahkan
  document.getElementById("add-product-form").reset();

  // Render ulang daftar produk
  renderProducts();
}

// Fungsi untuk menyimpan perubahan pada produk
function saveProduct(index) {
  const rows = document.querySelectorAll("#product-list tr");
  const row = rows[index];

  const priceInput = row.querySelector(".product-price");
  const stockInput = row.querySelector(".product-stock");

  const updatedPrice = parseFloat(priceInput.value);
  const updatedStock = parseInt(stockInput.value);

  // Validasi input
  if (isNaN(updatedPrice) || isNaN(updatedStock)) {
    alert("Harga dan stok harus berupa angka yang valid!");
    return;
  }

  // Perbarui data produk
  products[index].price = updatedPrice;
  products[index].stock = updatedStock;

  alert("Produk berhasil diperbarui!");
}

// Fungsi untuk menghapus produk
function deleteProduct(index) {
  if (confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
    // Hapus produk dari daftar
    products.splice(index, 1);

    // Render ulang daftar produk
    renderProducts();
  }
}

// Fungsi untuk menambahkan event listener ke tombol Save dan Delete
function addEventListeners() {
  const saveButtons = document.querySelectorAll(".save-btn");
  const deleteButtons = document.querySelectorAll(".delete-product-btn");

  saveButtons.forEach(button => {
    button.addEventListener("click", () => saveProduct(button.dataset.index));
  });

  deleteButtons.forEach(button => {
    button.addEventListener("click", () => deleteProduct(button.dataset.index));
  });
}

// Event listener untuk form tambah produk
document.getElementById("add-product-form").addEventListener("submit", addProduct);

// Render awal daftar produk
renderProducts();
