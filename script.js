const tutorialsSection = document.getElementById("tutorials");
const categoriesSection = document.getElementById("categories");
const tutorialCategoryTitle = document.getElementById("tutorial-category-title");
const tutorialList = document.getElementById("tutorial-list");

const tutorialsData = {
    coding: [
        { title: "Introduction to HTML", date: "Dec 20, 2023", link: "tutorial-example.html" },
        { title: "CSS Fundamentals", date: "Dec 18, 2023", link: "tutorial-css.html" },
    ],
    modeling: [
        { title: "3D Modeling Basics", date: "Dec 19, 2023", link: "tutorial-modeling.html" },
        { title: "Character Design", date: "Dec 17, 2023", link: "tutorial-character-design.html" },
    ],
    design: [
        { title: "Graphic Design Principles", date: "Dec 15, 2023", link: "tutorial-graphic-design.html" },
        { title: "Video Editing Basics", date: "Dec 14, 2023", link: "tutorial-video-editing.html" },
    ],
};

document.addEventListener('DOMContentLoaded', function() {
    tutorialsSection.style.display = "none";
    categoriesSection.style.display = "block";
});

// Show tutorials for a specific category
function showTutorials(category) {
    // Update the title and populate the tutorial list
    tutorialCategoryTitle.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Tutorials`;
    tutorialList.innerHTML = tutorialsData[category]
        .map(
            (tutorial) =>
                `<div class="forum-post">
                    <h3><a href="${tutorial.link}">${tutorial.title}</a></h3>
                    <p>Last updated: ${tutorial.date}</p>
                </div>`
        )
        .join("");

    // Show the tutorials section and hide the categories
    categoriesSection.style.display = "none";
    tutorialsSection.style.display = "block";
}

// Go back to categories
function goBack() {
    const tutorialsSection = document.getElementById("tutorials");
    const categoriesSection = document.getElementById("categories");

    tutorialsSection.style.display = "none";
    categoriesSection.style.display = "block";
}
