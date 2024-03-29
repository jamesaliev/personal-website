const cursor = document.querySelector('#cursor');
const inner_cursor = document.querySelector('.cursor-inner');
let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let pos = { x: mouse.x - cursor.offsetWidth / 2, y: mouse.y - cursor.offsetHeight / 2 };
let originalSize = { width: inner_cursor.offsetWidth, height: inner_cursor.offsetHeight };
const speed = 0.1; // between 0 and 1

const updatePosition = () => {
  pos.x += (mouse.x - pos.x - cursor.offsetWidth / 2) * speed;
  pos.y += (mouse.y - pos.y - cursor.offsetHeight / 2) * speed;

  const distanceX = Math.abs(mouse.x - pos.x - cursor.offsetWidth / 2);
  const distanceY = Math.abs(mouse.y - pos.y - cursor.offsetHeight / 2);

  const stretchFactorX = 1 + distanceX * 0.005;
  const stretchFactorY = 1 + distanceY * 0.005;

  cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) scaleX(${stretchFactorX}) scaleY(${stretchFactorY})`;
};

const updateCoordinates = e => {
  mouse.x = e.pageX;
  mouse.y = e.pageY;
};

const updateSize = () => {
  inner_cursor.style.width = originalSize.width * 1.5 + 'px';
  inner_cursor.style.height = originalSize.height * 1.5 + 'px';
};

const shrink = () => {
  inner_cursor.style.width = 2 + 'vw';
  inner_cursor.style.height = 2 + 'vw';
};

document.addEventListener('mousedown', updateSize);
document.addEventListener('mouseup', shrink);

window.addEventListener('mousemove', updateCoordinates);

function loop() {
  updatePosition();
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
