/**
 * Created by Fairy on 2018/12/19.
 */
window.onload = function () {
  const itemlis = document.querySelectorAll('footer .guide-item')
  const sections = document.querySelectorAll('#content section')
  itemlis.forEach((item,index) => {
    item.onclick = function () {
      for (var i = 0; i < itemlis.length; i++) {
        itemlis[i].className = 'guide-item'
        sections[i].className = ''
      }
      this.className = 'guide-item active'
      sections[index].className = 'on'
    }
  })

  var mySwiper = new Swiper('.swiper-container',{
    autoplay : true,
    pagination: {
      el: '.swiper-pagination',
    },
    loop:true
  })

  //动态获取每个店铺的评分并改变星星的className
  const stars = document.querySelectorAll('#content .stars')
  const shopLists = document.querySelectorAll('#content .rating-section')
  for (var i = 0; i < shopLists.length; i++) {
    const grade = shopLists[i].textContent;
    const onCount = Math.floor(+grade)
    const halfCount = Math.round(+grade - onCount)
    let starsSpans = stars[i].children
    starsSpans = Array.from(starsSpans)
    starsSpans.forEach(function(item, index) {
      if (index < onCount) {
        item.className = 'star on'
      } else if (index < onCount + halfCount) {
        item.className = 'star half'
      } else {
        item.className = 'star off'
      }
    })
  }




  (function () {
    const loginOrregister = document.querySelector('#content >section:nth-child(1) a:nth-child(3)')
    const loginPage = document.querySelectorAll('#content >:last-child')[0]
    const goback = document.querySelector('.open .loginContainer .go-back')
    const loginSubmit = document.querySelector('.order-no-login .order-botton')
    const loginORregister = document.querySelector('#content .profile-number a')
    let flag = false;
    loginOrregister.onclick = function () {
      if(!flag){
        loginPage.className = 'close';
      }else{
        loginPage.className = 'open';
      }
      flag = !flag;
    }
    loginSubmit.onclick = function () {
      switcher()
    }
    loginORregister.onclick = function () {
      switcher()
    }
    goback.onclick = function () {
      loginPage.className = 'close';
      flag = !flag;
    }
    function switcher() {
      loginPage.className = 'open';
      flag = !flag;
    }

  })();

  (function () {
    const titles = document.querySelectorAll('.open .login_header_title a');
    const divs = document.querySelectorAll('.login-content form >div')
    titles.forEach((item,index) => {
      item.onclick = function () {
        for (var i = 0; i < titles.length; i++) {
          titles[i].className = ''
          divs[i].className =  '';
        }
        this.className = 'active';
        divs[index].className = 'login-on';
      }
    })
  })();

}
