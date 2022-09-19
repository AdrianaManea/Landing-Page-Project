const testimonialContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.user-name');
const role = document.querySelector('.role');

const testimonials = [
  {
    name: 'Alan Shepard, 1961',
    position: 'Astronaut',
    photo: './img/mision-mileston-astronaut-alan-b-shepard.jpeg',
    text: 'Fix your little problem and light this candle.',
  },
  {
    name: 'Neil Armstrong, 1969',
    position: 'Astronaut',
    photo: './img/mission-milestone-astronaut-edwin-aldrin-moon-landing.jpeg',
    text: 'That\'s one small step for man, one giant leap for mankind.',
  },
  {
    name: 'Sally Ride, 1983',
    position: 'Astronaut',
    photo: './img/mission-milestone-sally-ride-sts-7.jpeg',
    text: 'The stars don\'t look bigger, but they do look brighter.',
  },
  {
    name: 'John Young, 1981',
    position: 'Astronaut',
    photo: './img/mission-milestone-sts-1-returns-home.jpeg',
    text: 'The dream is alive.',
  },
]

let idx = 1

function updateTestimonials() {
  // console.log(testimonials[1]);
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  // when get to the end, start over
  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonials, 10000)