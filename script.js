document.addEventListener('DOMContentLoaded', () => {
  const triangle = document.querySelector('.triangle');

  // Ubah warna triangle agar sesuai dengan siang
  function updateTriangleColor() {
      triangle.style.borderLeftColor = 'none'; // Warna pink untuk lebih romantis
  }

  updateTriangleColor();
});
