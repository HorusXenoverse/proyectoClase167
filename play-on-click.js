AFRAME.registerComponent("play-on-click", {
 //Añadimos el código aquí.
 schema:{isPlayin: {type: "boolean", default : "false"}},
 init: function(){
    this.video = this.el.getAttribute("material").src
    this.onClick = this.onClick.bind(this)
 },
 play: function(){
    window.addEventListener("click", this.onClick)
 },
 onClick: function(evt){
    if(!this.video){
        return
    }
    var isPlayinGet= this.el.getAttribute("play-on-click").isPlayin
    this.el.object3D.visible = true

    if(!isPlayinGet){
        this.el.setAttribute("play-on-click", {isPlayin: true})
        this.video.play()
    }
    else{
        this.el.setAttribute("play-on-click", {isPlayin: false})
        this.video.pause()
    }
 }
  
});
