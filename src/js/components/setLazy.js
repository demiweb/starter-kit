import lozad from 'lozad';

export default function lazyLoading() {
  const imgs = [].slice.call(document.querySelectorAll('.js-lazy'));

  if(!imgs.length) return;
  imgs.forEach(img => {
    const observer = lozad(img);
    observer.observe();
  });
};
