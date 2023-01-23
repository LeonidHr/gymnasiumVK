# \#Gymnasium Valentina Kuznetsova layout
Multi-page website for gymnasium Valentina Kuznetsova

## \#Demo
[https://leonidhr.github.io/gymnasiumVK/](https://leonidhr.github.io/gymnasiumVK/)

<img src="img/preview.gif" width="726">

## \#Features
* Custom sliders
* Animation on scroll: 
  - Change opacity
  - Change margin
  - Change scale
* Scroll lock slider
* Sending the form to the mail
* Form validation
* Quiz in popup
* "Show more" functionality on the library page
* Google map on the contacts page
* Custom ratio in popup
* Smooth scrolling to the desired block

## \#Dependencies
#### ScrollMagic

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.min.js"></script>
```

#### PHPMailer

```php
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
```

#### Nouislider

```js
import * as noUiSlider from 'nouislider';
```

#### Swiper

```js
import Swiper, { Navigation, Pagination, Mousewheel, EffectFade, Controller, Thumbs, Autoplay, FreeMode } 
from 'swiper';
```