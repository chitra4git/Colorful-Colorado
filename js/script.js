let quotes = [
    `The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela`,
    `The way to get started is to quit talking and begin doing. -Walt Disney`,
    `If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt`,
    `If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey`,
    `If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron`,
    `Life is what happens when you're busy making other plans. -John Lennon`,
];
  
document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    //for changing quotes
    document.querySelector('#quote-title').addEventListener('click', (evt) => {
        randomQuote()
      })

    //changing background color
    document.querySelector('body').style.backgroundColor = 'lightyellow';

    //removing item from the list

    const removeActivities = document.querySelectorAll('#activities > li');

    document.querySelector('#activities').removeChild(removeActivities[removeActivities.length - 1]);

    // title align center
    document.querySelectorAll('.title').forEach((item) => {
        item.setAttribute("style","text-align:center")
      })

      //quote align center

      document.querySelectorAll('.quote').forEach((item) => {
        item.setAttribute("style","text-align:center")
      })

      //adding in sidebar list

      const li = document.createElement('li');
      li.textContent = 'Rock Climbing';
      document.querySelector('#activities').appendChild(li);

      //changing the background for sidebar

      document.querySelectorAll('.aside').forEach((item) => {
        item.addEventListener('mouseout', (evt) => {
          evt.currentTarget.classList.toggle('purple')
        })
        item.addEventListener('mouseenter', (evt) => {
        evt.stopPropagation()
        evt.currentTarget.classList.toggle('red')
        })
      })
      

})
