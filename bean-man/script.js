const coffeeArray = [
    {
      coffeeType: 'Arabica',
      brandName: 'BeanMan',
      weight: '1kg',
      email: 'contact@beanman.com',
      phone: '00123456789',
      imgUrl: 'assets/coffee_beans.jpeg',
      rating: 4.9,
      price: 12,
      inStock: false,
      onSale: false,
    },
    {
      coffeeType: 'Black Coffee',
      brandName: 'BeanMan',
      weight: '1kg',
      email: 'contact@beanman.com',
      phone: '00123456789',
      imgUrl: 'assets/coffee_beans.jpeg',
      rating: 4.9,
      price: 12,
      inStock: true,
      onSale: false,
    },
    {
      coffeeType: 'Espresso',
      brandName: 'BeanMan',
      weight: '1kg',
      email: 'contact@beanman.com',
      phone: '00123456789',
      imgUrl: 'assets/coffee_beans.jpeg',
      rating: 4.9,
      price: 12,
      inStock: true,
      onSale: true,
    },
    {
      coffeeType: 'Robusta',
      brandName: 'BeanMan',
      weight: '1kg',
      email: 'contact@beanman.com',
      phone: '00123456789',
      imgUrl: 'assets/coffee_beans.jpeg',
      rating: 4.9,
      price: 12,
      inStock: false,
      onSale: false,
    },
    {
      coffeeType: 'Latte',
      brandName: 'BeanMan',
      weight: '1kg',
      email: 'contact@beanman.com',
      phone: '00123456789',
      imgUrl: 'assets/coffee_beans.jpeg',
      rating: 4.9,
      price: 12,
      inStock: true,
      onSale: false,
    },
    {
      coffeeType: 'Cappuccino',
      brandName: 'BeanMan',
      weight: '1kg',
      email: 'contact@beanman.com',
      phone: '00123456789',
      imgUrl: 'assets/coffee_beans.jpeg',
      rating: 4.9,
      price: 12,
      inStock: true,
      onSale: false,
    },
    {
      coffeeType: 'Decaf',
      brandName: 'BeanMan',
      weight: '1kg',
      email: 'contact@beanman.com',
      phone: '00123456789',
      imgUrl: 'assets/coffee_beans.jpeg',
      rating: 4.3,
      price: 8,
      inStock: false,
      onSale: false
    },
    {
        coffeeType: 'Decaf',
        brandName: 'BeanMan',
        weight: '1kg',
        email: 'contact@beanman.com',
        phone: '00123456789',
        imgUrl: 'assets/coffee_beans.jpeg',
        rating: 4.3,
        price: 8,
        inStock: false,
        onSale: false
      },
      {
        coffeeType: 'Decaf',
        brandName: 'BeanMan',
        weight: '1kg',
        email: 'contact@beanman.com',
        phone: '00123456789',
        imgUrl: 'assets/coffee_beans.jpeg',
        rating: 4.3,
        price: 8,
        inStock: false,
        onSale: false
      },
      {
        coffeeType: 'Decaf',
        brandName: 'BeanMan',
        weight: '1kg',
        email: 'contact@beanman.com',
        phone: '00123456789',
        imgUrl: 'assets/coffee_beans.jpeg',
        rating: 4.3,
        price: 8,
        inStock: false,
        onSale: false
      },
      {
        coffeeType: 'Decaf',
        brandName: 'BeanMan',
        weight: '1kg',
        email: 'contact@beanman.com',
        phone: '00123456789',
        imgUrl: 'assets/coffee_beans.jpeg',
        rating: 4.3,
        price: 8,
        inStock: false,
        onSale: false
      },
  ]
  
 const offersGrid = document.querySelector('.special-offers')

 function createCard(coffee) {

    let availability  = coffee.inStock ? 'AVAILABLE': 'UNAVAILABLE';

    let contnet = `<img class="bean-img" src=${coffee.imgUrl} alt="coffee bean" width="220px" height=auto> 
        <div class="details">
            <p class="bean-type">${coffee.coffeeType}</p>
            <p class="price">$${coffee.price}</p>
        </div>
        <p>${coffee.brandName}</p> 
        <button class="buy-btn">BUY</button>
        <div class=${availability}>
            ${availability}
        </div>`;
        console.log(contnet)

    let card = document.createElement('div');

    card.classList.add('offer-card')

    card.innerHTML = contnet;

   return card;
 }
 
  // |   counter   | |      condition          |  |counter update| => index ++ same with index  = index + 1 
  for (let index = 0; index < coffeeArray.length; index++) {
    const card =  createCard(coffeeArray[index]) 
    offersGrid.appendChild(card);
  }
  