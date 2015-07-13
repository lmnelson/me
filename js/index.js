
// $(document).ready(function(){

//   // visual design
//   //-----------------------------------------------

//   var cursorColor = "#95DE19";
//   var visAnimLength = 3000;
//   var visAnimType = mina.easeinout;

//   //selector box
//   var vdBox = Snap(".visual-design-box");
//   var selectBox = vdBox.rect(0,0,0,0,1,1);
//       selectBox.attr({
//         fill: "rgba(255,255,255,0.05)",
//         stroke: "#555",
//         strokeWidth: 3
//       });

//   //animate selector box
//   function animateBoxIn() {
//     selectBox.animate({
//       width: "72",
//       height: "56"
//     }, 3000, visAnimType, resetBox)
//     .attr({
//       opacity: 1
//     });
//   }
//   function resetBox(){
//     selectBox.animate({
//       width: "0",
//       height: "0"
//     }, 3000, visAnimType, animateBoxIn).
//     attr({
//       opacity: 0
//     });
//   }

//   //selector cursor
//   var vdCursor = Snap(".visual-design-cursor");
//   var vertLine = vdCursor.rect(0,0,3,13,1,1).attr({fill: cursorColor});
//   var horzLine = vdCursor.rect(-5,5,13,3,1,1).attr({fill: cursorColor});
//   var cursorGroup = vdCursor.g(vertLine, horzLine);


//   function animateCursorIn(){
//     cursorGroup.animate({
//       transform: "t72, 56"
//     }, 3000, visAnimType, animateCursorOut);
//   }

//   function animateCursorOut(){
//     cursorGroup.animate({
//       transform: "t0, 0"
//     }, 3000, visAnimType, animateCursorIn);
//   }

//   animateCursorIn();
//   animateBoxIn();


//   // development
//   //-----------------------------------------------

//   var pink  = "#E22067";
//   var green = "#95DE19";
//   var grey  = "#5B5B5B";

//   var cl = Snap(".code-line");

//   //selector box
//   var codeLine = cl.rect(0,0,0,4,2,2);
//       codeLine.attr({
//         fill: pink
//       });
//   var codeLine1 = codeLine.clone().transform("t0, 8").attr({fill: "white"});
//   var codeLine2 = codeLine.clone().transform("t0, 16").attr({fill: pink});

//   var codeLine3 = codeLine.clone().transform("t0, 35").attr({fill: pink});
//   var codeLine4 = codeLine.clone().transform("t0, 43").attr({fill: "white"});
//   var codeLine5 = codeLine.clone().transform("t0, 51").attr({fill: green});
//   var codeLine6 = codeLine.clone().transform("t0, 59").attr({fill: pink});

//   var lineGroupArray = [codeLine, codeLine1, codeLine2, codeLine3, codeLine4,
//                         codeLine5, codeLine6];

//   var lineGroup = cl.g(codeLine, codeLine1, codeLine2, codeLine3,
//                       codeLine4, codeLine5, codeLine6);

//   //animate
//   function lineZeroIn(){
//     codeLine.animate({
//       width: "30"
//     }, 600, visAnimType, lineOneIn);
//   }
//   function lineOneIn() {
//     codeLine1.animate({
//       width: "50"
//     }, 600, visAnimType, lineTwoIn);
//   }
//   function lineTwoIn() {
//     codeLine2.animate({
//       width: "30"
//     }, 600, visAnimType, lineThreeIn);
//   }
//   function lineThreeIn() {
//     codeLine3.animate({
//       width: "50"
//     }, 600, visAnimType, lineFourIn);
//   }
//   function lineFourIn() {
//     codeLine4.animate({
//       width: "80"
//     }, 600, visAnimType, lineFiveIn);
//   }
//   function lineFiveIn() {
//     codeLine5.animate({
//       width: "75"
//     }, 600, visAnimType, lineSixIn);
//   }
//   function lineSixIn() {
//     codeLine6.animate({
//       width: "50"
//     }, 600, visAnimType, moveLineGroup);
//   }
//   function moveLineGroup(){
//     lineGroup.animate({
//       transform: "t0, -99"
//     }, 2000, visAnimType, resetLineGroup);
//   }
//   function resetLineGroup(){
//     lineGroupArray.map(function(array){
//       array.attr({
//         width: "0"
//       })
//     })
//     lineGroup.animate({
//       transform: "t0, 0"
//     }, 500, visAnimType, lineZeroIn)
//   }

//   lineZeroIn();

// });

