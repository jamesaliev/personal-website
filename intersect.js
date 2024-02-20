const elements = document.querySelectorAll('.scroll_one');
const elements1 = document.querySelectorAll('.scroll_two');
const elements2 = document.querySelectorAll('.terminal_container');
const elements3 = document.querySelectorAll('.whatIdo');
const elements4 = document.querySelectorAll('.whatIdo1');
const elements5 = document.querySelectorAll('.whatIdo2');


const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.6
};

const callbacks = (entries) => {
  entries.forEach(entry => {
    // Check if the observed element has the class '.scroll_one'
    if (entry.isIntersecting && entry.target.classList.contains('scroll_one')) {
      entry.target.classList.add('scroll_one_active');
    }
  });
};

let observer = new IntersectionObserver(callbacks, options);
elements.forEach(element => {
  observer.observe(element);
});

const callbacks1 = (entries) => {
    entries.forEach(entry => {
      // Check if the observed element has the class '.scroll_one'
      if (entry.isIntersecting && entry.target.classList.contains('scroll_two')) {
        entry.target.classList.add('scroll_two_active');
      }
    });
  };

let observer1 = new IntersectionObserver(callbacks1, options);
elements1.forEach(element1 => {
  observer1.observe(element1);
});

const callbacks2 = (entries) => {
  entries.forEach(entry => {
    // Check if the observed element has the class '.scroll_one'
    if (entry.isIntersecting && entry.target.classList.contains('terminal_container')) {
      entry.target.classList.add('terminal_container_active');
    }
  });
};

let observer2 = new IntersectionObserver(callbacks2, options);
elements2.forEach(element2 => {
observer2.observe(element2);
});

const callbacks3 = (entries) => {
  entries.forEach(entry => {
    // Check if the observed element has the class '.scroll_one'
    if (entry.isIntersecting && entry.target.classList.contains('whatIdo')) {
      entry.target.classList.add('whatIdo_active');
    }
  });
};

let observer3 = new IntersectionObserver(callbacks3, options);
elements3.forEach(element3 => {
observer3.observe(element3);
});

const callbacks4 = (entries) => {
  entries.forEach(entry => {
    // Check if the observed element has the class '.scroll_one'
    if (entry.isIntersecting && entry.target.classList.contains('whatIdo1')) {
      entry.target.classList.add('whatIdo_active1');
    }
  });
};

let observer4 = new IntersectionObserver(callbacks4, options);
elements4.forEach(element4 => {
observer4.observe(element4);
});

const callbacks5 = (entries) => {
  entries.forEach(entry => {
    // Check if the observed element has the class '.scroll_one'
    if (entry.isIntersecting && entry.target.classList.contains('whatIdo2')) {
      entry.target.classList.add('whatIdo_active2');
    }
  });
};

let observer5 = new IntersectionObserver(callbacks5, options);
elements5.forEach(element5 => {
observer5.observe(element5);
});
