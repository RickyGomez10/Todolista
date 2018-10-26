window.onload = init;

function init() {
   let todoList = {
       listHTML: document.getElementById("todoList"),
       listTask: [],
       add(task, priority = false) {
           let element = document.createElement("li");
           /*Crear boton de finalizar tarea */
           var finalizado = document.createElement("BUTTON");
           var finalizadot = document.createTextNode("Finalizar");
           finalizado.appendChild(finalizadot);
           /* */
            var desmarcar = document.createElement("BUTTON");
           var desmarcart = document.createTextNode("Desmarcar");
           desmarcar.appendChild(desmarcart);
           /*Crear boton de eliminado */
           var btn = document.createElement("BUTTON");
           var t = document.createTextNode("Eliminar");
           btn.appendChild(t);

           element.innerText = task;
           element.setAttribute("style","margin-top: 1rem");
           finalizado.setAttribute("style", "margin-left:2rem");
           desmarcar.setAttribute("style","margin:0 2rem");

           /*Agregando botones de finalizar tarea, desmarcar tarea y eliminar tarea */
           element.appendChild(finalizado);
           element.appendChild(desmarcar);
            element.appendChild(btn);

            // Evento del boton para finalizar tarea (marca la tarea que ya se realizo)
           finalizado.addEventListener("click",(evt)=>{
            element.setAttribute("style", "text-decoration: line-through; ");
               
            }) ;
           // Evento del boton para desmarcar una tarea
           desmarcar.addEventListener("click",(evt)=>{
               element.setAttribute("style", "text-decoration: none");
            }) ;


            // Evento que elimina tareas de la lista
    
            btn.addEventListener("click",(evt)=>{
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
            }) ;

            //Prioridad
            if (priority) {
               this.listTask.unshift({
                   element,
                   task
               });
               this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
           } else {
               this.listTask.push({
                   element,
                   task
               });
               this.listHTML.appendChild(element);

           }
       }
   }

   let form = document.managerTask;
   form.addEventListener("submit", (evt) => {
       evt.preventDefault();
       let task = form.task.value;

       let validTask = /.{2,}/;
       if (!validTask.test(task)) {
           console.log("Ingrese una descripcion clara");
           return false;
       }

       todoList.add(task, form.important.checked);

   });
}