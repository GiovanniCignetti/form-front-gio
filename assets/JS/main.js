const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  //   Envoyer les données du formulaire
  $.querySelector("#contact-form").addEventListener("submit", async (event) => {
    // la fonction preventDefault() annule le comportement par défaut du formulaire (le rafraîchissement de la page)
    event.preventDefault();

    const data = {
      firstName: $.querySelector("#firstname").value,
      lastName: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      message: $.querySelector("#message").value,
      subject: $.querySelector("#subject").value,
    };
    console.log(data);
    const response = await axios.post(
      "https://form-back-gio.herokuapp.com/form",
      data
    );
    console.log(response);
    alert("Merci pour votre formulaire");
  });
});
