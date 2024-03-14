AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
      
    },    
    handleMouseEnterEvents: function () {
      //Cursor 'mouseenter' Events
      this.el.addEventListener("mouseenter", () => {
        const id = this.el.getAttribute("id")
        const postersId = [
            "spider-man",
              "super-man",
              "flash",
              "green-arrow"
        ]
        if(posterId.includes(id)){
            const posterContainer = document.querySelector("#poster-container")
            posterContainer.setAttribute("cursor-listener",{
                selectedItemId:id
            })
            this.el.setAttribute("material",{color:"#1565c0"})
        }
      });
    },
    handleMouseLeaveEvents: function () {
      //Cursor 'mouseleave' Events
      this.el.addEventListener("mouseleave", () => {
        const { selectedItemId } = this.data;
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if (id == selectedItemId) {
            el.setAttribute("material", {
              color: "#0077CC",
              opacity: 1,
            });
          }
        }
      });
    },
  });
  