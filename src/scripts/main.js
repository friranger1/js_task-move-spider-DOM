'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const containerLeft = wall.getBoundingClientRect().left;
  const containerTop = wall.getBoundingClientRect().top;
  const containerHeight = wall.getBoundingClientRect().height;
  const containerWidth = wall.getBoundingClientRect().width;

  const localLeft = x - containerLeft;
  const localTop = y - containerTop;

  const spiderWidth = spider.getBoundingClientRect().width;
  const spiderHeight = spider.getBoundingClientRect().height;

  const desiredLeft = localLeft - spiderWidth / 2;
  const desiredTop = localTop - spiderHeight / 2;

  const leftPos = Math.min(
    Math.max(desiredLeft, 0),
    containerWidth - 20 - spiderWidth,
  );
  const topPos = Math.min(
    Math.max(desiredTop, 0),
    containerHeight - 20 - spiderHeight,
  );

  spider.style.left = leftPos + 'px';
  spider.style.top = topPos + 'px';
});
