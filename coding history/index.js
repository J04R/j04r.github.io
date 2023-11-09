var activeYear = null; // Variable to store the currently active year
var buttons = document.querySelectorAll('.event-button'); // Select all buttons with class 'event-button'

// Add click event listeners to all buttons
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    if (activeYear !== null) {
      // Disable all buttons except the one that was clicked
      buttons.forEach(function(disableButton) {
        if (disableButton !== button) {
          disableButton.disabled = true;
        }
      });
    }
    showEvent(button.getAttribute('data-year'));
  });
});

function showEvent(year) {
  var eventInfo = document.getElementById('eventInfo');

  // If the clicked year is different from the active one, hide the current eventInfo
  if (activeYear && activeYear !== year) {
    eventInfo.style.display = 'none';
  }

  // Reset the content
  eventInfo.innerHTML = '';

  // Customize content based on the selected year
  if (year === '1844') {
    document.getElementById('image').style.display = "block";
    document.getElementById('image2').style.display = "none";
    document.getElementById('image3').style.display = "none";
    document.getElementById('image4').style.display = "none";
    document.getElementById('image5').style.display = "none";
    document.getElementById('image6').style.display = "none";
    document.getElementById('image7').style.display = "none";
    document.getElementById('btnID').style.display = "none";
    document.getElementById('btnID2').style.display = "none";
    document.getElementById('btnID3').style.display = "none";
    document.getElementById('btnID4').style.display = "none";
    document.getElementById('btnID5').style.display = "none";
    document.getElementById('btnID6').style.display = "none";
    document.getElementById('btnID7').style.display = "none";
    eventInfo.innerHTML += `The Telegraph.<br>`;
    eventInfo.innerHTML += "<p>Samuel Morse was a successful painter who became interested in the possibility of an electric telegraph in the 1830s. He patented a prototype in 1837. In 1844 he sent the first message over the first long-distance telegraph line, which stretched between Washington, D.C., and Baltimore. The message: “What hath God wrought.”</p>";
  } else if (year === '1876') {
    document.getElementById('image').style.display = "none";
    document.getElementById('image2').style.display = "block";
    document.getElementById('image3').style.display = "none";
    document.getElementById('image4').style.display = "none";
    document.getElementById('image5').style.display = "none";
    document.getElementById('image6').style.display = "none";
    document.getElementById('image7').style.display = "none";
    document.getElementById('btnID').style.display = "none";
    document.getElementById('btnID2').style.display = "none";
    document.getElementById('btnID3').style.display = "none";
    document.getElementById('btnID4').style.display = "none";
    document.getElementById('btnID5').style.display = "none";
    document.getElementById('btnID6').style.display = "none";
    document.getElementById('btnID7').style.display = "none";
    eventInfo.innerHTML += `The Telephone.<br>`;
    eventInfo.innerHTML += "<p>Once it was possible to send information through a wire in the form of dots and dashes, the next step was actual voice communication. Alexander Graham Bell made the first telephone call, on March 10, 1876, when he asked his assistant Tom Watson to come to him: “Mr Watson—come here—I want to see you.”</p>";
  } else if (year === '1901') {
    document.getElementById('image').style.display = "none";
    document.getElementById('image2').style.display = "none";
    document.getElementById('image3').style.display = "block";
    document.getElementById('image4').style.display = "none";
    document.getElementById('image5').style.display = "none";
    document.getElementById('image6').style.display = "none";
    document.getElementById('image7').style.display = "none";
    document.getElementById('btnID').style.display = "none";
    document.getElementById('btnID2').style.display = "none";
    document.getElementById('btnID3').style.display = "none";
    document.getElementById('btnID4').style.display = "none";
    document.getElementById('btnID5').style.display = "none";
    document.getElementById('btnID6').style.display = "none";
    document.getElementById('btnID7').style.display = "none";
    eventInfo.innerHTML += `The Radio.<br>`;
    eventInfo.innerHTML += "<p>Guglielmo Marconi had been experimenting with radio since 1894 and was sending transmissions over longer and longer distances. In 1901 his reported transmission of the Morse code letter S across the Atlantic from Cornwall to Newfoundland excited the world.</p>";
  } else if (year === '1927') {
    document.getElementById('image').style.display = "none";
    document.getElementById('image2').style.display = "none";
    document.getElementById('image3').style.display = "none";
    document.getElementById('image4').style.display = "block";
    document.getElementById('image5').style.display = "none";
    document.getElementById('image6').style.display = "none";
    document.getElementById('image7').style.display = "none";
    document.getElementById('btnID').style.display = "none";
    document.getElementById('btnID2').style.display = "none";
    document.getElementById('btnID3').style.display = "none";
    document.getElementById('btnID4').style.display = "none";
    document.getElementById('btnID5').style.display = "none";
    document.getElementById('btnID6').style.display = "none";
    document.getElementById('btnID7').style.display = "none";
    eventInfo.innerHTML += `The Television.<br>`;
    eventInfo.innerHTML += "<p>After the development of radio, the transmission of an image was the next logical step. Early television used a mechanical disk to scan an image. As a teenager in Utah, Philo T. Farnsworth became convinced that a mechanical system would not be able to scan and assemble images multiple times a second. Only an electronic system would do that. In 1922 the 16-year-old Farnsworth worked out a plan for such a system, but it wasn’t until 1927 that he made the first electronic television transmission, a horizontal line.</p>";
  } else if (year === '1937') {
    document.getElementById('image').style.display = "none";
    document.getElementById('image2').style.display = "none";
    document.getElementById('image3').style.display = "none";
    document.getElementById('image4').style.display = "none";
    document.getElementById('image5').style.display = "block";
    document.getElementById('image6').style.display = "none";
    document.getElementById('image7').style.display = "none";
    document.getElementById('btnID').style.display = "none";
    document.getElementById('btnID2').style.display = "none";
    document.getElementById('btnID3').style.display = "none";
    document.getElementById('btnID4').style.display = "none";
    document.getElementById('btnID5').style.display = "none";
    document.getElementById('btnID6').style.display = "none";
    document.getElementById('btnID7').style.display = "none";
    eventInfo.innerHTML += `The Computer.<br>`;
    eventInfo.innerHTML += "<p>Iowa State mathematician and physicist John Atanasoff designed the first electronic digital computer. It would use binary numbers (base 2, in which all numbers are expressed with the digits 0 and 1), and its data would be stored in capacitors. In 1939 he and his student Clifford Berry began building the Atanasoff-Berry Computer (ABC).</p>";
  } else if (year === '1974') {
    document.getElementById('image').style.display = "none";
    document.getElementById('image2').style.display = "none";
    document.getElementById('image3').style.display = "none";
    document.getElementById('image4').style.display = "none";
    document.getElementById('image5').style.display = "none";
    document.getElementById('image6').style.display = "block";
    document.getElementById('image7').style.display = "none";
    document.getElementById('btnID').style.display = "none";
    document.getElementById('btnID2').style.display = "none";
    document.getElementById('btnID3').style.display = "none";
    document.getElementById('btnID4').style.display = "none";
    document.getElementById('btnID5').style.display = "none";
    document.getElementById('btnID6').style.display = "none";
    document.getElementById('btnID7').style.display = "none";
    eventInfo.innerHTML += `The Internet<br>`;
    eventInfo.innerHTML += "<p>Vinton Cerf and Robert Kahn produced the TCP/IP (Transmission Control Protocol/Internet Protocol), which describes how data can be broken down into smaller pieces called packets and how these packets can be transmitted to the right destination. TCP/IP became the basis for how data is transmitted over the Internet.</p>";
  } else if (year === '2017') {
    document.getElementById('image').style.display = "none";
    document.getElementById('image2').style.display = "none";
    document.getElementById('image3').style.display = "none";
    document.getElementById('image4').style.display = "none";
    document.getElementById('image5').style.display = "none";
    document.getElementById('image6').style.display = "none";
    document.getElementById('image7').style.display = "block";
    document.getElementById('btnID').style.display = "none";
    document.getElementById('btnID2').style.display = "none";
    document.getElementById('btnID3').style.display = "none";
    document.getElementById('btnID4').style.display = "none";
    document.getElementById('btnID5').style.display = "none";
    document.getElementById('btnID6').style.display = "none";
    document.getElementById('btnID7').style.display = "none";
    eventInfo.innerHTML += `Artificial Intelligence.<br>`;
    eventInfo.innerHTML += "<p>The team behind the AlphaGo artificial intelligence program announced that it had become the world’s best go player. Go is a game with very simple rules but many possible positions. The previous year AlphaGo had defeated the great player Lee Sedol in a match 4–1. AlphaGo then played itself and, through continual improvement, was able to defeat the version that had defeated Lee, 100–0. Through machine learning, AlphaGo had become better at the game than any human.</p>";
  }

  // Show the #eventInfo element
  eventInfo.style.display = 'block';

  // Create a button to close or reopen the paragraph
  var closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.onclick = function () {
    document.getElementById('image').style.display = "none";
    document.getElementById('image2').style.display = "none";
    document.getElementById('image3').style.display = "none";
    document.getElementById('image4').style.display = "none";
    document.getElementById('image5').style.display = "none";
    document.getElementById('image6').style.display = "none";
    document.getElementById('image7').style.display = "none";
    document.getElementById('btnID').style.display = "block";
    document.getElementById('btnID2').style.display = "block";
    document.getElementById('btnID3').style.display = "block";
    document.getElementById('btnID4').style.display = "block";
    document.getElementById('btnID5').style.display = "block";
    document.getElementById('btnID6').style.display = "block";
    document.getElementById('btnID7').style.display = "block";
    // Enable all buttons
    buttons.forEach(function(enableButton) {
      enableButton.disabled = false;
    });
    eventInfo.style.display = 'none';
  };
  eventInfo.appendChild(closeButton);

  // Update the activeYear
  activeYear = year;
}
