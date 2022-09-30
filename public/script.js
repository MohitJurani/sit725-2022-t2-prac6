const cardList = [
    {
        title: "STRIPES BLACK VERTICAL COMFORTER",
        image: "https://i.etsystatic.com/22273185/r/il/e9b0d5/3720963117/il_1588xN.3720963117_nfee.jpg",
        description: `<br/>
                <span class="grey-text text-darken-4">It's easy to get lost in sleep in our warm yet lightweight comforters. Colors pop on this bedding staple and they will
                surely be the focal point of your bedroom's decor. Choose from either synthetic microfiber or our natural fiber cotton.
                Available in Twin, Twin XL, Full, Queen and King sizes</span>`
    },
    {
        title: "STRIPES GREEN VERTICAL COMFORTER",
        image: "https://i.etsystatic.com/23850500/r/il/496ea8/4028664437/il_1588xN.4028664437_nr6z.jpg",
        description: `  <br/>
                <span class="grey-text text-darken-4">CRAFTED FROM 100% ORGANIC PURE BAMBOO – Wrap your self in the softness of the luxurious 100% Bamboo Silk Duvet
                Covers. The softest fabric in the world on your bed to enjoy a perfect sleep. Featuring a beautiful sheen with a
                silk-like lushness, be pleasantly surprised that our 300 thread count pure bamboo duvet cover is softer and more durable
                than its 800 thread count cotton counterpart. In fact, it becomes softer with every wash, which means you can delight in
                increasing comfort over time.
                
                <br/>
                <br/>
                WHAT YOU CAN GET - This 3-piece bamboo duvet set includes 1 duvet cover and 2 pillow shams. All items are
                double-stitched to ensure long-lasting quality. These are softest bamboo duvet covers with shams. They are ethically
                made in India with free delivery which usually delivers in 7-10 days around the globe.
                
                <br/>
                <br/>
                CARE & MAINTENANCE -
                - Machine wash in warm water on gentle cycle.
                - Wash with gentle detergent, do not use bleach.
                - Tumble dry on low heat.
                
                <br/>
                <br/>
                COOLING, BREATHABLE and HYPOALLERGENIC - If you've sensitive skin or are allergic to dust and chemicals, you'll find
                a safe haven with our bamboo duvet cover. These Bamboo duvet covers are moisture wicking and have thermal regulating
                properties. It is made from nano yarn which wicks moisture 3 times faster than cotton giving it high breath-ability and
                thus keeping it much much cooler.s</span>`
    },
    {
        title: "NASA Space Shuttle  Comforter",
        image: "https://ih1.redbubble.net/image.3545662900.6160/ur,comforter_top_king,square,600x600.1.jpg",
        description: `    <br/>
                <span class="grey-text text-darken-4">With this big, bold blanket, making your bed will be your favorite part of the day
                  <br/>
                  <br/>
                Vivid full-color front printed for you when you order; back is white<br/>
                <br/>
                100% polyester with 0.75" (2 cm) polyester filling and double-square quilted pattern<br/>
                <br/>
                Twin to King sizes available, and Twin XL fits most extra-long college dorm beds; check sizing guide for detailed
                measurements<br/>
                <br/>
                Pillows and shams not included<br/>
                <br/>
                Machine washable</span>`
    },
    {
        title: "Bamboo Comforter - Etsy",
        image: "https://i.etsystatic.com/8295866/r/il/8bda47/3657112646/il_340x270.3657112646_ibqc.jpg",
        description: ` <br/>
                <span class="grey-text text-darken-4">
                Twin - 173x219 Cm+ 51x66 Cm sham(1Pc)
                Twin XL- 173x229 Cm + 51x66 Cm Sham (1Pc)
                Full- 214x224 Cm + 51x66 Cm Sham(1Pc)
                Queen- 228x228 Cm + 51x91 Cm Sham (2Pc)
                King- 228x259 Cm + 51x91 Cm Sham (2Pc)
                Cal King- 244x270 Cm + 51x91 Cm Sham(2Pc)
                
                <br/>
                <br/>
                Single- 140x200 Cm + 50x75 Cm Sham (1Pc)
                Double- 200x200 Cm + 50x75 Cm Sham (2Pc)
                King- 225x220 Cm + 50x75 Cm Sham (2Pc)
                Superking- 260x220 Cm + 50x75 Cm Sham (2Pc)
                Emperor- 290x235 Cm + 50x90 Cm Sham (2Pc)
                
                <br/>
                <br/>
                Single - 140x200 Cm + 51x71 Cm Sham (1Pc)
                Single XL - 160x220 Cm + 51x71 Cm Sham (1Pc)
                DoubleXL - 220x220 Cm + 51x71 Cm Sham (2Pc)
                Queen - 240x220 Cm + 51x71 Cm Sham (2Pc)
                King - 260x240 Cm + 51x71 Cm Sham (2Pc)
              </span>`
    },
]

const addCards = (items) => {
    items.forEach(item => {
      let itemToAppend =  `<div style = "width: 340px;">
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" height = "260px" src="` + item.image + `">
              </div>
              <div class="card-content">
                <span class=" activator grey-text text-darken-2" style = "text-align: center;">` + item.title + `</span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Comforter<i class="material-icons right">close</i></span>`
                + item.description +
              `</div>
            </div>
          </div>`;
      $(".cards-section").append(itemToAppend)
    });
}

const addProjectToApp = (project) => {
  $.ajax({
      url: '/api/projects',
      data: project,
      type: 'POST',
      success: (result) => {
          alert(result.message);
          location.reload(); // it automatically reloads the page 
      }
  })
}


const submitForm = () => {
  let formData = {};
  formData.first_name = $('#first_name').val();
  formData.last_name = $('#last_name').val();
  formData.password = $('#password').val();
  formData.email = $('#email').val();

  addProjectToApp(formData);
  console.log("Form Data Submitted: ", formData);
}


$(document).ready(function(){
  $('.materialboxed').materialbox();
  addCards(cardList);
  $('.modal').modal();
  $('#formSubmit').click(()=>{
      submitForm();
      return 0;  //prevents refresh after form submission
  })
  $('.carousel').carousel();
})