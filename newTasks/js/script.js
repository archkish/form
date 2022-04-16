document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length === 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span class="task__name">
                    ${document.querySelector("#newtask input").value}
                </span>
                <button type="button" class="task__btn">
                    <i class="far fa-trash-alt"></i>
                </button>  
            </div>
        `;
    let deleteButtons = document.querySelectorAll(".task__btn");
    for (var i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
