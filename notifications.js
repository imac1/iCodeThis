

  const closes = document.getElementsByClassName("close");

  for (let i = 0; i < closes.length; i++) {
    closes[i].addEventListener("click", function() {
      const toast = this.parentNode;
      toast.classList.add("invisible");
      setTimeout(function() {
        toast.classList.remove('invisible');
        toast.classList.add('visible');
      }, 1000);
    });
  }







