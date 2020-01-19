 /* eslint-disable */
 var e, t, i, n, a, s, l;
 for (e = document.getElementsByClassName("custom-select"), t = 0; t < e.length; t++) {
     for (n = e[t].getElementsByTagName("select")[0], (a = document.createElement("DIV")).setAttribute("class", "select-selected"), a.innerHTML = n.options[n.selectedIndex].innerHTML, e[t].appendChild(a), (s = document.createElement("DIV")).setAttribute("class", "select-items select-hide"), i = 0; i < n.length; i++) (l = document.createElement("DIV")).innerHTML = n.options[i].innerHTML, l.addEventListener("click", function (e) {

         var t, i, n, a, s;
         for (a = this.parentNode.parentNode.getElementsByTagName("select")[0], s = this.parentNode.previousSibling, i = 0; i < a.length; i++) if (a.options[i].innerHTML == this.innerHTML) {
             for (a.selectedIndex = i, s.innerHTML = this.innerHTML, t = this.parentNode.getElementsByClassName("same-as-selected"), n = 0; n < t.length; n++) t[n].removeAttribute("class");
             this.setAttribute("class", "same-as-selected");
             break
         }
         s.click();

     }), s.appendChild(l);
     e[t].appendChild(s), a.addEventListener("click", function (e) {
         e.stopPropagation(), r(this), this.nextSibling.classList.toggle("select-hide"), this.classList.toggle("active")
     })
 }

 function r(e) {
     var t, i, n, a = [];
     for (t = document.getElementsByClassName("select-items"), i = document.getElementsByClassName("select-selected"), n = 0; n < i.length; n++) e == i[n] ? a.push(n) : i[n].classList.remove("active");
     for (n = 0; n < t.length; n++) a.indexOf(n) && t[n].classList.add("select-hide")
 }

