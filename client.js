/*
* Client side scripts here
*/

$('input[type=range]').change(adjustBrightness);

function toGrayscale() {
  Caman("#upload", function () {
    this.greyscale().render();
  })
}

function invert() {
  Caman("#upload", function () {
    this.invert().render();
  })
}

function adjustBrightness() {
  var brightness_val = parseInt($('#brightness').val())
  Caman("#upload", function() {
    this.revert(false)
    this.brightness(brightness_val)
    this.render()
  })
}

function reset() {
  Caman("#upload", function() {
    this.revert(false)
    this.render();
  })
}

// Will run when image is uploaded
function display_image(selection) {
  $("#greyscale_btn").attr("disabled", false)
  $("#invert_btn").attr("disabled", false)
  $("#reset_btn").attr("disabled", false)
  $("#brightness").attr("disabled", false)

  if (selection.files && selection.files[0]) {
    var reader = new FileReader()
    reader.onload = function (o) {
      $('#upload')
      .attr('src', o.target.result) // Gives <img> a valid src
      .width(300)
      .height(300)
    }
    reader.readAsDataURL(selection.files[0])
  } else {
    alert("Error with image upload")
  }
}
