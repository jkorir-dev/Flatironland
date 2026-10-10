function selectRide(rideName) {
    const parkName="Flatironland";

function getRideDescriptions() {
    switch (rideName.toLowerCase()) {
        case "roller coaster":
            return `Hold on tight! The ${parkName} Mega Coaster features a 90-degree drop and 3 inversions!`;
            case "ferris wheel":
                return `Enjoy the view! The Giant Wheel offers a breathtaking panoramic look at all of ${parkName}.`;
            case "haunted house":
                return `Enter if you dare! Spooky spirits and eerie surprises await you around every corner.`;
            default:
                return `Welcome to ${parkName}! That ride isn't in our system yet, but feel free to explore the park!`;
        }
    }  
        const feedbackMessage = getRideDescriptions();
        console.log(feedbackMessage);
    }
    console.log("Welcome to Flatironland!");
console.log("------------------------");

// Test Case 1: Validating "Rollercoaster" selection
selectRide("Rollercoaster");

// Test Case 2: Validating "Ferris Wheel" selection
selectRide("Ferris Wheel");

// Test Case 3: Validating a fallback/unknown selection
selectRide("Bumper Cars")
