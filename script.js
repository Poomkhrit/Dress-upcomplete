<script>
    // Function to start the game
    function enterGame() {
        // Hide the main menu
        const mainMenu = document.querySelector('.main-menu');
        if (mainMenu) {
            mainMenu.style.display = 'none'; // Hides the main menu
        }

        // Show the game container
        const gameContainer = document.querySelector('.game-container');
        if (gameContainer) {
            gameContainer.style.display = 'block'; // Shows the game container
        }
    }

    // Helper function to hide all items in a given array of item IDs
    function hideItems(itemIds) {
        itemIds.forEach(itemId => {
            const item = document.getElementById(itemId);
            if (item) {
                item.style.visibility = 'hidden'; // Ensure the element exists before hiding
            }
        });
    }

    // Helper function to toggle visibility of a specific item
    function toggleVisibility(itemId) {
        const item = document.getElementById(itemId);
        if (item) {
            // Toggle between hidden and visible
            item.style.visibility = (item.style.visibility === 'hidden' || item.style.visibility === '') ? 'visible' : 'hidden';
        }
    }

    // Function to toggle category visibility
    function toggleCategory(selectedItemId, otherItemsInCategory) {
        // Hide all other items in the category
        hideItems(otherItemsInCategory);
        // Toggle visibility of the selected item
        toggleVisibility(selectedItemId);
    }

    // Function to toggle dress and hide conflicting items (tops and sweatshirts)
    function toggleDress(selectedItemId, otherItemsInCategory) {
        hideItems([
            'category14-item1', 'category14-item2', 'category14-item3', 'category14-item4', 'category14-item5',
            'category14-item6', 'category14-item7', 'category14-item8', 'category14-item9', 'category14-item10',
            'category4-item1', 'category4-item2', 'category4-item3', 'category4-item4', 'category4-item5',
            'category4-item6', 'category4-item7', 'category4-item8', 'category4-item9', 'category4-item10'
        ]);
        
        // Hide all other dresses in the same category
        hideItems(otherItemsInCategory);
        
        // Toggle visibility of the selected dress
        if (isVisible(selectedItemId)) {
            hideItems([selectedItemId]); // If visible, hide it
        } else {
            showItems([selectedItemId]); // If hidden, show it
        }
    }

    // Function to check if an item is visible
    function isVisible(itemId) {
        const item = document.getElementById(itemId);
        return item && item.style.display !== 'none';
    }

    // Function to show items
    function showItems(itemIds) {
        itemIds.forEach(itemId => {
            const item = document.getElementById(itemId);
            if (item) {
                item.style.display = 'block'; // Shows the item
            }
        });
    }

    // Function to handle when a top is selected
    function toggleGirlTop(selectedItemId, otherItemsInCategory) {
        hideItems([
            'category13-item1', 'category13-item2', 'category13-item3', 'category13-item4', 'category13-item5',
            'category13-item6', 'category13-item7', 'category13-item8', 'category13-item9', 'category13-item10'
        ]);
        toggleCategory(selectedItemId, otherItemsInCategory);
    }

    // Function to handle when a sweatshirt is selected
    function toggleSweatshirt(selectedItemId, otherItemsInCategory) {
        hideItems([
            'category13-item1', 'category13-item2', 'category13-item3', 'category13-item4', 'category13-item5',
            'category13-item6', 'category13-item7', 'category13-item8', 'category13-item9', 'category13-item10'
        ]);
        toggleCategory(selectedItemId, otherItemsInCategory);
    }

    // Function to toggle boy dress and hide boy tops, pants, and sweatshirts
    function toggleBoyDress(selectedItemId, otherItemsInCategory) {
        hideItems([
            'category15-item1', 'category15-item2', 'category15-item3', 'category15-item4', 'category15-item5',
            'category15-item6', 'category15-item7', 'category15-item8', 'category15-item9', 'category15-item10',
            'category12-item1', 'category12-item2', 'category12-item3', 'category12-item4', 'category12-item5',
            'category12-item6', 'category12-item7', 'category12-item8', 'category12-item9', 'category12-item10',
            'category5-item1', 'category5-item2', 'category5-item3', 'category5-item4', 'category5-item5',
            'category5-item6', 'category5-item7', 'category5-item8', 'category5-item9', 'category5-item10'
        ]);
        toggleCategory(selectedItemId, otherItemsInCategory);
    }

    // Event listeners for when the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', () => {
        for (let i = 2; i <= 10; i++) {
            // Toggle girl dresses
            document.getElementById(`category13-item${i}`).addEventListener('click', () => toggleDress(`category13-item${i}`, [`category13-item1`, ...Array.from({ length: 10 }, (_, idx) => `category13-item${idx + 1}`).filter(item => item !== `category13-item${i}`)]));
            
            // Toggle girl tops
            document.getElementById(`category14-item${i}`).addEventListener('click', () => toggleGirlTop(`category14-item${i}`, [`category14-item1`, ...Array.from({ length: 10 }, (_, idx) => `category14-item${idx + 1}`).filter(item => item !== `category14-item${i}`)]));
            
            // Toggle sweatshirts
            document.getElementById(`category4-item${i}`).addEventListener('click', () => toggleSweatshirt(`category4-item${i}`, [`category4-item1`, ...Array.from({ length: 10 }, (_, idx) => `category4-item${idx + 1}`).filter(item => item !== `category4-item${i}`)]));
            
            // Toggle boy dresses
            document.getElementById(`category22-item${i}`).addEventListener('click', () => toggleBoyDress(`category22-item${i}`, [`category22-item1`, ...Array.from({ length: 10 }, (_, idx) => `category22-item${idx + 1}`).filter(item => item !== `category22-item${i}`)]));
        }
    });
</script>