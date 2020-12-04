/**
  * NEXGEN
  */

const nexgen = new Vue({
  el: '#nexgen',
  data: {
    // OVERALL-SOCIAL
    socialList: [
      {
        icon: 'fa-facebook-f'
      },
      {
        icon: 'fa-twitter'
      },
      {
        icon: 'fa-linkedin-in'
      }
    ],
    // NAV lIST
    navList: [
      {
        item: 'home'
      },
      {
        item: 'about'
      },
      {
        item: 'services'
      },
      {
        item: 'team'
      },
      {
        item: 'blog'
      }
    ],
    // SlIDERS
    indexPhoto: 0,
    photos: [
      './img/sliders/bg-1.jpg',
      './img/sliders/bg-2.jpg',
      './img/sliders/bg-3.jpg'
    ],
    intervalId: 0,
    // MAIN-FOOTER
    footerList: [
      {
        icon: 'fa-phone-alt',
        item: '+1 (305) 1234-5678'
      },
      {
        icon: 'fa-envelope',
        item: 'hello@example.com'
      },
      {
        icon: 'fa-map-marker-alt',
        item: 'Main Avenue, 987'
      }
    ],
    // FIRST LIST FOOTER
    footerListFirst: [
      {
        icon: 'fa-chevron-right',
        item: 'The Company'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Institutional'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Social & Events'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Innovation'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Environment'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Techonology'
      }
    ],
    // SECOND LIST FOOTER
    footerListSecond: [
      {
        icon: 'fa-chevron-right',
        item: 'Audit & Assurance'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Financial Advisory'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Analytics M&A'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Middle Marketing'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Legal Consulting'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Regulatory Risk'
      }
    ],
    // THIRD LIST FOOTER
    footerListThird: [
      {
        icon: 'fa-chevron-right',
        item: 'Responsibility'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Terms of Use'
      },
      {
        icon: 'fa-chevron-right',
        item: 'About Cookies'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Privacy Policy'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Accessibility'
      },
      {
        icon: 'fa-chevron-right',
        item: 'Information'
      }
    ],
  },
  created() {
    this.startLoop();
  },
  methods: {
    nextPhoto() {
      this.indexPhoto += 1;

      if (this.indexPhoto > (this.photos.length - 1)) {
        this.indexPhoto = 0;
      }
    },
    prevPhoto() {
      this.indexPhoto -= 1;

      if (this.indexPhoto < 0) {
        this.indexPhoto = this.photos.length - 1;
      }
    },
    setPhoto(index) {
      this.indexPhoto = index;
    },
    startLoop() {
      this.intervalId = setInterval(() => {
        this.nextPhoto();
      }, 5000);
    },
    stopLoop() {
      clearInterval(this.intervalId);
    }
  }
});
