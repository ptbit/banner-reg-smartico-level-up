"use strict";

(function init100vh() {
  function setHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  }
  setHeight();
  window.addEventListener('resize', setHeight);
})();
window.addEventListener('orientationchange', function () {
  location.reload(true);
});

// padding no-ios
// document.addEventListener('DOMContentLoaded', function () {
//   let date = document.querySelector('.reg__date');
//   let time = document.querySelector('.reg__time');
//   let up = document.querySelector('.reg__up');
//   let fs = document.querySelector('.reg__fs');
//   if (!/iPad|iPhone|iPod|Mac/.test(navigator.userAgent)) {
//     date.classList.add('noios-padding');
//     time.classList.add('noios-padding');
//     up.classList.add('noios-padding');
//     fs.classList.add('noios-padding');
//   }
// });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaW5pdDEwMHZoIiwic2V0SGVpZ2h0IiwidmgiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImNvbmNhdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFNBQVNBLFNBQVNBLENBQUEsRUFBRztFQUNwQixTQUFTQyxTQUFTQSxDQUFBLEVBQUc7SUFDbkIsSUFBSUMsRUFBRSxHQUFHQyxNQUFNLENBQUNDLFdBQVcsR0FBRyxJQUFJO0lBQ2xDQyxRQUFRLENBQUNDLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLENBQUMsTUFBTSxLQUFBQyxNQUFBLENBQUtQLEVBQUUsT0FBSSxDQUFDO0VBQy9EO0VBQ0FELFNBQVMsQ0FBQyxDQUFDO0VBQ1hFLE1BQU0sQ0FBQ08sZ0JBQWdCLENBQUMsUUFBUSxFQUFFVCxTQUFTLENBQUM7QUFDOUMsQ0FBQyxFQUFFLENBQUM7QUFFSkUsTUFBTSxDQUFDTyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxZQUFNO0VBQ2pEQyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDdkIsQ0FBQyxDQUFDOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gaW5pdDEwMHZoKCkge1xyXG4gIGZ1bmN0aW9uIHNldEhlaWdodCgpIHtcclxuICAgIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApO1xyXG4gIH1cclxuICBzZXRIZWlnaHQoKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0SGVpZ2h0KTtcclxufSkoKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsICgpID0+IHtcclxuICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XHJcbn0pO1xyXG5cclxuLy8gcGFkZGluZyBuby1pb3NcclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuLy8gICBsZXQgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdfX2RhdGUnKTtcclxuLy8gICBsZXQgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdfX3RpbWUnKTtcclxuLy8gICBsZXQgdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVnX191cCcpO1xyXG4vLyAgIGxldCBmcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWdfX2ZzJyk7XHJcbi8vICAgaWYgKCEvaVBhZHxpUGhvbmV8aVBvZHxNYWMvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcclxuLy8gICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnbm9pb3MtcGFkZGluZycpO1xyXG4vLyAgICAgdGltZS5jbGFzc0xpc3QuYWRkKCdub2lvcy1wYWRkaW5nJyk7XHJcbi8vICAgICB1cC5jbGFzc0xpc3QuYWRkKCdub2lvcy1wYWRkaW5nJyk7XHJcbi8vICAgICBmcy5jbGFzc0xpc3QuYWRkKCdub2lvcy1wYWRkaW5nJyk7XHJcbi8vICAgfVxyXG4vLyB9KTtcclxuIl19
