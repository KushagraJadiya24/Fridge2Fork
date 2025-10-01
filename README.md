# Fridge2Fork 🥗

A clean, minimalist web application that helps users discover recipes based on ingredients they already have. Simply enter your available ingredients, and Fridge2Fork will find delicious recipes you can make right now.

## Project Description

Fridge2Fork is designed to reduce food waste and simplify meal planning by connecting users with recipes that match their available ingredients. The application features a sophisticated, professional interface that prioritizes usability and aesthetic appeal while delivering practical functionality for everyday cooking needs.

## Features

- **Ingredient-Based Search**: Enter comma-separated ingredients to find matching recipes
- **Clean Interface**: Minimalist design with focus on readability and user experience
- **Recipe Cards**: Visual recipe cards with images and quick access to full details
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Fast Loading**: Optimized performance with loading indicators for better UX

## Tech Stack

- **HTML5**: Semantic markup for better accessibility
- **CSS3**: Modern styling with flexbox and grid layouts
- **Vanilla JavaScript**: Pure JS for dynamic content and API integration
- **Inter Font**: Professional typography from Google Fonts
- **Recipe API**: Integration with recipe database for real-time results

## Project Structure

```
fridge2fork/
├── index.html          # Main landing page with search functionality
├── recipe.html         # Individual recipe detail page
├── style.css           # Global styles (shared across pages)
├── script.js           # Main page JavaScript logic
├── recipe.js           # Recipe detail page JavaScript logic
└── README.md           # Project documentation
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/fridge2fork.git
```

2. Navigate to the project directory:

3. Open `index.html` in your web browser or use a local development server:

## Usage

1. Enter your available ingredients in the search box (comma-separated)
   - Example: `chicken, tomato, onion`
2. Click the "Search" button or press Enter
3. Browse through the recipe results displayed as cards
4. Click "View Recipe" on any card to see full recipe details

## API Integration

This project uses a recipe API to fetch recipe data. To set up your own API:

1. Sign up for a recipe API key (e.g., Spoonacular, Edamam, TheMealDB)
2. Update the API endpoint and key in `script.js`
3. Ensure proper error handling for API rate limits

## Customization

### Colors
The design uses a monochromatic color scheme. To customize:
- Primary text: `#1a1a1a`
- Secondary text: `#666`
- Borders: `#e5e5e5`
- Background: `#fafafa`

### Typography
Change the font by updating the Google Fonts import in the HTML files and the `font-family` in CSS.

### Layout
Adjust the container max-width in `.container` class (default: 1200px) for different content widths.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)


## Future Enhancements

- [ ] Add dietary filters (vegetarian, vegan, gluten-free)
- [ ] Save favorite recipes (using localStorage)
- [ ] Meal planning calendar
- [ ] Shopping list generation
- [ ] Nutrition information display
- [ ] User accounts and personalized recommendations
- [ ] Dark mode toggle
- [ ] Recipe ratings and reviews

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


Made with ❤️ for home cooks everywhere
