// Task 1

//  Создайте компонент галлереи изображений следующего вида.

{/* <div class="image-gallery js-image-gallery">
  <div class="fullview">
    <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-image-1.jpeg" alt="alt text 1">
      </div>
    <ul class="preview">
      <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
          <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>    */}

//  Превью компонента: https: //monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2

// Массив объектов с данными для создания компонента выглядит следующим образом.
// Замените пути на соотвествующие вашим, или назовите изображения аналогично.
// * /

// const galleryItems = [
//   { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt="alt text 1" },
//   { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt="alt text 2" },
//   { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt="alt text 3" },
//   { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt="alt text 4" },
//   { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt="alt text 5" },
//   { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt="alt text 6" },
// ];



//      *** ЗАДАНИЕ ПОВЫШЕНОЙ СЛОЖНОСТИ - выполнять по желанию *** 

// Тогда создание экземпляра будет выглядеть следующим образом.
// * /

// new Gallery({
//   items: galleryItems,
//   parentNode: document.querySelector('.image-gallery'),
//   defaultActiveItem: 1
// });

//   Далее плагин работает в автономном режиме


// const galleryItems = [
//   {
//     preview: 'img/preview-1.jpeg',
//     fullview: 'img/fullview-1.jpeg',
//     alt: '"alt text 1"'
//     },
//   {
//     preview: 'img/preview-2.jpeg',
//     fullview: 'img/fullview-2.jpeg',
//     alt: '"alt text 2"'
//     },
//   {
//     preview: 'img/preview-3.jpeg',
//     fullview: 'img/fullview-3.jpeg',
//     alt: '"alt text 3"'
//     },
//   {
//     preview: 'img/preview-4.jpeg',
//     fullview: 'img/fullview-4.jpeg',
//     alt: '"alt text 4"'
//     },
//   {
//     preview: 'img/preview-5.jpeg',
//     fullview: 'img/fullview-5.jpeg',
//     alt: '"alt text 5"'
//     },
//   {
//     preview: 'img/preview-6.jpeg',
//     fullview: 'img/fullview-6.jpeg',
//     alt: '"alt text 6"'
//     }
// ];

// const imageGallery = document.querySelector('.image-gallery');
// imageGallery.insertAdjacentHTML('afterBegin', '<div class="fullview"></div>');

// const fullview = document.querySelector('.fullview');
// fullview.innerHTML = '<img src="img/fullview-image-1.jpeg" alt="alt text 1">';

// const createContentLi = (item) => `<li><img src=${item.preview} data-fullview=${item.fullview} alt=${item.alt}></li>`;

// const previewContent = `<ul class="preview">${galleryItems.reduce((sum, item) => sum + createContentLi(item), ``)}</ul>`;
// imageGallery.insertAdjacentHTML('beforeEnd', previewContent);

// const liCollection = document.querySelectorAll('.preview li img');
// const liCollectionArray = [...liCollection];
// liCollectionArray[0].classList.add('active-img');

// const preview = document.querySelector('.preview');
// const changePicture = event => {
//   if (event.target !== event.currentTarget) {    
//     liCollectionArray.forEach(liElem => {
//       liElem.classList.remove('active-img')
//     });
//     event.target.classList.add('active-img');

//     const dataValue = event.target.dataset.fullview;
//     const neededDataValue = `${dataValue.slice(0, dataValue.indexOf("-"))}-image${dataValue.slice(dataValue.indexOf("-"))}`;
//     const altValue = event.target.alt;
//     fullview.innerHTML = `<img src=${neededDataValue} alt=${altValue}>`;
//   }
// };
// preview.addEventListener('click', changePicture);

const galleryItems = [
  {
    preview: 'img/preview-1.jpeg',
    fullview: 'img/fullview-1.jpeg',
    alt: '"alt text 1"'
  },
  {
    preview: 'img/preview-2.jpeg',
    fullview: 'img/fullview-2.jpeg',
    alt: '"alt text 2"'
  },
  {
    preview: 'img/preview-3.jpeg',
    fullview: 'img/fullview-3.jpeg',
    alt: '"alt text 3"'
  },
  {
    preview: 'img/preview-4.jpeg',
    fullview: 'img/fullview-4.jpeg',
    alt: '"alt text 4"'
  },
  {
    preview: 'img/preview-5.jpeg',
    fullview: 'img/fullview-5.jpeg',
    alt: '"alt text 5"'
  },
  {
    preview: 'img/preview-6.jpeg',
    fullview: 'img/fullview-6.jpeg',
    alt: '"alt text 6"'
  }
];

const imageGallery = document.querySelector('.image-gallery');

class Gallery {
  constructor(items, parentNode, defaultActiveItem=0) {
    this.items = items;
    this.parentNode = parentNode;
    this.defaultActiveItem = defaultActiveItem;

    try {
      this.parentNode.insertAdjacentHTML('afterBegin', '<div class="fullview"></div>');
      const fullview = document.querySelector('.fullview');
      
      fullview.innerHTML = `<img src="img/fullview-image-${this.defaultActiveItem + 1}.jpeg" alt="alt text ${this.defaultActiveItem + 1}">`;

      const createContentLi = (item) => `<li><img src=${item.preview} data-fullview=${item.fullview} alt=${item.alt}></li>`;

      const previewContent = `<ul class="preview">${this.items.reduce((sum, item) => sum + createContentLi(item), ``)}</ul>`;
      imageGallery.insertAdjacentHTML('beforeEnd', previewContent);

      const liCollection = document.querySelectorAll('.preview li img');
      const liCollectionArray = [...liCollection];
      liCollectionArray[this.defaultActiveItem].classList.add('active-img');

      const preview = document.querySelector('.preview');
      preview.addEventListener('click', this.changePicture);

    }
    catch(e) {
      console.log(e);
    }
  }

  changePicture (event) {
    if (event.target !== event.currentTarget) {
      const liCollection = document.querySelectorAll('.preview li img');
      const liCollectionArray = [...liCollection];
      liCollectionArray.forEach(liElem => {
        liElem.classList.remove('active-img')
      });
      event.target.classList.add('active-img');

      const dataValue = event.target.dataset.fullview;
      const neededDataValue = `${dataValue.slice(0, dataValue.indexOf("-"))}-image${dataValue.slice(dataValue.indexOf("-"))}`;
      const altValue = event.target.alt;
      
      const fullview = document.querySelector('.fullview');
      fullview.innerHTML = `<img src=${neededDataValue} alt=${altValue}>`;
    }
  };

};

const newGallery = new Gallery(galleryItems, imageGallery, 3);