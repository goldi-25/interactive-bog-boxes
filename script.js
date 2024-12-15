document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");
  
    boxes.forEach((box) => {
      box.addEventListener("click", () => {
        // Check if the clicked box is already expanded
        const isExpanded = box.classList.contains("active");
  
        // Collapse all boxes first
        boxes.forEach((b) => {
          b.classList.remove("active");
          const content = b.querySelector(".box-content");
          if (content) content.style.display = "none";
          b.style.transform = "scale(1)"; // Reset size
        });
  
        // If it was not expanded, expand it
        if (!isExpanded) {
          box.classList.add("active");
          const content = box.querySelector(".box-content");
          if (content) content.style.display = "block";
          box.style.transform = "scale(1.05)"; // Slightly enlarge the box
        }
      });
    });
  });