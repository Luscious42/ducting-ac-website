// Centralized site configuration
export const config = {
  businessName: 'Ducting Air Conditioning',
  phone: '(830) 832-7240',
  phoneHref: 'tel:8308327240',
  email: 'contact@ductingac.com',
  address: '7420 #22 Wilke Rd, Kingsbury, TX 78638',
  addressHref: 'https://maps.google.com/?q=7420+Wilke+Rd+Kingsbury+TX+78638'
};

document.addEventListener('DOMContentLoaded', () => {
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const address = document.getElementById('address');
  const year = document.getElementById('year');
  
  if (phone) {
    phone.innerHTML = <a href="${config.phoneHref}$">${config.phone}$</a>;
  }
  if (email) {
    email.href = mailto:${config.email}$;
    email.textContent = config.email;
  }
  if (address) {
    address.innerHTML = <a href="${config.addressHref}$">${config.address}$</a>;
  }
  if (year) {
    year.textContent = new Date().getFullYear();
  }
  
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }
});

function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('[name="name"]')?.value.trim();
  const email = form.querySelector('[name="email"]')?.value.trim();
  const phone = form.querySelector('[name="phone"]')?.value.trim();
  const message = form.querySelector('[name="message"]')?.value.trim();
  
  if (!name || !email || !message) {
    alert('Please complete all required fields.');
    return;
  }
  
  const subject = encodeURIComponent('HVAC Quote Request from ' + name);
  const body = encodeURIComponent(Name: ${name}$\nPhone: ${phone}$\n\nMessage:\n${message}$`);
  window.location.href = mailto:${config.email}$?subject=${subject}$&body=${body}$;
  
  form.reset();
}
