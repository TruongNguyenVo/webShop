// hàm thông báo thêm items vào giỏ hàng
document.getElementById("cart").onclick = function(){
	window.alert('Add Item To Cart');
}
// hàm hiển thị navbar khi click vào icon bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bar){
	bar.addEventListener('click', () => {
		nav.classList.add('active');
	})
}
//hàm đóng navbar
const close = document.getElementById('close');
if(close){
	close.addEventListener('click', () => {
		nav.classList.remove('active');
	})
}