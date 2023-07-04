//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  const gridItems = document.getElementsByClassName("grid-item");
  const changeButton = document.getElementById("change_button");
  const resetButton = document.getElementById("reset_button");

  // Add click event listener to the change button
  changeButton.addEventListener("click", function() {
    const blockIdInput = document.getElementById("block_id");
    const colorIdInput = document.getElementById("colour_id");
    const blockId = parseInt(blockIdInput.value);
    const color = colorIdInput.value;

    // Reset background color of all grid items
    for (let i = 0; i < gridItems.length; i++) {
      gridItems[i].style.backgroundColor = "transparent";
    }

    // Set background color of the selected grid item
    const selectedGridItem = document.getElementById(blockId);
    if (selectedGridItem) {
      selectedGridItem.style.backgroundColor = color;
    }

    // Reset input values
    blockIdInput.value = "";
    colorIdInput.value = "";
  });

  // Add click event listener to the reset button
  resetButton.addEventListener("click", function() {
    // Reset background color of all grid items
    for (let i = 0; i < gridItems.length; i++) {
      gridItems[i].style.backgroundColor = "transparent";
    }
  });
});
